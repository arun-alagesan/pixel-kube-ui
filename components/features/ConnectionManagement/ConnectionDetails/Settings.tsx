import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from "@mui/material/InputLabel";
import Select from '@mui/material/Select';
import ConnectorManagementService from '../../../../services/connectorManagement.service';
import React, { useContext, useEffect } from 'react';
import ConnectionDetails from '../../../../models/connector/connectionDetails';
import { ConnectorContext } from '../../../../pages/connector';

function App() {

  const [settings, setSettings] = React.useState<ConnectionDetails>()
  const [daysBefore, setDaysBefore] = React.useState<number>(10)
  const [daysAfter, setDaysAfter] = React.useState<number>(10)
  const [secToSync, setSecToSync] = React.useState<number>(5)
  const contextData: any = useContext(ConnectorContext);

  useEffect(() => {
    FetchAuditAndLog();
  }, []);
  async function FetchAuditAndLog() {
    var connectorname =contextData.connectorDetailId.name ?contextData.connectorDetailId.name :"Pixel ser acc 2";
    console.log(connectorname);
    var resp = await ConnectorManagementService.getAuditAndLogs(connectorname);

    setSettings(resp);
    setDaysBefore(resp.noOfDaysBefore==0?10:resp.noOfDaysBefore);
    setDaysAfter(resp.noOfDaysAfter==0?10:resp.noOfDaysAfter);
    setSecToSync(resp.noOfSecondsToSyncCalendar==0?5:resp.noOfSecondsToSyncCalendar);
  }
  useEffect(() => {
    (async () => {
      if (settings !== undefined) {
        settings.orgId = "1";
        settings.noOfDaysBefore = daysBefore;
        settings.noOfDaysAfter = daysAfter;
        settings.noOfSecondsToSyncCalendar = secToSync;
        var resp = await ConnectorManagementService.saveSettings(settings);
      }

    })();

  }, [daysBefore, daysAfter, secToSync]);

  const handleChange = (event: any, dType: string) => {
    switch (dType) {
      case "sync":
        setSecToSync(event.target.value);
        break;
      case "before":
        setDaysBefore(event.target.value);
        break;
      case "after":
        setDaysAfter(event.target.value);
        break;
      default:
        break;
    }
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
              value={secToSync}
              onChange={(e) => handleChange(e, "sync")}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value={5}>Every 5 minutes</MenuItem>
              <MenuItem value={10}>Every 10 minutes</MenuItem>
              <MenuItem value={15}>Every 15 minutes</MenuItem>
              <MenuItem value={30}>Every 30 minutes</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div className="flex flex-col py-2">
        <div>Event Download Settings</div>
        <div>Download events that occur before and after current time</div>
        <div className="flex">
          <FormControl fullWidth sx={{ margin: "20px 20px 0px 0px" }} size="small">
            <InputLabel id="demo-simple-select-label">Before</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={daysBefore}
              label="Before"
              onChange={(e) => handleChange(e, "before")}
            >
              <MenuItem value={10}>5 days</MenuItem>
              <MenuItem value={20}>10 days</MenuItem>
              <MenuItem value={30}>15 days</MenuItem>
              <MenuItem value={30}>20 days</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ margin: "20px 20px 0px 0px" }} size="small">
            <InputLabel id="demo-simple-select-label">After</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={daysAfter}
              label="After"
              onChange={(e) => handleChange(e, "after")}
            >
              <MenuItem value={10}>5 days</MenuItem>
              <MenuItem value={20}>10 days</MenuItem>
              <MenuItem value={30}>15 days</MenuItem>
              <MenuItem value={30}>20 days</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
}

export default App;
