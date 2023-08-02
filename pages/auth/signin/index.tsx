import Head from "next/head";
import React from "react";
import SignInform from "../../../components/features/auth/SignInForm"

const SignIn = () =>{
    return (
        <div className="flex flex-col items-center justify-center min-h-screen" >
            <Head>
                <title>Sign In</title>
            </Head>
            <main className="flex flex-col flex-1 items-center justify-center text-center">
                <div className="bg-white  flex ">
                    <div >
                        <SignInform></SignInform>
                    </div>
                </div>
            </main>
        </div>
    )   

}

export default SignIn;