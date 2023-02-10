import React from "react";
import Sidebar from "./Sidebar";
import NotificationIcon from "../assets/icons/notification.svg"
import SearchIcon from "../assets/icons/loupe.svg"
import UserContext,{initialvalue} from "../pages/context/BookSpaceContext"

const Layout = ({ children }: any) => {

  return (
<UserContext.Provider value={initialvalue}>
    <div className="flex flex-row justify-start " style={{ filter: "drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161))" }}>
      <Sidebar />
      <div className="flex flex-column w-full border ">
        <div className="h-20 p-4 flex items-center justify-between header-comp bg-white" style={{justifyContent:"flex-end"}}>
          <div><SearchIcon></SearchIcon></div>
          <div className="flex items-center justify-content-between" >
            <div className="p-4">
              <NotificationIcon />
            </div>
            <div ><img src={"../assets/images/userprofile.png"} alt="" width="60" height="60" /> </div>
          </div>
        </div>
        <div className="flex flex-column p-4 h-full">
          {children}
        </div>
      </div>
    </div>
    </UserContext.Provider>
  );
};

export default Layout;
