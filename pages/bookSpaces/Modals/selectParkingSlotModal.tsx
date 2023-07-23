import FormControl from "@mui/material/FormControl";
import FormGroup from '@mui/material/FormGroup';
import { Button } from "@mui/material";

import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import roomData from "../data/bookRoomData.json";
import { useEffect, useState } from "react";

function SelectParkingSlotModal(props){
    return(
        <div>
            {props.selectedSlot}
            <div className="text-sm mt-4 px-2 md:px-2">
            <FormGroup>
                    <FormControl fullWidth sx={{ margin: "20px 20px 0px 0px" }} size="small">
                        <InputLabel id="locationLabel">Add Participant</InputLabel>
                        <Select labelId="locationLabel" label="Add Participant" className="text-sm">
                            {roomData.participants.map((x, i) => {
                                return <MenuItem key={i} value={x.id}>{x.name}</MenuItem>;
                            })}
                        </Select>
                    </FormControl>
                </FormGroup>
                <FormControl
              fullWidth
              sx={{ margin: "20px 20px 0px 0px" }}
              size="small"
            >
              <TextField
                id="attendies"
                label="Vehicle Number"
                variant="outlined"
              />
            </FormControl>
            <FormControl  sx={{ margin: "20px 0px 0px 0px" }} className="flex justify-center " size="small">
                <Button variant="contained" onClick={()=>props.addClick(props.selectedSlot)}>Add</Button>
            </FormControl>
            </div>
        </div>
    )
}

export default SelectParkingSlotModal