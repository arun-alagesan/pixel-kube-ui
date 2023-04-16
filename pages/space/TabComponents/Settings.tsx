import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import Switch from '@mui/material/Switch';
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import floor from '../../../assets/images/floor.png'
import { TextField } from '@mui/material';
import SpaceService from '../../../services/space.service';
import Space from '../../../models/spacemgmt/space';



const Settings = ({ spaceDetails }: { spaceDetails: Space }) => {
    debugger;
    const [settingsSaved, setSettings] = React.useState<Space>(spaceDetails)
    const weekList = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]
    const WorkingHours = [{
        startTime: "9 am",
        endTime: "5 pm",
        id: "9 am 5 pm"
    }, {
        startTime: "10 am",
        endTime: "6 pm",
        id: "10 am 6 pm"
    }]

    React.useEffect(() => {
        SpaceService.updateSpace(settingsSaved.spaceId, settingsSaved);
    }, [settingsSaved])


    return (
        <div className='py-4'>
            <div><p className="text-xs text-text-light mb-2.5">Edit Booking Options</p></div>
            <div className='flex'>
                <FormControl component="fieldset">
                    <FormGroup aria-label="position" row>
                        <FormControlLabel className='text-sm w-full block ml-0'
                            value="start"
                            control={<Switch color="primary" className='float-right'
                                checked={settingsSaved.allowRepeat}
                                onChange={(e) => {
                                    setSettings({ ...settingsSaved, allowRepeat: e.target.checked })
                                }} />
                            }
                            label="Allow Repear Meetings"
                            labelPlacement="start"
                        />
                        <FormControlLabel className='text-sm w-full block ml-0'
                            value="start"
                            control={<Switch color="primary" className='float-right'
                                checked={settingsSaved.allowWorkHours}
                                onChange={(e) => {
                                    setSettings({ ...settingsSaved, allowWorkHours: e.target.checked })
                                }} />
                            }
                            label="Allow Scheduling only during work hours"
                            labelPlacement="start"
                        />
                    </FormGroup>
                </FormControl>
            </div>
            <div className='flex'>
                <div className='flex-1 w-64'>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Work Weeks & Hours</FormLabel>
                        <FormGroup aria-label="position" row>
                            {
                                weekList.map((x, i) => {
                                    return (
                                        <FormControlLabel
                                            key={i}
                                            value="bottom"
                                            control={
                                                <Checkbox value={x}
                                                    checked={settingsSaved?.workweekdays?.includes(x)}
                                                    onChange={(e) => {
                                                        let workWeek = settingsSaved?.workweekdays ?? [];
                                                        if (e.target.checked)
                                                            workWeek.push(e.target.value);
                                                        else
                                                            workWeek.splice(workWeek.indexOf(e.target.value), 1);
                                                        setSettings({ ...settingsSaved, workweekdays: workWeek })
                                                    }} />
                                            }
                                            label={x[0]} className='m-0 text-xs w-7'
                                            labelPlacement="bottom"
                                        />
                                    )
                                })
                            }
                        </FormGroup>
                    </FormControl>
                </div>
                <div className='flex-1 w-64'>
                    <FormControl fullWidth sx={{ margin: "40px 20px 0px 0px" }} size="small">
                        <InputLabel id="locationLabel">Working hours</InputLabel>
                        <Select labelId="locationLabel" label="Working hours" className="text-sm"
                            value={settingsSaved.startTime + " " + settingsSaved.endTime}
                            onChange={(e: any) => {
                                debugger;
                                let item = WorkingHours.find(x=>x.id == e.target.value);
                                setSettings({ ...settingsSaved, startTime: item?.startTime, endTime: item?.endTime })
                            }}
                        >
                            {WorkingHours.map((x, i) => {
                                return <MenuItem key={i} value={x.id}>{x.startTime + " - " + x.endTime}</MenuItem>;
                            })}
                        </Select>
                    </FormControl>
                </div>
            </div>
            <div>
                <FormGroup aria-label="position" row>
                    <FormControlLabel className='text-sm w-full block ml-0 mt-2.5'
                        value="start"
                        control={<Switch color="primary" className='float-right'
                            checked={settingsSaved?.autoDecline}
                            onChange={(e) => {
                                setSettings({ ...settingsSaved, autoDecline: e.target.checked })
                            }} />}
                        label="Automatically decline meetings outside of limits below"
                        labelPlacement="start"
                    />
                </FormGroup>
            </div>
            <div className='w-64'>
                <TextField fullWidth label="Maximum duration hours" variant="outlined" className="pk-input" type="number"
                    value={settingsSaved?.maximumDuration ?? 1}
                    onChange={(e) => {
                        let inpuval = parseInt(e.target.value);
                        if (inpuval >= 1 && inpuval <= 24)
                            setSettings({ ...settingsSaved, maximumDuration: e.target.value })
                    }}
                />
            </div>
            <div>
                <FormGroup aria-label="position" row>
                    <FormControlLabel className='text-sm w-full block ml-0'
                        value="start"
                        checked={settingsSaved.autoAccept}
                        control={<Switch color="primary" className='float-right' onChange={(e) => {
                            setSettings({ ...settingsSaved, autoAccept: e.target.checked })
                        }} />}
                        label="Auto accept meeting requests"
                        labelPlacement="start"
                    />
                    <span className='text-xs text-text-light' style={{ position: "relative", top: "-8px" }}>Set to &quot;off&quot; if you want to specify users who wants to accept meetings manually</span>
                </FormGroup>
            </div>
            <div className='row'>
                <p>Floor Plan</p>
                <span className='text-xs text-text-light'>Manage your space/Desks</span>
                <img src={floor.src} className="" />
            </div>

        </div>
    );

}
export default Settings;