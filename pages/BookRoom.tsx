import Layout from "../components/Layout";
import InputBox from "../components/features/InputBox/InputBox";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
// import FormInput from '../components/FormInput';
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import roomData from "./data/bookRoomData";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React from "react";
import dayjs, { Dayjs } from "dayjs";
import { Button, Stack } from "@mui/material";
// import InputBox from "../components/features/InputBox/InputBox";
// import Input from
const BookRoom = () => {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs("2022-04-07"));
  return (
    <Layout>
      <div className="mt-4 p-4">
        <div className="flex">
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="All Day"
          />
          <FormControl
            fullWidth
            sx={{ margin: "20px 20px 0px 0px" }}
            size="small"
          >
            <InputLabel id="locationLabel">Location</InputLabel>
            <Select labelId="locationLabel" label="Location">
              {roomData.locations.map((x) => {
                return <MenuItem value={x}>{x}</MenuItem>;
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
              label="DateTimePicker"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
            />
            </FormControl>
            <FormControl
            fullWidth
            sx={{ margin: "20px 20px 0px 0px" }}
            size="small"
          >
             <DateTimePicker
              renderInput={(props) => <TextField {...props} />}
              label="DateTimePicker"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
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
            <Select labelId="locationLabel" label="Location">
              {roomData.locations.map((x) => {
                return <MenuItem value={x}>{x}</MenuItem>;
              })}
            </Select>
          </FormControl>
          <FormControl
            fullWidth
            sx={{ margin: "20px 20px 0px 0px" }}
            size="small"
          >
            <InputLabel id="buildingLabel">Building</InputLabel>
            <Select labelId="buildingLabel" label="Building">
              {roomData.buildings.map((x) => {
                return <MenuItem value={x}>{x}</MenuItem>;
              })}
            </Select>
          </FormControl>
          <FormControl
            fullWidth
            sx={{ margin: "20px 20px 0px 0px" }}
            size="small"
          >
            <InputLabel id="floorLabel">Floor</InputLabel>
            <Select labelId="builfloorLabeldingLabel" label="Floor">
              {roomData.floor.map((x) => {
                return <MenuItem value={x}>{x}</MenuItem>;
              })}
            </Select>
          </FormControl>
          <FormControl
            fullWidth
            sx={{ margin: "20px 20px 0px 0px" }}
            size="small"
          >
            <InputLabel id="attendiesLabel">No. of attendies</InputLabel>
            <Select labelId="attendiesLabel" label="Attendies">
              {roomData.noOfAttendies.map((x) => {
                return <MenuItem value={x}>{x}</MenuItem>;
              })}
            </Select>
          </FormControl>
          <br></br>
          <div>
            <Stack direction="row" spacing={2}>
              <Button variant="outlined">Clear</Button>

              <Button variant="text" href="#outlined-buttons">
                Search
              </Button>
            </Stack>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default BookRoom;
