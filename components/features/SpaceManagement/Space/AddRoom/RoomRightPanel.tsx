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
import { useEffect, useMemo, useState } from 'react';
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
    spaceAliasName: yup.string(),
    group: yup.string(),
    calender: yup.string(),
    email: yup.string(),
    directionNotes: yup.string()
});

const RoomRightPanel = (props: any) => {
    //debugger;
    const { register, handleSubmit, setValue, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: useMemo(() => {
            return props.spaceDetails;
        }, [props.spaceDetails])
    });

    const [facilities, setFacilities] = useState<Facility[]>([]);
    const [selectedFacility, setSelectedFacility] = useState<number[]>(props?.spaceDetails?.servicingFacilities ?? []);
    useEffect(() => {

        fetchMyApi();

    }, []);
    async function fetchMyApi() {
        var response = await FacilityService.getByOrgId(props?.floorDetails?.organization);
        if (response.status === true) {
            setFacilities(response.data);
        }
    }

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
        //debugger;
        console.log('submitted data', data);
        data.floorDetails = props?.floorDetails;
        data.servicingFacilities = selectedFacility;
        props.afterSubmit(data);
    }
    const onFacililitiesChange = (e: any) => {
        //debugger;
        // setSelectedFacility
        let index = selectedFacility.indexOf(parseInt(e.target.value));
        if (index > -1 && !e.target.checked) {
            setSelectedFacility([...selectedFacility.splice(index, 1)]);
        }
        else {
            selectedFacility.push(parseInt(e.target.value));
            setSelectedFacility([...selectedFacility]);
        }

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
                    <TextField {...register('spaceAliasName')} fullWidth label="Room Alias" variant="outlined" className="pk-input"
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
                    <TextField {...register('email')} fullWidth label="Email" variant="outlined" className="pk-input"
                        error={!!errors.email}
                        helperText={errors.email?.message?.toString()}
                    />
                </div>
                <div className="col-12 mt-3">
                    <TextField
                        {...register('directionNotes')}
                        fullWidth
                        label="Room directional coordinates"
                        multiline
                        rows={4}
                        variant="outlined" className="pk-input"
                        error={!!errors.directionNotes}
                        helperText={errors.directionNotes?.message?.toString()}
                    />

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

                                                <Switch value={y.resourceId} checked={selectedFacility.includes(y.resourceId)} onChange={(e) => onFacililitiesChange(e)} />
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


