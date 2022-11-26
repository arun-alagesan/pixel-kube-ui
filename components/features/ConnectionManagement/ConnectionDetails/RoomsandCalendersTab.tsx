import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import MeetingDetails from "./MeetingDetails";
function RoomsandCalendersTab() {
  return (
    <div>
      <div
        className="flex justify-between items-center p-4 rounded mb-2"
        style={{ backgroundColor: "rgb(219 234 254)"}}
      >
        <div style={{height:'15%'}}>
          <div className="font-bold">Einstein Meeting Room Calender</div>
          <div className="opacity-30 text-xs">
            5th Floor, Smartcity, Street No.10, Brookyln, UK
          </div>
        </div>
        <div>
          <KeyboardArrowDownIcon />
        </div>
      </div>
      <div className="flex justify-between my-2 py-4" style={{height:'15%'}}>
        <div className="flex items-center">
          <WestIcon sx={{ opacity: "40%" }} fontSize='small' />
          <div className="px-4" style={{color : 'rgb(148 163 184)'}}>Today</div>
          <EastIcon sx={{ opacity: "40%" }} fontSize='small'/>
        </div>
        <div className="border rounded">
          <input
            type={"date"}
            style={{color: "rgb(203 213 225)"	}}
            value={new Date().toISOString().substring(0, 10)}
          />
        </div>
        <div className="border rounded">
          <select style={{color: "rgb(203 213 225)"}}>
            <option value="Day">Day</option>
            <option value="Work Week">Work Week</option>
            <option value="Week">Week</option>
            <option value="Month">Month</option>
          </select>
        </div>
      </div>
      <div className="overflow-auto absolute " style={{maxHeight:'50%' , width:'90%'}}>
        <MeetingDetails />
        <MeetingDetails />
        <MeetingDetails />
        <MeetingDetails />
        <MeetingDetails />
        <MeetingDetails />
        <MeetingDetails />
      </div>
    </div>
  );
}

export default RoomsandCalendersTab;
