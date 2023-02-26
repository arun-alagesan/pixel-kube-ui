
import React, { useEffect, useRef, useState } from "react";


import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { KVP } from "../../../../models/masters/Industry";
import Button from "@mui/material/Button";
import OrganizationService from "../../../../services/organization.service";

const schema = yup.object().shape({
    orgName: yup.string().required('Organization Name is required'),
    location: yup.string().required('Location is required'),
    building: yup.string().required('Building is required'),
    group: yup.string().required('Group is required'),

});

type props = { changeStep: (step: number) => void };

const AddBuildingGeneralInfo = ({ changeStep }: props) => {

    const { register, handleSubmit, setValue, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const [orgList, setOrgList] = useState<any>();

    useEffect(() => {

        (async () => {

            var orglist = await OrganizationService.getList();
            if (orglist?.data)
                setOrgList(orglist.data);
        })();

    }, [])

    const onSubmit = async (data: any) => {
        console.log("form data", data);
        changeStep(2);
    }

    return (
        <div className="pt-4">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-12 mt-3">
                        <FormControl fullWidth className="pk-dropdown" error={!!errors.orgName} >
                            <InputLabel id="demo-simple-select-label">Organization Name</InputLabel>
                            <Select {...register('orgName')} defaultValue="" labelId="demo-simple-select-label" id="demo-simple-select" label="Organization Name">
                                {orgList && orgList.length > 0 && orgList?.map((x: any) => (<MenuItem key={x.orgId} value={x.orgId}>{x.orgName}</MenuItem>))}
                            </Select>
                            {errors.orgName && <FormHelperText>{errors.orgName.message?.toString()}</FormHelperText>}
                        </FormControl>
                    </div>
                    <div className="col-12  mt-3">
                        <FormControl fullWidth className="pk-dropdown" error={!!errors.location} >
                            <InputLabel id="demo-simple-select-label">Location</InputLabel>
                            <Select {...register('location')} defaultValue="" labelId="demo-simple-select-label" id="demo-simple-select" label="Location">
                                {/* {orgList.map(x => (<MenuItem key={x.id} value={x.id}>{x.name}</MenuItem>))} */}
                            </Select>
                            {errors.location && <FormHelperText>{errors.location.message?.toString()}</FormHelperText>}
                        </FormControl>
                    </div>
                    <div className="col-12 mt-3">
                        <FormControl fullWidth className="pk-dropdown" error={!!errors.building} >
                            <InputLabel id="demo-simple-select-label">Building</InputLabel>
                            <Select {...register('building')} defaultValue="" labelId="demo-simple-select-label" id="demo-simple-select" label="Building">
                                {/* {orgList.map(x => (<MenuItem key={x.id} value={x.id}>{x.name}</MenuItem>))} */}
                            </Select>
                            {errors.building && <FormHelperText>{errors.building.message?.toString()}</FormHelperText>}
                        </FormControl>
                    </div>
                    <div className="col-12 mt-3">
                        <FormControl fullWidth className="pk-dropdown" error={!!errors.group} >
                            <InputLabel id="demo-simple-select-label">Group</InputLabel>
                            <Select {...register('group')} defaultValue="" labelId="demo-simple-select-label" id="demo-simple-select" label="Group">
                                {/* {orgList.map(x => (<MenuItem key={x.id} value={x.id}>{x.name}</MenuItem>))} */}
                            </Select>
                            {errors.group && <FormHelperText>{errors.group.message?.toString()}</FormHelperText>}
                        </FormControl>
                    </div>
                    <div className="col-12 text-center mt-5">
                        <Button variant="contained" type="submit">Submit</Button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddBuildingGeneralInfo;