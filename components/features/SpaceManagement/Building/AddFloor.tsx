import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useState } from "react";
import AddFloorItem from "./AddFloorItem";


const AddFloor = () => {

    const [floors, setFloors] = useState<any[]>([<AddFloorItem key={new Date().getTime()}></AddFloorItem>]);

    const onAddBtnClick = () => {
        setFloors(floors.concat(<AddFloorItem key={new Date().getTime()}></AddFloorItem>));
    };

    return (
        <div className="row mt-5 justify-content-center">
            <div className="col-12 col-md-10">
                {
                    [...floors]
                }
            </div>
            <div className="col-12 mt-5 text-center">
                <div className="row justify-content-center">
                    <div className="col">
                        <hr className="m-0" style={{ position: "relative", top: "50%" }} />
                    </div>
                    <div className="col">
                        <Button size="small" onClick={onAddBtnClick}>
                            <AddCircleOutlineIcon></AddCircleOutlineIcon>
                            <span className="ms-2">Add More</span>
                        </Button>
                    </div>
                    <div className="col">
                        <hr className="m-0" style={{ position: "relative", top: "50%" }} />
                    </div>
                </div>

            </div>
            <div className="col-12 text-center mt-5">
                <Button variant="contained" type="submit">Submit</Button>
            </div>
        </div>
    );
}

export default AddFloor;