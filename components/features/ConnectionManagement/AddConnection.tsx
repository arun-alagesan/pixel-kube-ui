import {useState} from 'react';
import Modal from "../../lib/modalPopup/components/Modal";
import ModalBody from "../../lib/modalPopup/components/ModalBody";
import ModalHeader from "../../lib/modalPopup/components/ModalHeader";
import ModalFooter from "../../lib/modalPopup/components/ModalFooter";
import TextField from '@mui/material/TextField';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import AddButton from './AddButton';


export default function AddConnection(props: any) {

  const [calenderValue, setCalenderValue] = useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setCalenderValue(event.target.value as string);
  };
  return (
    <Modal>
      <ModalHeader>
        <div className="flex flex-column w-full b-4">
          <button className="opacity-30 ml-auto	" onClick={props.close}>✖</button>
          <h3 className="heading4 font-bold pb-4">Add a Connector</h3>
        </div>
      </ModalHeader>
      <ModalBody>
        <div className="py-3">
          <label className="w-full" htmlFor="orgSpace">
          <TextField fullWidth id="outlined-basic" label="Connector Name" variant="outlined" required/> 
          </label>
        </div>
        <div className="py-3">
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Calender</InputLabel>
        <Select
          fullWidth
          labelId="demo-simple-select-label"
          value={calenderValue}
          id="demo-simple-select"
          label="Select Calender"
          onChange={handleChange}
        >
          <MenuItem value={10}>Google Calender</MenuItem>
          <MenuItem value={20}>Office 365 (Basic Authentication) </MenuItem>
          <MenuItem value={30}>Office 365 (Modern Authentication) </MenuItem>
          <MenuItem value={40}>Exchange </MenuItem>
          <MenuItem value={50}>Opera</MenuItem>
          <MenuItem value={60}>Delphi</MenuItem>
          <MenuItem value={70}>Discrete Calender</MenuItem>
        </Select>
        </FormControl>
        </div>
      </ModalBody>
      <ModalFooter>
        <div className="flex py-4 w-full">
          <AddButton onClose={props.close} calenderValue={calenderValue}/> 
        </div>
      </ModalFooter> 
    </Modal>
  );
}
