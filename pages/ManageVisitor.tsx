import Layout from "../components/Layout";
import InputBox from "../components/features/InputBox/InputBox";
import FormControl from "@mui/material/FormControl";
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import roomData from "./data/bookRoomData.json";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React from "react";
import dayjs, { Dayjs } from "dayjs";
import { Button, Stack } from "@mui/material";
// import InputBox from "../components/features/InputBox/InputBox";
// import Input from
const ManageVisitor = () => {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs("2022-04-07"));
  return (
    <Layout>
        <div>
        <h2 className="text-xl font-bold">Manage Visitor</h2>
        <span style={{fontSize: "12px", color:"#a5a0a0"}}> Let's manage your visitor </span>
        </div>
        <FormGroup>
      <div className="text-sm mt-4 px-80 md:px-2">
      <FormControl fullWidth sx={{ margin: "20px 20px 0px 0px" }} size="small">
            <InputLabel id="locationLabel">Location</InputLabel>
            <Select labelId="locationLabel" label="Location" className="text-sm">
              {roomData.locations.map((x) => {
                return <MenuItem value={x.id}>{x.name}</MenuItem>;
              })}
            </Select>
          </FormControl>
        <div className="flex">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
          <FormControl fullWidth sx={{ margin: "20px 20px 0px 0px" }} size="small">
            <DateTimePicker renderInput={(props) => <TextField {...props} className="text-sm"/>}
              label="Start Date & Start Time" value={value}
               onChange={(newValue) => {
                setValue(newValue);
              }}
            />
            </FormControl>
            <FormControl
            fullWidth
            sx={{ margin: "20px 0px 0px 0px" }}
            size="small"
          >
             <DateTimePicker className="text-sm"
              renderInput={(props) => <TextField {...props} />}
              label="End Date & End Time"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
            />
            </FormControl>
          </LocalizationProvider>
          
        </div>  
        <div className="flex flex-col py-2">
          
          <FormControl fullWidth sx={{ margin: "20px 20px 0px 0px" }} size="small">
            <InputLabel id="meetLabel">Whom to meet</InputLabel>
            <Select labelId="meetLabel" label=" Whom to meet   " className="text-sm">
              {roomData.meetPersons.map((x) => {
                return <MenuItem value={x.name}>{x.name}</MenuItem>;
              })}
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ margin: "20px 20px 0px 0px" }} size="small">
            <TextField id="outlined-basic" label="Purpose of visit" variant="outlined" />
            
          </FormControl>
          <br></br>
          <div className="text-sm">
            <Stack direction="row" spacing={2}>
              <Button variant="outlined" className="flex-1 w-64">Add Services</Button>
              <Button variant="outlined" className="flex-1 w-64">Add Parking</Button>
            </Stack>
          </div>
          <div className="flex justify-between">
          <div>
            <FormControl fullWidth sx={{ margin: "20px 20px 0px 0px" }} size="small">
                <FormLabel component="legend">Are you Covid positive</FormLabel>
                <div className="flex">
                    <FormControlLabel control={<Checkbox />} label="Yes" />
                    <FormControlLabel control={<Checkbox />} label="No" />
                </div>
            </FormControl>
          </div>
          <div>
            <FormControl fullWidth sx={{ margin: "20px 20px 0px 0px" }} size="small">
                <FormLabel component="legend">Covid question No2?</FormLabel>
                <div className="flex">
                    <FormControlLabel control={<Checkbox />} label="Yes" />
                    <FormControlLabel control={<Checkbox />} label="No" />
                </div>
            </FormControl>
          </div>
          </div>
          <div className="text-sm">
          <FormControl fullWidth sx={{ margin: "20px 20px 0px 0px" }} size="small">
              <Button variant="contained" className="w-100">Book Meeting</Button>
          </FormControl>
          </div>
        </div>
      </div>
      </FormGroup>
    </Layout>
  );
};
export default ManageVisitor;
