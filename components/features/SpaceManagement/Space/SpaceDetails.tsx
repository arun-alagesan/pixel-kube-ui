
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { KVP } from "../../../../models/masters/Industry";
import SpaceService from "../../../../services/space.service";


const schema = yup.object().shape({
    organization: yup.string().required('Please select Organization'),
    location: yup.string().required('Please select location'),
    building: yup.string().required('Please select Building name'),
    floor: yup.string().required('Please select Floor')
});

type props = { afterSubmit: any };

const SpaceDetails = (props: props) => {

    type initializeDataType = { orgs: KVP[], locations: KVP[], buildings: KVP[], floors: KVP[] };

    const [initializeData, setInitializeData] = useState<initializeDataType>({ orgs: [], locations: [], buildings: [], floors: [] });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    useEffect(() => {
        async function fetchMyApi() {
            let orgResponse = await SpaceService.getOrgList();
            let locationResponse = await SpaceService.getLocationList();
            let buildingResponse = await SpaceService.getBuildingList();
            let floorResponse = await SpaceService.getFloorList();

            let initializationData: initializeDataType = {
                buildings: buildingResponse.data,
                floors: floorResponse.data,
                locations: locationResponse.data,
                orgs: orgResponse.data
            };

            setInitializeData(initializationData);
        }
        fetchMyApi();
    }, []);

    const onSubmit = (data: any) => {
        console.log(data);
        props.afterSubmit();
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row mt-3">
                <div className="col-12">
                    <FormControl fullWidth className="pk-dropdown" error={!!errors.organization} >
                        <InputLabel id="demo-simple-select-label">Organization</InputLabel>
                        <Select {...register('organization')} defaultValue="" labelId="demo-simple-select-label" id="demo-simple-select" label="Organization">
                            {initializeData.orgs.map(x => (<MenuItem key={x.id} value={x.id}>{x.name}</MenuItem>))}
                        </Select>
                        {errors.organization && <FormHelperText>{errors.organization.message?.toString()}</FormHelperText>}
                    </FormControl>
                </div>

                <div className="col-12 mt-3">
                    <FormControl fullWidth className="pk-dropdown" error={!!errors.location}>
                        <InputLabel id="demo-simple-select-label">Location</InputLabel>
                        <Select {...register('location')} defaultValue="" labelId="demo-simple-select-label" id="demo-simple-select" label="Location">
                            {initializeData.locations.map(x => (<MenuItem key={x.id} value={x.id}>{x.name}</MenuItem>))}
                        </Select>
                        {errors.location && <FormHelperText>{errors.location.message?.toString()}</FormHelperText>}
                    </FormControl>
                </div>

                <div className="col-12 mt-3">
                    <FormControl fullWidth className="pk-dropdown" error={!!errors.building} >
                        <InputLabel id="demo-simple-select-label">Building Name</InputLabel>
                        <Select {...register('building')} defaultValue="" labelId="demo-simple-select-label" id="demo-simple-select" label="Building Name">
                            {initializeData.buildings.map(x => (<MenuItem key={x.id} value={x.id}>{x.name}</MenuItem>))}
                        </Select>
                        {errors.building && <FormHelperText>{errors.building.message?.toString()}</FormHelperText>}
                    </FormControl>
                </div>

                <div className="col-12 mt-3">
                    <FormControl fullWidth className="pk-dropdown" error={!!errors.floor} >
                        <InputLabel id="demo-simple-select-label">Floor</InputLabel>
                        <Select {...register('floor')} defaultValue="" labelId="demo-simple-select-label" id="demo-simple-select" label="Floor">
                            {initializeData.floors.map(x => (<MenuItem key={x.id} value={x.id}>{x.name}</MenuItem>))}
                        </Select>
                        {errors.floor && <FormHelperText>{errors.floor.message?.toString()}</FormHelperText>}
                    </FormControl>
                </div>
                <div className="col-12 mt-4">
                    <Button variant="contained" type="submit" fullWidth={true}>Submit</Button>
                </div>
            </div>
        </form>
    );
}

export default SpaceDetails;