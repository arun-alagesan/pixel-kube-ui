import Layout from "../../components/Layout";
import { styled } from "@mui/system";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import FormGroup from '@mui/material/FormGroup';
import InputLabel from "@mui/material/InputLabel";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import FormControlLabel from "@mui/material/FormControlLabel";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React from "react";
import dayjs, { Dayjs } from "dayjs";
import { Button, Stack } from "@mui/material";
const FindColleague =()=>{
    const [value, setValue] = React.useState<Dayjs | null>(dayjs("2022-04-07"));
    return (
        <Layout>
        <div>
            <h2 className="text-xl font-bold">Find Colleague</h2>
            <span style={{fontSize: "12px", color:"#a5a0a0"}}> Let&apos;s find your colleauge </span>
        </div>
        <FormGroup>
        <div className="flex justify-around text-sm mt-4 px-2 md:px-2">

        <div>
            <Autocomplete disablePortal id="combo-box-demo" options={empFind} sx={{ width: 300 }} 
        renderInput={(params) => <TextField {...params} label="Find Colleauge" />} />
        </div>
        <div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker className="text-sm" renderInput={(props) => <TextField {...props} />}
              label="End Date & End Time" value={value} onChange={(newValue) => {setValue(newValue);}}
            />
        </LocalizationProvider>
        </div>
        <div className="mr-2">
              <Button variant="contained" className="flex-1 w-64 h-14" href="#outlined-buttons">
                Search
              </Button>
        </div>

        </div>
        </FormGroup>
        </Layout>
    )

}
const empFind = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 }
];
export default FindColleague;