import Layout from "../../../components/Layout";
import Router from "next/router";
import CardComponent from "../compponents/CardComponent";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

import FormControl from "@mui/material/FormControl";
import FormGroup from '@mui/material/FormGroup';
import InputLabel from "@mui/material/InputLabel";
// import roomData from "../data/bookRoomData.json";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React, { useEffect, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { Button, Stack } from "@mui/material";
import SpaceContext, { initializeDataType } from "../../context/BookSpaceContext";
import FloorViewer from "../compponents/FloorViewer";
import SpaceService from "../../../services/space.service";
import { Result, SearchResult } from "../dataModals/SearchResult";


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
function TabPanel(props: TabPanelProps) {

  // const [location, setLocation] = useState("");


  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const BookRoom = () => {
  const [valueTab, setValueTab] = React.useState(0);
  const [searchResult, setSearchResult] = useState<SearchResult | null>(null);
  const spaceContextValue = React.useContext(SpaceContext);
  const [value, setValue] = React.useState<Dayjs | null>(spaceContextValue.bookRoomInfo.startDate);

  useEffect(() => {
    (() => {
      if (!spaceContextValue?.bookingServiceDetails?.IsDataAvailable) {
        const basicResponse = SpaceService.getBasicFormDetails();
        const initializationData: initializeDataType = {
          ...basicResponse,
          IsDataAvailable: true
        };
        spaceContextValue.bookingServiceDetails = initializationData;
      }
    }
    )();
  }, [])

  useEffect(() => {
    const searchResponse = SpaceService.onSearch();
    setSearchResult(searchResponse);
  }, [])



  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValueTab(newValue);
  };

  const OnSearch = () => {


  }

  const onBookMeetClick = () => {
    Router.push("/bookSpaces/bookroom/bookMeetingForm");

  }


  return (
    <Layout>
      <div>
        <h2 className="text-xl font-bold">Book Room</h2>
        <span style={{ fontSize: "12px", color: "#a5a0a0" }}> Check availabilty </span>
      </div>

      <FormGroup>
        <div className="text-sm py-8 mt-4 px-4 md:px-2">
          <div className="flex flex-row md-flex-wrap justify-between">
            <FormControl sx={{ m: 1, minWidth: 100 }} >
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="All Day" />
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 140 }}>
              <InputLabel id="reminderLabel" className="text-sm">Reminder</InputLabel>
              <Select labelId="reminderLabel" label="Reminders">
                {spaceContextValue?.bookingServiceDetails?.reminders.map((x) => {
                  return <MenuItem key={x.id} value={x.name}>{x.name}</MenuItem>;
                })}
              </Select>
            </FormControl>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <FormControl sx={{ m: 1, minWidth: 140 }} size="small">
                <DateTimePicker className="text-sm"
                  renderInput={(props) => <TextField {...props} />}
                  label="Start Date & Start Time"
                  value={spaceContextValue.bookRoomInfo.startDate}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                />
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 140 }} size="small">
                <DateTimePicker className="text-sm"
                  renderInput={(props) => <TextField {...props} />}
                  label="End Date & End Time"
                  value={spaceContextValue.bookRoomInfo.endDate}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                />
              </FormControl>
            </LocalizationProvider>
            <Stack direction="row" className='h-14'>
              <Button variant="outlined" className="">Clear</Button>
              <Button variant="contained" className="my-0 mx-11" onClick={OnSearch} >Search</Button>
            </Stack>
          </div>
        </div>
      </FormGroup>
      <div className="listMapView">


        <div>
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={valueTab} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="List View" {...a11yProps(0)} />
                <Tab label="Map View" {...a11yProps(1)} />
              </Tabs>
            </Box>
            <div className="py-2.5">
              <FormControl sx={{ m: 1, minWidth: 140 }} size="small">
                <InputLabel id="selectMapLabel">Select Map</InputLabel>
                <Select labelId="reminderLabel" label="Select Map">
                  {spaceContextValue?.bookingServiceDetails?.mapDetails.map((x) => {
                    return <MenuItem key={x.id} value={x.name}>{x.name}</MenuItem>;
                  })}
                </Select>
              </FormControl>
              <div className="float-right">
                <span className="text-md font-medium text-text-light">About 2 result(s)</span>
              </div>
            </div>
            <div>
              <TabPanel value={valueTab} index={0} >
                <div className="flex flex-wrap">
                  {
                    searchResult?.Result.map((x: Result) => <CardComponent key={x.id} roomDetails={x} isCheckBox={true}></CardComponent>)
                  }
                </div>
              </TabPanel>

              <TabPanel value={valueTab} index={1}>
                <FloorViewer></FloorViewer>
              </TabPanel>
            </div>
          </Box>
        </div>


      </div>
    </Layout>
  );
};
export default BookRoom;
