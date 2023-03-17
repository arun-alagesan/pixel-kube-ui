
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { KVP } from "../../../../models/masters/Industry";
import SpaceService from "../../../../services/space.service";
import BuildingService from "../../../../services/building.service";


const schema = yup.object().shape({
    organization: yup.string().required('Please select Organization'),
    location: yup.string().required('Please select location'),
    building: yup.string().required('Please select Building name'),
    floor: yup.string().required('Please select Floor')
});

type props = { afterSubmit: any, spaceDetails: any };

const SpaceDetails = (props: props) => {

    const [initializeData, setInitializeData] = useState<any>();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    useEffect(() => {
        async function fetchMyApi() {
            let orgResponse = await SpaceService.getOrgList();
            let initializationData: any = {
                orgs: orgResponse.data
            };
            if (props.spaceDetails) {
                (async () => {
                    initializationData.locations = (await BuildingService.getBuildingsbyOrgId(props.spaceDetails.orgId ?? "")).data;
                    initializationData.floors = (await BuildingService.GetFloorByBuilding(props.spaceDetails?.buildingId ?? "")).data;
                    initializationData.buildings = initializationData.locations.filter((x: any) => x.groupName == props.spaceDetails?.building?.groupName);
                    setInitializeData(initializationData);
                })();
            } else {
                setInitializeData(initializationData);
            }

        }
        fetchMyApi();
    }, []);



    const getBuildingbyGroup = async (groupName: string) => {
        let buildings = []
        if (initializeData?.locations?.length > 0) {
            buildings = initializeData.locations.filter((x: any) => x.groupName == groupName);
            setInitializeData({ ...initializeData, buildings: buildings });
        }
        return buildings;

    }
    const getFloorbyBuilding = async (id: string) => {
        const floors = await BuildingService.GetFloorByBuilding(id);
        setInitializeData({ ...initializeData, floors: floors.data });

    }

    const fetchBuilding = async (id: string) => {
        const buildings = await BuildingService.getBuildingsbyOrgId(id);
        setInitializeData({ ...initializeData, locations: buildings.data });
    }

    const onSubmit = (data: any) => {
        data.floorData = initializeData.floors.find((x: any) => x.floorId == data.floor);
        props.afterSubmit(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row mt-3">
                <div className="col-12">
                    <FormControl fullWidth className="pk-dropdown" error={!!errors.organization} >
                        <InputLabel id="demo-simple-select-label">Organization</InputLabel>
                        <Select {...register('organization')} defaultValue="" value={props?.spaceDetails?.orgId} onChange={(e) => { fetchBuilding(e.target.value) }} labelId="demo-simple-select-label" id="demo-simple-select" label="Organization">
                            {initializeData?.orgs?.map((x: any) => (<MenuItem key={x.orgId} value={x.orgId}>{x.orgName}</MenuItem>))}
                        </Select>
                        {errors.organization && <FormHelperText>{errors.organization.message?.toString()}</FormHelperText>}
                    </FormControl>
                </div>

                <div className="col-12 mt-3">
                    <FormControl fullWidth className="pk-dropdown" error={!!errors.location}>
                        <InputLabel id="demo-simple-select-label">Location</InputLabel>
                        <Select {...register('location')} defaultValue="" value={props?.spaceDetails?.building?.groupName} onChange={(e) => { getBuildingbyGroup(e.target.value) }} labelId="demo-simple-select-label" id="demo-simple-select" label="Location">
                            {initializeData?.locations?.map((x: any) => (<MenuItem key={x.id} value={x.groupName}>{x.groupName}</MenuItem>))}
                        </Select>
                        {errors.location && <FormHelperText>{errors.location.message?.toString()}</FormHelperText>}
                    </FormControl>
                </div>

                <div className="col-12 mt-3">
                    <FormControl fullWidth className="pk-dropdown" error={!!errors.building} >
                        <InputLabel id="demo-simple-select-label">Building Name</InputLabel>
                        <Select {...register('building')} defaultValue="" value={props?.spaceDetails?.buildingId} onChange={(e) => { getFloorbyBuilding(e.target.value) }} labelId="demo-simple-select-label" id="demo-simple-select" label="Building Name">
                            {initializeData?.buildings?.map((x: any) => (<MenuItem key={x.buildingId} value={x.buildingId}>{x.buildingName}</MenuItem>))}
                        </Select>
                        {errors.building && <FormHelperText>{errors.building.message?.toString()}</FormHelperText>}
                    </FormControl>
                </div>

                <div className="col-12 mt-3">
                    <FormControl fullWidth className="pk-dropdown" error={!!errors.floor} >
                        <InputLabel id="demo-simple-select-label">Floor</InputLabel>
                        <Select {...register('floor')} defaultValue="" value={props?.spaceDetails?.floorId} labelId="demo-simple-select-label" id="demo-simple-select" label="Floor">
                            {initializeData?.floors?.map((x: any) => (<MenuItem key={x.floorId} value={x.floorId}>{x.floorName}</MenuItem>))}
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