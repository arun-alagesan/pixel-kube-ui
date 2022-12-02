import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from "@mui/material/InputLabel";
import Select from '@mui/material/Select';

function App() {
  const [age, setAge] = React.useState(10);

  const handleChange = (event: any) => {
    setAge(event.target.value);
  };
  return (
    <div className="mt-4 p-4">
      <div className="flex justify-between py-2">
        <div> Connector Status</div>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
      </div>
      <div className="flex justify-between py-2 items-center">
        <div> Synchronizing Calender</div>
        <div>
          <FormControl fullWidth size="small">
            <Select
              value={age}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value={10}>Every 5 minutes</MenuItem>
              <MenuItem value={20}>Every 10 minutes</MenuItem>
              <MenuItem value={30}>Every 15 minutes</MenuItem>
              <MenuItem value={30}>Every 30 minutes</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div className="flex flex-col py-2">
        <div>Event Download Settings</div>
        <div>Download events that occur before and after current time</div>
        <div className="flex">
          <FormControl fullWidth sx={{ margin: "20px 20px 0px 0px"}} size="small">
            <InputLabel id="demo-simple-select-label">Before</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Before"
              onChange={handleChange}
            >
             <MenuItem value={10}>Every 5 minutes</MenuItem>
              <MenuItem value={20}>Every 10 minutes</MenuItem>
              <MenuItem value={30}>Every 15 minutes</MenuItem>
              <MenuItem value={30}>Every 30 minutes</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ margin: "20px 20px 0px 0px"}} size="small">
            <InputLabel id="demo-simple-select-label">After</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="After"
              onChange={handleChange}
            >
            <MenuItem value={10}>Every 5 minutes</MenuItem>
              <MenuItem value={20}>Every 10 minutes</MenuItem>
              <MenuItem value={30}>Every 15 minutes</MenuItem>
              <MenuItem value={30}>Every 30 minutes</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
}

export default App;
