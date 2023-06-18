import Layout from "../../components/Layout";
import Router from "next/router";
import InputBox from "../../components/features/InputBox/InputBox";
import FormControl from "@mui/material/FormControl";

import FormGroup from "@mui/material/FormGroup";
import InputLabel from "@mui/material/InputLabel";
// import FormInput from '../components/FormInput';
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React, { useEffect, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { Button, Input, Stack } from "@mui/material";
import SpaceService from "../../services/space.service";
import SpaceContext, { initializeDataType } from "../../context/BookSpaceContext";


const BookRoom = () => {
  const spaceContextValue = React.useContext(SpaceContext);
  const [startDate, setStartDate] = React.useState<Dayjs | null>(dayjs("2022-04-07"));
  const [endDate, setEndDate] = React.useState<Dayjs | null>(dayjs("2022-04-07"));
  const [location, setLocation] = useState("");
  const [building, setBuilding] = useState("");
  const [floor, setFloor] = useState("");
  const [remainder, setReminder] = useState("");
  const [attendies, setAttendies] = useState("");

  useEffect(() => {
    function fetchMyApi() {
      const basicResponse = SpaceService.getBasicFormDetails();
      const initializationData: initializeDataType = {
        ...basicResponse,      
        IsDataAvailable: true
      };
      spaceContextValue.bookingServiceDetails = initializationData;

      // setInitializeData(initializationData);
    }
    fetchMyApi();
  }, []);

  const onSearchClick = () => {
    const searchInfo = { startDate, endDate, location, building, attendies, floor }
    spaceContextValue.bookRoomInfo = searchInfo;
    Router.push("./bookroom/searchList");

  }


  // const navigate = useNavigate();
  return (
    <Layout>
      <div>
        <h2 className="text-xl font-bold">Book Room</h2>
        <span style={{ fontSize: "12px", color: "#a5a0a0" }}>
          {" "}
          Check availabilty{" "}
        </span>
      </div>
      <FormGroup>
        <div className="row w-full text-sm mt-4 px-64 lg:px-2 md:px-2 sm:px-1">
          <div className="flex">
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="All Day"
              style={{ width: "51%" }}
            />
            <FormControl
              fullWidth
              sx={{ margin: "20px 0px 0px 0px" }}
              size="small"
              className="grow w-48"
            >
              <InputLabel id="reminderLabel">Reminder</InputLabel>
              <Select labelId="reminderLabel" label="Reminders" onChange={(e) => { setReminder(e.target.name) }}>
                {spaceContextValue?.bookingServiceDetails?.reminders?.map((x) => {
                  return (
                    <MenuItem value={x.name} key={x.name}>
                      {x.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </div>
          <div className="flex">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <FormControl
                fullWidth
                sx={{ margin: "20px 20px 0px 0px" }}
                size="small"
              >
                <DateTimePicker
                  renderInput={(props) => <TextField {...props} />}
                  label="Start Date & Start Time"
                  value={startDate}
                  onChange={(newValue) => {
                    setStartDate(newValue);
                  }}
                />
              </FormControl>
              <FormControl
                fullWidth
                sx={{ margin: "20px 0px 0px 0px" }}
                size="small"
              >
                <DateTimePicker
                  renderInput={(props) => <TextField {...props} />}
                  label="End Date & End Time"
                  value={endDate}
                  onChange={(newValue) => {
                    setEndDate(newValue);
                  }}
                />
              </FormControl>
            </LocalizationProvider>
          </div>
          <div className="flex flex-col py-2">
            <FormControl
              fullWidth
              sx={{ margin: "20px 20px 0px 0px" }}
              size="small"
            >
              <InputLabel id="locationLabel">Location</InputLabel>
              <Select labelId="locationLabel" label="Location" onChange={(e) => setLocation(e.target.name)} >
                {spaceContextValue?.bookingServiceDetails?.locations?.map((x) => {
                  return (
                    <MenuItem value={x.name} key={x.name}>
                      {x.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <FormControl
              fullWidth
              sx={{ margin: "20px 20px 0px 0px" }}
              size="small"
            >
              <InputLabel id="buildingLabel">Building</InputLabel>
              <Select labelId="buildingLabel" label="Building" onChange={(e) => setBuilding(e.target.name)} >
                {spaceContextValue?.bookingServiceDetails?.buildings?.map((x) => {
                  return (
                    <MenuItem value={x.name} key={x.name}>
                      {x.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <FormControl
              fullWidth
              sx={{ margin: "20px 20px 0px 0px" }}
              size="small"
            >
              <InputLabel id="floorLabel">Floor</InputLabel>
              <Select labelId="builfloorLabeldingLabel" label="Floor" onChange={(e) => setFloor(e.target.name)}>
                {spaceContextValue?.bookingServiceDetails?.floors?.map((x) => {
                  return (
                    <MenuItem value={x.name} key={x.name}>
                      {x.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <FormControl
              fullWidth
              sx={{ margin: "20px 20px 0px 0px" }}
              size="small"
            >
              <TextField
                id="attendies"
                label="No. of attendies"
                variant="outlined"
                onChange={(e) => setAttendies(e.target.value)}
              />
            </FormControl>
            <br></br>
            <div className="text-sm">
              <Stack direction="row" spacing={2}>
                <Button variant="outlined" className="flex-1 w-64">
                  Clear
                </Button>

                <Button
                  variant="contained"
                  className="flex-1 w-64"
                  onClick={() => onSearchClick()}
                >
                  Search
                </Button>
              </Stack>
            </div>
          </div>
        </div>
      </FormGroup>
    </Layout>
  );
};
export default BookRoom;
