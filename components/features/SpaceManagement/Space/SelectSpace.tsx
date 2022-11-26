
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
    space: yup.string().required('Please select any space')
});

type props = { afterSubmit: any };
const SelectSpace = (props: props) => {

    type initializeDataType = { spaces: KVP[] };

    const [initializeData, setInitializeData] = useState<initializeDataType>({ spaces: [] });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    useEffect(() => {
        async function fetchMyApi() {
            let spaceResponse = await SpaceService.getSpaceList();

            let initializationData: initializeDataType = {} as initializeDataType;

            if (spaceResponse.status === true) {
                initializationData.spaces = spaceResponse.data;
            }
            setInitializeData(initializationData);
        }
        fetchMyApi();
    }, []);

    const onSubmit = (data: any) => {
        console.log('submitted data', data);
        props.afterSubmit();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row mt-3">
                <div className="col-12">
                    <FormControl fullWidth className="pk-dropdown" error={!!errors.space}>
                        <InputLabel id="demo-simple-select-label">Select Space</InputLabel>
                        <Select {...register('space')} defaultValue="" labelId="ddlSelectSpace" id="ddlSelectSpace" label="Select Space">
                            {initializeData.spaces.map(x => (<MenuItem key={x.id} value={x.id}>{x.name}</MenuItem>))}
                            {/* <MenuItem value="Room">Room</MenuItem>
                            <MenuItem value="Hot Desk">Hot Desk</MenuItem>
                            <MenuItem value="Parking">Parking</MenuItem> */}
                        </Select>
                        {errors.space && <FormHelperText>{errors.space.message?.toString()}</FormHelperText>}
                    </FormControl>
                </div>
                <div className="col-12 mt-4">
                    <Button variant="contained" type="submit" fullWidth={true}>Submit</Button>
                </div>
            </div >
        </form>);
}

export default SelectSpace;