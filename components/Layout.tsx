import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
//import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Sidebar from "./Sidebar";
import NotificationIcon from "../assets/icons/notification.svg"
import SearchIcon from "../assets/icons/loupe.svg"
import UserContext, { initialvalue } from "../pages/context/BookSpaceContext"

const Layout = ({ children }: any) => {

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" className="p-0 fullHeight">
        <UserContext.Provider value={initialvalue}>
          <div className="xl:container xl:mx-auto 2xl:container 2xl:mx-auto  flex flex-row justify-start h-full" style={{ filter: "drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161))" }}>
            <Sidebar />
            <div className="flex flex-column w-full border ">
              <div className="h-16 p-4 flex items-center justify-end header-comp bg-white" >
                {/* <div><SearchIcon></SearchIcon></div> */}
                <div className="flex items-center justify-content-between" >
                  <div className="p-4">
                    <NotificationIcon />
                  </div>
                  <div ><img src={"/assets/images/userprofile.png"} alt="" width="50" height="50" /> </div>
                </div>
              </div>
              <div className="flex flex-column p-4 h-full">
                {children}
              </div>
            </div>
          </div>

        </UserContext.Provider>
      </Container>
    </React.Fragment>
  );
};

export default Layout;
