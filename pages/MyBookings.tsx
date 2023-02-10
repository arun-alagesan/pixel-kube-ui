import Layout from "../components/Layout";
import CardComponent from "./CardComponent";
import React from "react";
import Grid from '@mui/material/Unstable_Grid2';

const MyBookings =()=>{
    return (
        <Layout>
        <div className="px-4">
            <h2 className="text-xl font-bold">My Bookings</h2>
            <span style={{fontSize: "12px", color:"#a5a0a0"}}> Manage your past & upcoming bookings </span>
        </div>
        <div className="py-4">
            <Grid container spacing={1}>
                <Grid xs={6}>
                    <div>
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

export default MyBookings;