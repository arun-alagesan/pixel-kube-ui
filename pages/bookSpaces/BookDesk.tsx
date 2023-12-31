import Layout from "../../components/Layout";
import InputBox from "../../components/features/InputBox/InputBox";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import InputLabel from "@mui/material/InputLabel";
// import FormInput from '../components/FormInput';
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import roomData from "../bookSpaces/data/bookRoomData.json";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React, { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { Button, Stack } from "@mui/material";
import SpaceContext, { initializeDataType } from "../../context/BookSpaceContext";
import Router from "next/router";

const BookDesk = () => {
  const spaceContextValue = React.useContext(SpaceContext);
  const [startDate, setStartDate] = React.useState<Dayjs | null>(dayjs("2022-04-07"));
  const [endDate, setEndDate] = React.useState<Dayjs | null>(dayjs("2022-04-07"));
  const [location, setLocation] = useState("");
  const [building, setBuilding] = useState("");
  const [floor, setFloor] = useState("");
  const [attendies, setAttendies] = useState("");

  const onSearchClick = () => {
    const searchInfo = { startDate, endDate, location, building, attendies, floor }
    spaceContextValue.bookRoomInfo = searchInfo;
    Router.push("./bookDesk/searchList");
  }
  // const []

  return (
    <Layout>
      <div>
        <h2 className="text-xl font-bold">Book Desk</h2>
        <span style={{ fontSize: "12px", color: "#a5a0a0" }}>
          {" "}
          Check availabilty{" "}
        </span>
      </div>
      <FormGroup>
        <div className="text-sm mt-4 px-64 lg:px-2 md:px-2 sm:px-1">
          <div className="py-4">
            <RadioGroup
              className="flex justify-between"
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              defaultValue="fullday"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="fullday"
                control={<Radio />}
                label="Full Day"
              />
              <FormControlLabel
                value="fhalf"
                control={<Radio />}
                label="First Half"
              />
              <FormControlLabel
                value="shalf"
                control={<Radio />}
                label="second Half"
              />
            </RadioGroup>
          </div>
          <div className="flex py-4">
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
              <Select
                labelId="reminderLabel"
                label="Reminders"
                className="text-sm"
              >
                {roomData.reminders.map((x, i) => {
                  return <MenuItem key={i} value={x.id}>{x.name}</MenuItem>;
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
                  renderInput={(props) => (
                    <TextField {...props} className="text-sm" />
                  )}
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
                  className="text-sm"
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
              <Select
                labelId="locationLabel"
                label="Location"
                className="text-sm"
              >
                {roomData.locations.map((x, i) => {
                  return <MenuItem key={i} value={x.id}>{x.name}</MenuItem>;
                })}
              </Select>
            </FormControl>
            <FormControl
              fullWidth
              sx={{ margin: "20px 20px 0px 0px" }}
              size="small"
            >
              <InputLabel id="buildingLabel">Building</InputLabel>
              <Select
                labelId="buildingLabel"
                label="Building"
                className="text-sm"
              >
                {roomData.buildings.map((x,i) => {
                  return <MenuItem key={i} value={x.id}>{x.name}</MenuItem>;
                })}
              </Select>
            </FormControl>
            <FormControl
              fullWidth
              sx={{ margin: "20px 20px 0px 0px" }}
              size="small"
            >
              <InputLabel id="floorLabel">Floor</InputLabel>
              <Select
                labelId="builfloorLabeldingLabel"
                label="Floor"
                className="text-sm"
              >
                {roomData.floors.map((x,i) => {
                  return <MenuItem key={i} value={x.id}>{x.name}</MenuItem>;
                })}
              </Select>
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
export default BookDesk;
