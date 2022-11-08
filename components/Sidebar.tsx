import classNames from "classnames";
import React, { useMemo, useState } from "react";
import ArrowIcon from "./icons/ArrowIcon";
import IconOne from "./icons/IconOne";
import TrashIcon from "./icons/AdminAppIcon";
import AdminAppIcon from "./icons/AdminAppIcon";
import DashBoardIcon from "./icons/DashBoardIcon";
import ConnectorIcon from "./icons/ConnectorIcon";
import SpaceMngtIcon from "./icons/SpaceMngtIcon";
import { useRouter } from "next/router";
import Link from "next/link";

const menuItems = [
    {id: 1, label: "Admin Apps", icon: AdminAppIcon, link: "/"},
    {id: 2, label: "Dashboard", icon: DashBoardIcon, link: "/dashboard"},
    {id: 3, label: "Connector Management", icon: ConnectorIcon, link: "/connector"},
    {id: 4, label: "Space management", icon: SpaceMngtIcon, link: "/space"},
]

const Sidebar = () => {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);

   const router = useRouter()

  const activeMenu = useMemo(() => menuItems.find(menu => menu.link === router.pathname), [router.pathname])

  const wrapperclasses = classNames(
    "h-screen px-4 pt-8 pb-4 flex justify-between flex-col border w-80 relative",
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
          <div className="flex items-center pl-1 gap-4">
            <IconOne />
            {/* <span
              className={classNames("mt-1 text-lg font-medium text-text", {
                hidden: toggleCollapse,
              })}
            >
              Admin Apps
            </span> */}
          </div>
        </div>
        <div className="flex flex-col items-start mt-24">
            {menuItems.map(({ icon: Icon, ...menu }, i:number) => {
                const classes = getNavItemClasses(menu);
                return (
                    <div className={classes} key={i}>
                        <Link href={menu.link}>
                            <button className="flex py-4 px-3 items-center w-full h-full">
                                <div style={{ width: '2.5rem' }}>
                                    <Icon />
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
