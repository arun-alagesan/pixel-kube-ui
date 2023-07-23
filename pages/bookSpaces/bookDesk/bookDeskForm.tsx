import React from "react";
import Layout from "../../../components/Layout";
import Card from '@mui/material/Card';
import Grid from '@mui/material/Unstable_Grid2';
import CardContent from '@mui/material/CardContent';
import { Button, DialogTitle, IconButton, Stack } from "@mui/material";
import Typography from '@mui/material/Typography';
import Router from "next/router";
import FormControl from "@mui/material/FormControl";
import FormGroup from '@mui/material/FormGroup';
import Select, { SelectChangeEvent } from "@mui/material/Select";
import SystemManagement from "/assets/icons/systemmanagement.svg";
import AdminApps from "/assets/icons/admin.svg";
import SpaceManagement from "/assets/icons/spacemanagement.svg";
import CalendarIcon from "/assets/icons/calendarIcon.svg"
import { Theme, useTheme } from '@mui/material/styles';
import AddServicesModal from "../Modals/addServicesModal";
import DialogModal from "../../../components/common/dialogModal";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

const BookDeskForm = () => {
  const [isServiceOpen, setIsServiceOpen] = React.useState(false);

  const onBookDeskClick = () => {
    Router.push("/bookSpaces/bookDesk/confirmDesk");
  }

  return (
    <Layout>
      <div className="flex justify-between sm:block sm:px-16 mt-4 px-16 md:px-2">
        <div className="col-md-6 flex md-flex-wrap justify-between">
          <Card sx={{ maxWidth: 345 }} className="shadow-none bg-transparent">
            <img src={"/assets/images/userprofile.png"} alt="" className="float-left md:float-none sm:float-none lg:float-none" width="100" height="60" />
            <CardContent className="float-right">
              <Typography gutterBottom variant="h5" component="div" className="text-base">
                Desk 01
              </Typography>
              <Typography variant="body2" color="text.secondary" className="text-xs">
                2nd Floor, Smartcity, UK
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
                    January 20
                    <span className="px-1">5.30 PM</span>
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
                      January 20
                      <span className="px-1">5.30 PM</span>
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
      <FormGroup>
        <div className="row w-full text-sm mt-4 px-80 lg:px-2 md:px-2 sm:px-1">
          <div className="flex flex-col py-2">
            <div className="text-sm">
              <Stack direction="row" spacing={5}>
                <Button variant="outlined" className="flex-1 w-64" onClick={(e) => { setIsServiceOpen(true) }}>Add Services</Button>
                <Button variant="outlined" className="flex-1 w-64" onClick={(e)=>Router.push('.././bookParking/ParkingView')}>Add Parking</Button>
              </Stack>
            </div>
            <div className="text-sm">
              <FormControl fullWidth sx={{ margin: "20px 20px 0px 0px" }} size="small">
                <Button variant="contained" className="w-100" onClick={() => onBookDeskClick()}>Book Desk</Button>
              </FormControl>
            </div>
          </div>
        </div>
        <DialogModal open={isServiceOpen} onClose={() => { setIsServiceOpen(false) }} modalTitle="Select Services" >
          <AddServicesModal onClose={() => { setIsServiceOpen(false) }} ></AddServicesModal>
        </DialogModal>
      </FormGroup>
    </Layout>
  );
};
export default BookDeskForm;