import React from "react";
import Image from "next/image";
const UserInfoHeaderItem = () => {

    const userInfo = () => {
        window.alert('clicked and hitched');
    }

    return (
        <div onClick={userInfo}><Image src={"/assets/images/userprofile.png"} alt="" width="50" height="50" /> </div>
    );

}

export default UserInfoHeaderItem;