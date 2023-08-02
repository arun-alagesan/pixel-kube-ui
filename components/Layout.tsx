import React from "react";
//import Box from '@mui/material/Box';
import Sidebar from "./Sidebar";
import NotificationIcon from "../assets/icons/notification.svg"
import UserContext, { initialvalue } from "../context/BookSpaceContext"
import Image from 'next/image'

const Layout = ({ children }: any) => {
    return (
        <UserContext.Provider value={initialvalue}>
          <div className="xl:container xl:mx-auto 2xl:container 2xl:mx-auto block flex fullHeight mx-auto px-0 sm:px-6 md:px-8" style={{maxWidth:"90rem"}}>
            <Sidebar />
            <div className="flex flex-1 w-full">
              <div className="w-full">
                <header className="w-full " style={{height: '60px'}}>
                  <div className="h-16 p-4 flex items-center justify-end header-comp bg-white border" >
                    <div className="flex items-center justify-content-between" >
                      <div className="p-4">
                        <NotificationIcon />
                      </div>
                      <div ><Image src={"/assets/images/userprofile.png"} alt="" width="50" height="50" /> </div>
                    </div>
                  </div>
                </header>
                <div className="border" style={{  overflowY: 'scroll', height: 'calc(100% - 60px)' }}  >
                  <div className="relative  p-4 h-full" style={{ filter: "drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161))" }}>
                    {children}
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </UserContext.Provider>
    )
};

export default Layout;
