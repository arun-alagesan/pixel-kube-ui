import Layout from "../../../components/Layout";
import Router from "next/router";
import CardComponent from "../compponents/CardComponent";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FormControl from "@mui/material/FormControl";
import FormGroup from '@mui/material/FormGroup';
import InputLabel from "@mui/material/InputLabel";
// import roomData from "../data/bookRoomData.json";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React, { useEffect, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { Button, Stack } from "@mui/material";
import FloorViewer from "../compponents/FloorViewer";
import SpaceService from "../../../services/space.service";
import SearchResult,{ Result } from "../../../models/spacemgmt/Desk/SearchResult";
import SpaceContext, { initializeDataType } from "../../../context/BookDeskContext";
import ConfirmDeskModal from "../Modals/confirmDeskModal";
import DialogModal from "../../../components/common/dialogModal";

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
const BookDesk = () => {
  const [valueTab, setValueTab] = React.useState(0);
  const [searchResult, setSearchResult] = useState<SearchResult | null>(null);
  const spaceContextValue = React.useContext(SpaceContext);
  const [value, setValue] = React.useState<Dayjs | null>(spaceContextValue.bookDeskInfo.startDate);
  const [isServiceOpen, setIsServiceOpen] = React.useState(false);
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

  return (
    <Layout>
      <div>
        <h2 className="text-xl font-bold">Book Desk</h2>
        <span style={{ fontSize: "12px", color: "#a5a0a0" }}> Check availabilty </span>
      </div>
      <FormGroup>
        <div className="text-sm py-8 mt-4 px-4 md:px-2">
          <div className="flex flex-row md-flex-wrap justify-between">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <FormControl sx={{ m: 1, minWidth: 140 }} size="small">
                <DateTimePicker className="text-sm"
                  renderInput={(props) => <TextField {...props} />}
                  label="Start Date & Start Time"
                  value={spaceContextValue.bookDeskInfo.startDate}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                />
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 140 }} size="small">
                <DateTimePicker className="text-sm"
                  renderInput={(props) => <TextField {...props} />}
                  label="End Date & End Time"
                  value={spaceContextValue.bookDeskInfo.endDate}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                />
              </FormControl>
            </LocalizationProvider>
            <Stack direction="row" className='h-14'>
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
                  {spaceContextValue?.bookingServiceDetails?.mapDetails?.map((x) => {
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
                    searchResult?.Result.map((x: Result) => <CardComponent key={x.id} deskDetails={x} isCheckBox={true}></CardComponent>)
                  }
                </div>
                <Button variant="contained" className="flex-1 w-64 absolute bottom-0 right-0" onClick={(e) => { setIsServiceOpen(true) }}>
                    Book Desk
                  </Button>
              </TabPanel>
              <TabPanel value={valueTab} index={1}>
                <FloorViewer></FloorViewer>
              </TabPanel>
            </div>
          </Box>
        </div>
      </div>
      <DialogModal open={isServiceOpen} onClose={() => { setIsServiceOpen(false) }} modalTitle="" >
          <ConfirmDeskModal onClose={() => { setIsServiceOpen(false) }} ></ConfirmDeskModal>
        </DialogModal>
    </Layout>
  );
};
export default BookDesk;