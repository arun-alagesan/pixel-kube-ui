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
import roomData from "../../bookSpaces/data/bookRoomData.json";
import floor from '../../../assets/images/floor.png'

const Settings = () => {

    const weekList = ["M", "T", "W", "T", "F", "S", "S"]

    return (
        <div className='py-4'>
            <div><p className="text-xs text-text-light mb-2.5">Edit Booking Options</p></div>
            <div className='flex'>
                <FormControl component="fieldset">
                    <FormGroup aria-label="position" row>
                        <FormControlLabel className='text-sm w-full block ml-0'
                            value="start"
                            control={<Switch color="primary" className='float-right' />}
                            label="Allow Repear Meetings"
                            labelPlacement="start"
                        />
                        <FormControlLabel className='text-sm w-full block ml-0'
                            value="start"
                            control={<Switch color="primary" className='float-right' />}
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
                                weekList.map(x => {
                                    return (
                                        <FormControlLabel
                                            value="bottom"
                                            control={<Checkbox />}
                                            label={x} className='m-0 text-xs w-7'
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
                        <Select labelId="locationLabel" label="Working hours" className="text-sm">
                            {roomData.locations.map((x) => {
                                return <MenuItem value={x.id}>{x.name}</MenuItem>;
                            })}
                        </Select>
                    </FormControl>
                </div>
            </div>
            <div>
                <FormGroup aria-label="position" row>
                    <FormControlLabel className='text-sm w-full block ml-0 mt-2.5'
                        value="start"
                        control={<Switch color="primary" className='float-right' />}
                        label="Automatically decline meetings outside of limits below"
                        labelPlacement="start"
                    />
                </FormGroup>
            </div>
            <div className='w-64'>
                <FormControl fullWidth sx={{ margin: "0px 20px 15px 0px" }} size="small">
                    <InputLabel id="locationLabel">Maximum duration hours</InputLabel>
                    <Select labelId="locationLabel" label="Maximum duration hours" className="text-sm">
                        {roomData.locations.map((x) => {
                            return <MenuItem value={x.id}>{x.name}</MenuItem>;
                        })}
                    </Select>
                </FormControl>
            </div>
            <div>
                <FormGroup aria-label="position" row>
                    <FormControlLabel className='text-sm w-full block ml-0'
                        value="start"
                        control={<Switch color="primary" className='float-right' />}
                        label="Auto accept meeting requests"
                        labelPlacement="start"
                    />
                    <span className='text-xs text-text-light' style={{ position: "relative", top: "-8px" }}>Set to "off" if you want to specify users who wants to accept meetings manually</span>
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