import Link from "next/link";
import React, { useMemo, useState } from "react";
import { Icon } from "@mui/material";
import classNames from "classnames";
import ExpandArrow from "../assets/icons/expandArrow.svg";
import { useRouter } from "next/router";


const SidebarItem = ({ toggleCollapse, menu }: any) => {
    const router = useRouter();
    const activeMenu = menu.subMenu?.find((item: any) => item.link === router.pathname);
    const [isExpanded, setIsexpanded] = useState(activeMenu ? true : false);

    const getNavItemClasses = () => {
        return classNames(
            "items-center cursor-pointer hover:bg-sky-200 rounded w-full overflow-hidden whitespace-nowrap"
        );
    };
    const getSubMenuItems = (menu: any) => {
        let submenus = menu.subMenu?.map((submenu: any, i: number) => {

            const classes = getNavItemClasses();

            const bgcolor = activeMenu?.id == submenu.id ? "#e0ffff" : ""
            return (
                <div className={classes} style={{ backgroundColor: bgcolor }} key={i}>
                    <Link href={submenu.link}
                    >
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

    const subMenuitems = getSubMenuItems(menu);



    return (
        <div
            style={{ width: "100%", borderBottom: "1px solid #f7f3f3" }}
        >
            <div className={getNavItemClasses()}>
                <Link
                    href={menu.link}
                    onClick={() => {
                        setIsexpanded(!isExpanded);
                    }}
                >
                    <button className="flex py-4 px-3 items-center w-full h-full">
                        <div style={{ width: "2.5rem" }}>
                            <menu.icon />
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
                            <div className={isExpanded ? "rotate-180" : ""}>
                                <ExpandArrow />
                            </div>
                        )}
                    </button>
                </Link>
            </div>
            {isExpanded && <div>{subMenuitems}</div>}
        </div>
    )

}

export default SidebarItem;