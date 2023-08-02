import NextAuth from "next-auth"
import KeycloakProvider from "next-auth/providers/keycloak"
import CredentialsProvider from "next-auth/providers/credentials"
import jwt_decode from "jwt-decode"
import {encrypt} from "../../../services/crypto"
import { ConstructionOutlined } from "@mui/icons-material"

/* async function refreshAccessToken(token) {
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
  } */

  async function authorizeToken(user) {
    const resp = await fetch(`${process.env.AUTH_TOKEN_URL}`, {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id: `${process.env.DEMO_FRONTEND_CLIENT_ID}`,
        client_secret: `${process.env.DEMO_FRONTEND_CLIENT_SECRET}`,
        grant_type: "password",
        credential: user,
      }),
      method: "POST",
    });
    const refreshToken = await resp.json();
    
    if (!resp.ok) throw refreshToken;
    console.log(refreshToken)
    return {
      ...user,
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
        }),
        CredentialsProvider({
            type: "credentials",
            // The name to display on the sign in form (e.g. 'Sign in with...')
            
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
              //username: { label: "Username", type: "text", placeholder: "jsmith" },
              //password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
              // You need to provide your own logic here that takes the credentials
              // submitted and returns either a object representing a user or value
              // that is false/null if the credentials are invalid.
              // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
              // You can also use the `req` object to obtain additional parameters
              // (i.e., the request IP address)
              //const (username, password) = credentials as {
              //      username : string;
              //      password : string;
              //};
              console.log(credentials);
              /* const res = await fetch("/your/endpoint", {
                method: 'POST',
                body: JSON.stringify(credentials),
                headers: { "Content-Type": "application/json" }
              })
              const user = await res.json() */
              const resp = await authorizeToken(credentials)
              const user = {
                id : "1234",
                name : "arun",
                email : "arun.alagesan@gmail.com",
                contact : "9444307766"
              }
              // If no error and we have user data, return it
              if ( user) {
                return user
              }
              // Return null if user data could not be retrieved
              return null
            }
          })
    ],
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
                    // const refreshedToken = await refreshAccessToken(token);
                    console.log("Token is refreshed.")
                    return "refreshedToken";
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