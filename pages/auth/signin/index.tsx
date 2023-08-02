import Head from "next/head";
import React from "react";
import Image from "next/image";
import SignInform from "../../../components/features/auth/SignInForm"
const Carousal =() =>{
    return(
        <div className="w-2/5 bg-blue-500  py-28 px-12 text-white">
            <Image className="w-auto h-auto" src={"/assets/images/login-carousal-img.png"} alt="randon carousel image" width={100} height={100} />
            <h2 className="text-3xl font-bold mb-2">Best Meeting Room</h2>
            <h2 className="text-2xl font-bold mb-2">Booking Solution</h2>
            <p className="px-10"> A sophisticated solution that helps you to deploy a flexible workplace</p>
            <div className="py-10 text-center space-x-2">
                <div className="border-5 border-white w-1 rounded-full inline-block mb-2"></div>
                <div className="border-5 border-white w-1 rounded-full inline-block mb-2"></div>
                <div className="border-5 border-orange-400 w-8 rounded-full inline-block mb-2"></div>
            </div>
        </div>
    );

}

const SignIn = () =>{
    return (
        <div className="bg-gray-400 flex flex-col items-center justify-center min-h-screen" >
            <Head>
                <title>Sign In</title>
            </Head>
            <main className="flex flex-col flex-1 items-center justify-center text-center">
                <div className="bg-white  flex ">
                    <div className="w-3/5 p-5">
                        <SignInform></SignInform>
                    </div>
                    <Carousal></Carousal>
                </div>
            </main>
        </div>
    )   

}

export default SignIn;