import Layout from "../../components/Layout";
import CardComponent from "./compponents/CardComponent";
import React from "react";
import Grid from '@mui/material/Unstable_Grid2';
import Router from "next/router";

const BookParking =()=>{

const onClickParkingCard = () => {
    Router.push("./bookParking/ParkingView");
}
    return (
        <Layout>
        <div className="px-4">
            <h2 className="text-xl font-bold">Book Parking</h2>
            <span style={{fontSize: "12px", color:"#a5a0a0"}}> Select booking from the below list </span>
        </div>
        <div className="py-4">
            <Grid container spacing={1}>
                <Grid xs={6}>
                    <div onClick={() => onClickParkingCard()}>
                    <CardComponent></CardComponent>
                    </div>
                </Grid>

                <Grid xs={6}>
                    <div>
                    <CardComponent></CardComponent>
                    </div>
                </Grid>
            </Grid>
        </div>
        </Layout>
    )

}

export default BookParking;