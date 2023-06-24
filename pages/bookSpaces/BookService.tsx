import Layout from "../../components/Layout";
import CardComponent from "./compponents/CardComponent";
import Grid from '@mui/material/Unstable_Grid2';
import React, { useEffect, useState } from "react";
import SearchResult,{ Result } from '../../models/spacemgmt/Room/SearchResult';
import SpaceService from '../../services/space.service';
import DialogModal from "../../components/common/dialogModal";
import AddServicesModal from "./Modals/addServicesModal";
import Router from "next/router";

const BookService =()=>{

    const [searchResult, setSearchResult] = useState<SearchResult | null>(null);
    const [isServiceOpen, setIsServiceOpen] = React.useState(false);

    useEffect(() => {
        const searchResponse = SpaceService.onSearch();
        setSearchResult(searchResponse);
      }, [])

    return (
        <Layout>
        <div className="px-4">
            <h2 className="text-xl font-bold">Book Services</h2>
            <span style={{fontSize: "12px", color:"#a5a0a0"}}> Select booking from the below list </span>
        </div>
        {/* <div className="py-4">
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
        </div> */}

        <div>
                <div className="flex flex-wrap" onClick={(e) => { setIsServiceOpen(true) }}>
                  {
                    searchResult?.Result.map((x: Result) => <CardComponent key={x.id} roomDetails={x} isCheckBox={false}></CardComponent>)
                  }
                </div>
            </div>
            <DialogModal open={isServiceOpen} onClose={() => { setIsServiceOpen(false) }} modalTitle="Select Services" >
          <AddServicesModal onClose={() => { setIsServiceOpen(false) }} modalFrom="bookService"></AddServicesModal>
        </DialogModal>
        </Layout>
    )

}

export default BookService;