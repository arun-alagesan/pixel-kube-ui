import React from "react"
import Button from '@mui/material/Button';
import { signIn,signOut,useSession } from "next-auth/react"
import Layout from "../components/Layout"

async function keycloakSessionLogOut(session) {
    try {
         const response = await fetch(`/api/logout`, { 
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                id_token : session.id_token
            })
         });
         const data =await response.json(); 
         console.log(data);
         
        signOut({callbackUrl:"/auth/signin",redirect:true});
    } catch (err) {
        console.error(err);
    }
}
const UserInfo =() =>{
    const {data : session} = useSession()

    console.log(session);
    return (
        <Layout>
            {session?.user ? (
                <div className="p-20">
                    <p className="text-sky-600 mb-10"><span className="text-2xl font-bold mb-10">User Name :</span> {session.user.name}</p>
                    <p className="text-sky-600 mb-10"><span className="text-2xl font-bold mb-10">Email :</span> {session.user.email}</p>
                    
                    <Button sx={{ textTransform: 'none' }} 
                        className='px-20 mt-3 text-2xl'
                        onClick={() => keycloakSessionLogOut(session)}
                        size="medium"
                        variant="contained"
                        >
                            Sign Out
                    </Button>
                </div>
        ) : (
            <div>
                <Button sx={{ textTransform: 'none' }} 
                className='px-20 mt-3 text-2xl'
                onClick={() => signIn("keycloak")}
                size="medium"
                variant="contained"
                >
                    Login
                </Button>
            </div>
        )}
        </Layout>
    )
}

export default UserInfo;