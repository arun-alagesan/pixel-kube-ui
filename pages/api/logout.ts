import type { NextApiRequest, NextApiResponse } from 'next'
import { decrypt } from '../../services/crypto';
type Data = {
  statusText: string
}

export default  async function handler(req: NextApiRequest,
  res: NextApiResponse<Data>) {
    
    const accessToken = req.body?.id_token;
    const idToken = decrypt(accessToken);
    var url = `${process.env.END_SESSION_URL}?id_token_hint=${idToken}&post_logout_redirect_uri=${encodeURIComponent(process.env.NEXTAUTH_URL as string)}`;
 
    // this will log out the user on Keycloak side
    try {
      const status = await fetch(url, { method: "GET" });
      console.log("Log out API status success");
    } catch (err) {
      console.error(err);
      //return new Response( null,{status : 500,statusText:"Ckeck Logs for error"});
      res.status(500).json({statusText:"Check Error Logs"})
    }
  res.status(200).json({statusText:"Success"});
}