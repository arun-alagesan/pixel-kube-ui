import CloseIcon from '@mui/icons-material/Close';
import styles from './AddRoom.module.css';

import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import { useEffect, useState } from 'react';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import { DropdownProps } from '../../../../../services/constants';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import { ListItem, Paper } from '@mui/material';
import React from 'react';
import { IArea } from '@bmunozg/react-image-area/dist/src';
import FacilityService from '../../../../../services/facility.service';
import { Facility } from '../../../../../models/spacemgmt/facility/FacilityModel';


const schema = yup.object().shape({
    alias: yup.string(),
    group: yup.string(),
    calender: yup.string(),
    email: yup.string(),
    directionalCoordinate: yup.string()
});

const RoomRightPanel = (props: any) => {

    const [facilities, setFacilities] = useState<Facility[]>([]);
    useEffect(() => {

        fetchMyApi();

    }, []);
    async function fetchMyApi() {
        var response = await FacilityService.getByOrgId(props?.floorDetails?.organization);
        if (response.status === true) {
            setFacilities(response.data);
            debugger;
        }
    }




    const { register, handleSubmit, setValue, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const [personName, setPersonName] = useState<string[]>([]);
    const handleChange = (event: SelectChangeEvent<typeof personName>) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    const onSubmit = (data: any) => {
        debugger;
        console.log('submitted data', data);
        data.floorDetails = props?.floorDetails;    
        props.afterSubmit(data);
    }

    const calenderList = [
        'Calender 1',
        'Calender 2',
        'Calender 3',
        'Calender 4',
    ];

    const handleDelete = (chipToDelete: IArea) => () => {
        props.onAreaDelete(chipToDelete);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={"col-12 col-md-4 pb-3 " + styles.right_panel} >
            <div className="row">
                <div className="col-12 p-3  ">
                    <div className="float-end mt-2 " onClick={props.close}>
                        <CloseIcon style={{ color: 'grey' }}></CloseIcon>
                    </div>
                </div>
                <div className={"col-12 " + styles.right_panel_content}>
                    <div className='fw-bold'>X-Minds Solution</div>
                    <div className='small text-black-50'>2nd Floor, Boardwater Park</div>
                </div>
                <div className="col-12 mt-3">
                    <TextField {...register('alias')} fullWidth label="Room Alias" variant="outlined" className="pk-input"
                        error={!!errors.alias}
                        helperText={errors.alias?.message?.toString()}
                    />
                </div>
                <div className="col-12 mt-3">
                    <TextField {...register('group')} fullWidth label="Room Group" variant="outlined" className="pk-input"
                        error={!!errors.group}
                        helperText={errors.group?.message?.toString()}
                    />
                </div>
                <div className="col-12 mt-3">
                    <FormControl fullWidth className="pk-dropdown" >
                        <InputLabel id="demo-multiple-checkbox-label">Select Calenders</InputLabel>
                        <Select
                            labelId="demo-multiple-checkbox-label"
                            id="demo-multiple-checkbox"
                            className='pk-select'
                            multiple
                            value={personName}
                            onChange={handleChange}
                            input={<OutlinedInput label="Select Calenders" />}
                            renderValue={(selected) => (
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                    {selected.map((value) => (
                                        <Chip key={value} label={value} />
                                    ))}
                                </Box>
                            )}
                            MenuProps={DropdownProps}
                        >
                            {calenderList.map((name) => (
                                <MenuItem key={name} value={name}>
                                    <Checkbox checked={personName.indexOf(name) > -1} />
                                    <ListItemText primary={name} />
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
                <div className="col-12 mt-3">
                    <TextField {...register('email')} fullWidth label="Email"  variant="outlined" className="pk-input"
                        error={!!errors.email}
                        helperText={errors.email?.message?.toString()}
                    />
                </div>
                <div className="col-12 mt-3">
                    <Paper
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            flexWrap: 'wrap',
                            listStyle: 'none',
                            p: 0.5,
                            m: 0,
                        }}
                        component="ul"
                    >
                        {props.areas.map((data: IArea, index: number) => {
                            return (
                                <ListItem key={index} className="contents">
                                    <Chip
                                        label={data.x + "," + data.y}
                                        onDelete={handleDelete(data)}
                                    />
                                </ListItem>
                            );
                        })}
                    </Paper>
                </div>

                {facilities.map((x: any) => {
                    return (
                        <div className="col-12 mt-4">
                            <div className="row">
                                <div className="col-12">
                                    <div className="fw-bold">
                                        {x.facilityName}
                                    </div>
                                </div>
                            </div>
                            {x.resources.map((y: any) => {
                                return (
                                    <div className="row p-2">
                                        <div className="col-12 border-bottom">
                                            <div className="float-start">
                                                {y.name}
                                            </div>
                                            <div className="float-end">
                                                <Switch   {...register(x.Name + "." + y.name)} />
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                    )
                })}

                <div className="col-12 text-center mt-4">
                    <Button variant="contained" type="submit">Add Room</Button>
                </div>

            </div>

        </form>
    );
}

export default RoomRightPanel;


