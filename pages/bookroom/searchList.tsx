import Layout from "../../components/Layout";
import Router from "next/router";
import CardComponent from "../CardComponent";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import FormControl from "@mui/material/FormControl";
import FormGroup from '@mui/material/FormGroup';
import InputLabel from "@mui/material/InputLabel";
import roomData from "../data/bookRoomData.json";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React from "react";
import dayjs, { Dayjs } from "dayjs";
import { Button, Stack } from "@mui/material";
import SpaceContext from "../context/BookSpaceContext";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
function TabPanel(props: TabPanelProps) {
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
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValueTab(newValue);
  };

  const onBookMeetClick=()=>{
    //const searchInfo = {startDate,endDate, location,building,attendies,floor}
    //spaceContextValue.bookRoomInfo = searchInfo;
    Router.push("/bookroom/bookMeetingForm");

  }

  const spaceContextValue = React.useContext(SpaceContext); 
  const [value, setValue] = React.useState<Dayjs | null>(spaceContextValue.bookRoomInfo.startDate);
  return (
    <Layout>
      {console.log(spaceContextValue)}
        <div>
        <h2 className="text-xl font-bold">Book Room</h2>
        <span style={{fontSize: "12px", color:"#a5a0a0"}}> Check availabilty </span>
        </div>

        <FormGroup>
      <div className="text-sm py-8 mt-4 px-4 md:px-2">
        <div className="flex md-flex-wrap justify-between">
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="All Day"/>
          <FormControl sx={{ m: 1, minWidth: 140 }} >
            <InputLabel id="reminderLabel">Reminder</InputLabel>
            <Select labelId="reminderLabel" label="Reminders">
              {roomData.reminders.map((x) => {
                return <MenuItem key={x.id} value={x.name}>{x.name}</MenuItem>;
              })}
            </Select>
          </FormControl>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
          <FormControl sx={{ m: 1, minWidth: 140 }} size="small">
            <DateTimePicker
              renderInput={(props) => <TextField {...props} />}
              label="Start Date & Start Time"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
            />
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 140 }} size="small">
             <DateTimePicker
              renderInput={(props) => <TextField {...props} />}
              label="End Date & End Time"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
            />
            </FormControl>
          </LocalizationProvider>
          <div className="flex items-center justify-between">
            <Stack direction="row" spacing={2} className='h-14'>
              <Button variant="outlined" className="">Clear</Button>

              <Button variant="contained" className="my-0 mx-11">Search</Button>
            </Stack>
            </div>
      </div>
      </div>
      </FormGroup>
        <div className="listMapView">

          
            <div>
                <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="List View" {...a11yProps(0)} />
                    <Tab label="Map View" {...a11yProps(1)} />
                  </Tabs>
                </Box>
                <div className="py-2.5">
                    <FormControl sx={{ m: 1, minWidth: 140 }} size="small">
                      <InputLabel id="selectMapLabel">Select Map</InputLabel>
                      <Select labelId="reminderLabel" label="Select Map">
                        {roomData.selectMap.map((x) => {
                          return <MenuItem key={x.id} value={x.name}>{x.name}</MenuItem>;
                        })}
                      </Select>
                    </FormControl>
                    <div className="float-right">
                      <span className="text-md font-medium text-text-light">About 2 result(s)</span>
                    </div>
                  </div>
                <TabPanel value={valueTab} index={0}>
                  
                <CardComponent></CardComponent>
                </TabPanel>
                <TabPanel value={valueTab} index={1}>
                  Item Two
                </TabPanel>
              </Box>
            </div>

            <div className="relative h-32">
              <Button variant="contained" className="flex-1 w-64 absolute bottom-0 right-0" onClick={() => onBookMeetClick()}>
                  Book Meeting
                </Button>
              </div>
    </div>
    </Layout>   
  );
};
export default BookRoom;
