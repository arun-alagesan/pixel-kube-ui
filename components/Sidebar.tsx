import classNames from "classnames";
import React, { useMemo, useState } from "react";
import ArrowIcon from "./icons/ArrowIcon";

import { useRouter } from "next/router";
import Link from "next/link";

import PixleKubeLogo from "../assets/icons/pixelkube-logo.svg"
import AdminApps from "../assets/icons/admin.svg";
import DashBoard from "../assets/icons/dashboard.svg";
import ConnectionManagement from "../assets/icons/connectormanagement.svg"
import SystemManagement from "../assets/icons/systemmanagement.svg"
import UserManagement from "../assets/icons/usermanagement.svg"
import SpaceManagement from "../assets/icons/spacemanagement.svg"
const menuItems = [
    {id: 1, label: "Admin Apps", icon: AdminApps, link: "/"},
    {id: 2, label: "Dashboard", icon: DashBoard, link: "/dashboard"},
    {id: 3, label: "Connector Management", icon: ConnectionManagement, link: "/connector"},
    {id: 4, label: "Space Management", icon: SpaceManagement, link: "/space"},
    {id: 5, label: "User Management", icon: UserManagement, link: "/"},
    {id: 6, label: "System Management", icon: SystemManagement, link: "/"}
]

const Sidebar = () => {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);

   const router = useRouter()

  const activeMenu = useMemo(() => menuItems.find(menu => menu.link === router.pathname), [router.pathname])

  const wrapperclasses = classNames(
    "h-screen flex justify-between flex-col border w-80 relative",
    {
      ["w-80"]: !toggleCollapse,
      ["w-20"]: toggleCollapse,
    }
  );
  const collapseIconClasses = classNames(
    "p-2 bg-light-lighter absolute toggle-arrow",
    {
      "rotate-180": toggleCollapse,
    }
  );

  const getNavItemClasses = (menu: any) => {
    return classNames("flex items-center cursor-pointer hover:bg-light-lighter rounded w-full overflow-hidden whitespace-nowrap",
    {
        ["bg-light-lighter"]: activeMenu?.id === menu.id
    })
  }

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  return (
    <div
      className={wrapperclasses}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOver}
      style={{ transition: "width 300ms cubic-bezier(0.2, 0 ,0, 1) 0s" }}
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between relative">
          <div className="mainlogo flex items-center pl-2 pt-4 gap-4" style={{margin:"auto"}} >
            <PixleKubeLogo />
          </div>
        </div>
        <div className="flex flex-col items-start mt-4">
            {menuItems.map(({ icon: Icon, ...menu }, i:number) => {
                const classes = getNavItemClasses(menu);
                return (
                    <div className={classes} key={i}>
                        <Link href={menu.link}>
                            <button className="flex p-3 items-center w-full h-full">
                                <div style={{ width: '2 rem' }}>
                                    <Icon style={{ border:"1px red soid" }} />
                                </div>
                                {!toggleCollapse && (
                                    <span className={classNames('text-md font-medium text-text-light', {hidden: toggleCollapse})}>
                                        {menu.label}
                                    </span>
                                )}
                            </button>
                        </Link>
                        
                    </div>
                )
            })}
        </div>
      </div>
      <div></div>
      <button className={collapseIconClasses} onClick={handleSidebarToggle}>
        <ArrowIcon />
      </button>
    </div>
  );
};

export default Sidebar;
