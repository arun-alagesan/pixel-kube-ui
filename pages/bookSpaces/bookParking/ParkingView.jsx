
import Layout from "../../../components/Layout";
import Card from '@mui/material/Card';
import Grid from '@mui/material/Unstable_Grid2';
import CardContent from '@mui/material/CardContent';
import FloorViewer from "../compponents/FloorViewer"
import { Button, DialogTitle, IconButton, Stack } from "@mui/material";
import Typography from '@mui/material/Typography';
import Router from "next/router";

import FormControl from "@mui/material/FormControl";
import FormGroup from '@mui/material/FormGroup';

import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import roomData from "../data/bookRoomData.json";

import SystemManagement from "/assets/icons/systemmanagement.svg";
import AdminApps from "/assets/icons/admin.svg";
import SpaceManagement from "/assets/icons/spacemanagement.svg";
import CalendarIcon from "/assets/icons/calendarIcon.svg";

import SelectParkingSlotModal from "../Modals/selectParkingSlotModal";
import DialogModal from "../../../components/common/dialogModal";
import { useEffect, useState } from "react";
import ParkingService from "../../../services/parking.service";

function ParkingView() {
    const [isSlotOpen, setIsSlotOpen] = useState(false);
    const [selectedID, setSelectedID] = useState();
    const [parkingDetail, setParkingDetail] = useState();
    const [selectedFloor, setSelectedFloor] = useState(0);
    const [savedSlots,setSavedSlots]=useState([]);

    const onBookParkingClick = () => {
        Router.push("/bookSpaces/bookParking/confirmParking");
    }

    useEffect(() => {
        ParkingService.getParkingSlots().then((res)=>{
            setParkingDetail(res);
        });
    }, [])
    return (
        <Layout>
            <div className="flex justify-between sm:block sm:px-16 mt-4 px-16 md:px-2">
                <div className="col-md-6 flex md-flex-wrap justify-between">
                    <Card sx={{ maxWidth: 345 }} className="shadow-none bg-transparent">
                        <img src={"/assets/images/userprofile.png"} alt="" className="float-left md:float-none sm:float-none lg:float-none" width="100" height="60" />
                        <CardContent className="float-right">
                            <Typography gutterBottom variant="h5" component="div" className="text-base">
                                {parkingDetail?.buildingName}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" className="text-xs">
                                {parkingDetail?.address}
                            </Typography>
                            <div className="pt-2">
                                <Grid container spacing={2}>
                                    <Grid xs={2}>
                                        <SystemManagement />
                                    </Grid>

                                    <Grid xs={2}>
                                        <AdminApps />
                                    </Grid>

                                    <Grid xs={2}>
                                        <SpaceManagement />
                                    </Grid>
                                </Grid>
                            </div>
                        </CardContent>

                    </Card>
                </div>
                <div className="col-md-6 lg:flex md:flex flex justify-end items-end sm:block">
                    <div className="flex justify-between items-end md-flex-wrap md:block sm:block lg:block">
                        <div className="px-4">
                            <Card sx={{ maxWidth: 345 }} className="shadow-none bg-transparent h-20">
                                <div className="float-left pt-5 pl-1.5">
                                    <CalendarIcon />
                                </div>
                                <CardContent className="float-right sm:float-none sm:pl-12 p-3">
                                    <Typography gutterBottom variant="h5" component="div" className="text-xs text-text-light">
                                        Start Date & Start Time
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" className="text-xs font-bold">
                                        {parkingDetail?.startDate}
                                        {/* <span className="px-1">5.30 PM</span> */}
                                    </Typography>

                                </CardContent>

                            </Card>
                        </div>

                        <div className="flex md-flex-wrap md:block sm:block justify-between items-end">
                            <div className="px-4">
                                <Card sx={{ maxWidth: 345 }} className="shadow-none bg-transparent h-20">
                                    <div className="float-left pt-5 pl-1.5">
                                        <CalendarIcon />
                                    </div>
                                    <CardContent className="float-right sm:float-none sm:pl-12 p-3">
                                        <Typography gutterBottom variant="h5" component="div" className="text-xs text-text-light">
                                            End Date & End Time
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" className="text-xs font-bold">
                                            {parkingDetail?.endDate}
                                            {/* <span className="px-1">5.30 PM</span> */}
                                        </Typography>
                                        <div className="pt-2">

                                        </div>
                                    </CardContent>

                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <br></br>
            <hr></hr>

            <div>
                <FormGroup>
                    <FormControl sx={{ margin: "20px 20px 0px 0px", width:"200px" }} size="small">
                        <InputLabel id="locationLabel">select Map</InputLabel>
                        <Select onChange={(e) => { setSelectedFloor(e.target.value) }} defaultValue={0} labelId="locationLabel" label="Select Map" className="text-sm">

                            {parkingDetail?.floorDetails?.map((x, y) => {
                                return <MenuItem key={y} value={y}>{x.floorName}</MenuItem>;
                            })}

                        </Select>

                    </FormControl>
                </FormGroup>
                <br></br>
                <div className="row">
                    <div>{savedSlots}</div>
                    <div className="col-6 text-center">
                        <FloorViewer floorSlots={parkingDetail?.floorDetails[selectedFloor]?.parkingSlots} onSlotClick={(id) => { setIsSlotOpen(true); setSelectedID(id) }} imageSrc={parkingDetail?.floorDetails[selectedFloor]?.imageData}></FloorViewer>
                    </div>
                     <div  className="col-6 text-center">
                        {parkingDetail?.floorDetails[selectedFloor]?.parkingSlots.map(x=>
                        <div style={{display:savedSlots.some(y=>{return y==x.id})?"block":"none"}}>
                            
                            <Card className='rounded-md' sx={{ height: "25%",width:"70%", marginLeft:"20%"  }}>
                            <Typography sx={{ fontWeight: 'bold' }} marginTop={"20px"} align="center">{x.id}</Typography>
                                <Typography sx={{ fontWeight: 'normal',alignContent:"center" }} marginTop={"20px"} align="center">{x.name}&nbsp;&nbsp;&nbsp;&nbsp;KZE 4567</Typography>
                                <br></br>
                            </Card>
                            <br></br>
                        </div>
                            )
                            }
                        
                        
                        {savedSlots.length>1?
                        <FormControl className='rounded-md' sx={{ height: "25%",width:"70%", marginLeft:"10%"}}>
                            <Button variant="contained" onClick={() => onBookParkingClick()}>Request</Button>
                        </FormControl>:null}
                    </div>
                </div>

            </div>

            <DialogModal open={isSlotOpen} onClose={() => { setIsSlotOpen(false) }} modalTitle="" >
                <SelectParkingSlotModal selectedSlot={selectedID} onClose={() => { setIsSlotOpen(false) }} addClick={(slot)=>{setSavedSlots(current => [...current, slot]); ParkingService.saveSlot(slot);setIsSlotOpen(false);}} ></SelectParkingSlotModal>
            </DialogModal>
        </Layout>
    )
}

export default ParkingView