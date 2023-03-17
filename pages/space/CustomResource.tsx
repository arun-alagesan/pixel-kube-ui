import { useState } from "react"
import { Resource } from "../../models/spacemgmt/facility/FacilityModel"
import { InputText } from "primereact/inputtext";
import { Dropdown } from 'primereact/dropdown';
import Button from "@mui/material/Button";
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import FacilityService from "../../services/facility.service";

const CustomResource = ({ facilityData }: any) => {

    const citySelectItems = [
        { label: 'Toggle', value: 'toggle' },
        { label: 'Count', value: 'count' },
        { label: 'Bookable', value: 'bookable' },

    ];

    const [customResource, setCustomResource] = useState<Resource>({
        name: "", type: "", isEnabled: true, facilityId: facilityData.facilityId
    })

    const CreateCustomResource = (newValue: any) => {
        // //debugger;
        // var newResource = Object.assign(customResource, newValue)
        setCustomResource({ ...customResource, ...newValue })
    }
    const onCustomAdd = () => {
        FacilityService.CreateResource(customResource);

    }

    return (
        <div className="row p-5">
            <div className="col-12 ">
                <div className="table-responsive ">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Resources</th>
                                <th>Resources Type</th>
                                <th>Enable</th>
                            </tr>
                        </thead>
                        <tbody>
                            {facilityData.resources?.map((x: any) => {
                                return (
                                    <tr key={x?.resourceId}>
                                        <td>{x?.name}</td>
                                        <td>{x?.type}</td>
                                        <td>
                                            <div className="form-check form-switch">
                                                <input className="form-check-input" type="checkbox" role="switch" checked={x?.isEnabled == true} />
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                            <tr></tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="col-12 mt-3">
                <form >
                    <div className="row align-items-center ">
                        <div className="col-12 col-md-3">
                            {/* <TextField label="Add Custom" fullWidth variant="outlined" size="small" style={{ padding: "1.2rem 0.8rem" }} /> */}
                            <span className="p-float-label">
                                <InputText type="text" className="p-inputtext-sm block" value={customResource.name} onChange={(e) => { CreateCustomResource({ name: e.target.value }) }} />
                                <label>Add Custom</label>
                            </span>
                        </div>
                        <div className="col-12 col-md-3">
                            <span className="p-float-label">
                                {/* <InputText type="text" className="p-inputtext-sm block" /> */}
                                <Dropdown options={citySelectItems} placeholder="Select Type" value={customResource.type} onChange={(e) => { CreateCustomResource({ type: e.target.value }) }} />
                                <label>Type</label>
                            </span>
                            {/* <TextField label="Type" variant="outlined" className="pk-input" /> */}
                        </div>
                        <div className="col-12 col-md-3">
                            <Button variant="contained" type="button" size="small" >Choose icon</Button>
                        </div>
                        <div className="col-12 col-md-3" >
                            <Button variant="contained" type="button" size="small">
                                <ControlPointIcon></ControlPointIcon>
                                <span className="ms-2" onClick={onCustomAdd} >Add Custom </span> </Button>
                        </div>
                    </div>
                </form>
            </div>
        </div >
    );

}
export default CustomResource;