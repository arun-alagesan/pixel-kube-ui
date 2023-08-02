import NextAuth from "next-auth"
import KeycloakProvider from "next-auth/providers/keycloak"
import jwt_decode from "jwt-decode"
import {encrypt} from "../../../services/crypto"

async function refreshAccessToken(token) {
    const resp = await fetch(`${process.env.REFRESH_TOKEN_URL}`, {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id: `${process.env.DEMO_FRONTEND_CLIENT_ID}`,
        client_secret: `${process.env.DEMO_FRONTEND_CLIENT_SECRET}`,
        grant_type: "refresh_token",
        refresh_token: token.refresh_token,
      }),
      method: "POST",
    });
    const refreshToken = await resp.json();
    if (!resp.ok) throw refreshToken;
  
    return {
      ...token,
      access_token: refreshToken.access_token,
      decoded: jwt_decode(refreshToken.access_token),
      id_token: refreshToken.id_token,
      expires_at: Math.floor(Date.now() / 1000) + refreshToken.expires_in,
      refresh_token: refreshToken.refresh_token,
    };
  }

export const authOptions = {
    providers : [
        KeycloakProvider ({
            clientId : `${process.env.CLIENT_ID}`,
            clientSecret : `${process.env.CLIENT_SECRET}`,
            issuer : `${process.env.AUTH_ISSUER}`,
        })
    ],
    pages :{
      signIn : "/auth/signin"
    },
    callbacks : {
        async jwt ({token, account}) {
            const nowTimeStamp = Math.floor(Date.now() / 1000)
            if (account){
                console.log(account);
                token.decoded = jwt_decode(account.access_token);
                token.access_token = account.access_token;
                token.id_token = account.id_token;
                token.expires_at = account.expires_at;
                token.refresh_token = account.refresh_token;
                return token;
            }
            else if (token.expires_at > nowTimeStamp ){
                return token;
            }
            else {
                console.log("Token expired. Will attempt to refresh");
                try{
                    const refreshedToken = await refreshAccessToken(token);
                    console.log("Token is refreshed.")
                    return refreshedToken;
                }
                catch(error){
                    console.error("Error refreshing access token", error);
                    return { ...token, error: "RefreshAccessTokenError" };
                }
            }
        },
        async session ({session, token}) {
            //set whatever needed to be sent to browser session
            session.access_token = encrypt(token.access_token);
            session.id_token = encrypt(token.id_token);
            session.roles = token.decoded.realm_access.roles;
            return session;
        }
    }
}


const handler = NextAuth(authOptions)

export default handler;