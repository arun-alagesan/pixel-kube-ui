import classNames from "classnames";
import React, { useMemo, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import PixleKubeLogo from "../assets/icons/pixelkube-logo.svg";
import AdminApps from "../assets/icons/admin.svg";
import DashBoard from "../assets/icons/dashboard.svg";
import ConnectionManagement from "../assets/icons/connectormanagement.svg";
import SystemManagement from "../assets/icons/systemmanagement.svg";
import UserManagement from "../assets/icons/usermanagement.svg";
import SpaceManagement from "../assets/icons/spacemanagement.svg";
import ExpandArrow from "../assets/icons/expandArrow.svg";
import ToggleIcon from "../assets/icons/toggle.svg";

import BookRoom from "../assets/icons/bookRoom.svg";
import BookDesk from "../assets/icons/bookDesk.svg";
import FindColleague from "../assets/icons/findCollegue.svg";
import ManageVisitor from "../assets/icons/manageVisitor.svg";
import BookParking from "../assets/icons/bookParking.svg";
import BookService from "../assets/icons/bookServices.svg";
import MyBookings from "../assets/icons/myBookings.svg";

import { display } from "@mui/system";
import SpaceContext from "../context/BookSpaceContext"

const Sidebar = () => {
  const spaceContextValue = React.useContext(SpaceContext);
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);
  const [isCollapseBookSpace, setCollapseBookSpace] = useState(spaceContextValue.isBookSpaceMenu);
  // const [selectedItem,setSelecte]

  const menuItems = [
    { id: 0, label: "Admin Apps", icon: AdminApps, link: "/" },
    {
      id: 1, label: "Book Spaces", icon: SpaceManagement, link: "", isGroupMenu: true, collapsefn: setCollapseBookSpace,
      subMenu: [
        { id: 11, label: "Book Room", icon: BookRoom, link: "/bookSpaces/BookRoom", },
        { id: 12, label: "Book Desk", icon: BookDesk, link: "/bookSpaces/BookDesk", },
        { id: 13, label: "Find Colleague", icon: FindColleague, link: "/bookSpaces/FindColleague", },
        { id: 14, label: "Manage Visitor", icon: ManageVisitor, link: "/bookSpaces/ManageVisitor", },
        { id: 15, label: "Book Parking", icon: BookParking, link: "/bookSpaces/BookParking", },
        { id: 16, label: "Book Services", icon: BookService, link: "/bookSpaces/BookService", },
        { id: 17, label: "My Bookings", icon: MyBookings, link: "/bookSpaces/MyBookings", },
      ],
    },
    { id: 2, label: "Dashboard", icon: DashBoard, link: "/dashboard" },
    { id: 3, label: "Connector Management", icon: ConnectionManagement, link: "/connector", },
    { id: 4, label: "Space Management", icon: SpaceManagement, link: "/space" },
    { id: 5, label: "User Management", icon: UserManagement, link: "/" },
    { id: 6, label: "System Management", icon: SystemManagement, link: "/" },
  ];

  const router = useRouter();

  const activeMenu = useMemo(
    () => menuItems.find((menu) => menu.link === router.pathname),
    [router.pathname]
  );

  const wrapperclasses = classNames(
    "flex justify-between flex-col border bg-white h-full t-0 l-0 sidebar",
    {
      ["w-72"]: !toggleCollapse,
      ["w-20"]: toggleCollapse,
    }
  );
  const collapseIconClasses = classNames(
    "p-0 mt-2.5 mr-1 bg-sky-200 absolute toggle-arrow bg-white",
    {
      ["rotate-180"]: toggleCollapse,
    }
  );
  const getSubMenuItems = (menu: any, classes: any) => {
    let submenus = menu.subMenu?.map((submenu: any, i: number) => {
      // //debugger;
      const bgcolor = spaceContextValue.selectedMenu == submenu.id ? "#e0ffff" : ""
      return (
        <div className={classes} style={{ backgroundColor: bgcolor }} key={i}>
          <Link href={submenu.link}
            onClick={() => {
              spaceContextValue.selectedMenu = submenu.id;
            }}>
            <button className="flex py-4 px-3 items-center w-full h-full">
              <div style={{ width: "2.5rem" }}>
                <submenu.icon />
              </div>
              {!toggleCollapse && (
                <div style={{ fontSize: "14px" }}>
                  <span
                    className={classNames(
                      "text-md font-medium text-text-light",
                      {
                        hidden: toggleCollapse,
                      }
                    )}
                  >
                    {submenu.label}
                  </span>
                </div>
              )}
            </button>
          </Link>
        </div>

      );
    });

    return submenus;
  };

  const getNavItemClasses = (menu: any) => {
    return classNames(
      "items-center cursor-pointer hover:bg-sky-200 rounded w-full overflow-hidden whitespace-nowrap",
      {
        ["bg-sky-200"]: activeMenu?.id === menu.id,
      }
    );
  };

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
      style={{ transition: "width 300ms cubic-bezier(0.2, 0 ,0, 1) 0s", }}
    >
      <div className="flex flex-col"  style={{overflowY:'clip', overflowX:"visible"}}>
        <div className="flex items-center justify-between relative">
          <div
            className="mainlogo flex items-center pl-2 pt-4 gap-4"
            style={{ margin: "auto" }} >
            <PixleKubeLogo />
            <button className={collapseIconClasses} onClick={handleSidebarToggle}>
              <ToggleIcon />
            </button>
          </div>
        </div>
        <div className="flex flex-col items-start mt-4" style={{overflowY: 'hidden' }}>
          <div style={{ overflowY:'auto', width:'100%'}}>
            {menuItems.map(({ icon: Icon, ...menu }, i: number) => {
              const classes = getNavItemClasses(menu);
              const subMenuItems = getSubMenuItems(menu, classes);
              const bgcolor = spaceContextValue.selectedMenu == menu.id ? "#e0ffff" : ""

              return (
                <div
                  style={{ width: "100%", borderBottom: "1px solid #f7f3f3", backgroundColor: bgcolor }}
                  key={i}
                >
                  <div className={classes} key={i}>
                    <Link
                      href={menu.link}
                      onClick={() => {
                        if (menu.collapsefn)
                          menu.collapsefn(!isCollapseBookSpace);
                        spaceContextValue.isBookSpaceMenu = !spaceContextValue.isBookSpaceMenu;
                        if (!menu.isGroupMenu)
                          spaceContextValue.selectedMenu = menu.id;
                      }}
                    >
                      <button className="flex py-4 px-3 items-center w-full h-full">
                        <div style={{ width: "2.5rem" }}>
                          <Icon />
                        </div>
                        {!toggleCollapse && (
                          <div
                            style={{
                              width: "70%",
                              textAlign: "left",
                              fontSize: "14px",
                            }}
                          >
                            <span
                              className={classNames(
                                "text-md font-medium text-text-light",
                                { hidden: toggleCollapse }
                              )}
                            >
                              {menu.label}
                            </span>
                          </div>
                        )}
                        {menu.isGroupMenu && (
                          <div className={isCollapseBookSpace ? "rotate-180" : ""}>
                            <ExpandArrow />
                          </div>
                        )}
                      </button>
                    </Link>
                  </div>
                  {isCollapseBookSpace && <div>{subMenuItems}</div>}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div></div>

    </div>
  );
};

export default Sidebar;
