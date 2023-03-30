import {useState,useRef} from 'react';
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
import Button from './../../common/Button';
import axios from "axios";
import AddConnection from '../../../components/features/ConnectionManagement/AddConnection';
import ModalService from "../../../components/lib/modalPopup/services/ModalService";
//import ModalService from "../components/lib/modalPopup/services/ModalService";


export default function ChooseConnector(props: any) {

 

  const [calenderValue, setCalenderValue] = useState('');
  const connectorName = useRef<any>(null);
  const selectedCalId = useRef<any>(null);
  /* const hiddenFileInput = useRef(null); */
  const [selectedFile,setSelectedFile] = useState('Import Json');
  const [responseData,setResponseData]=useState({});

  const handleChange = (event: SelectChangeEvent) => {
    setCalenderValue(event.target.value as string);
  };

  const handleFileChange=(event:any)=>
  {
    setSelectedFile(event.target.files[0].name);
    let url = "https://localhost:7022/api/admin/createconnectionfromfile";
    let file = event.target.files[0];
    uploadFile(url, file);
  };

  const uploadFile = (url:any, file:any) => {
    let formData = new FormData();
    formData.append("file", file);
    formData.append("OrgID","1");
    formData.append("Name","test");
    axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }).then((response) => {
        fnSuccess(response);
      }).catch((error) => {
        fnFail(error);
      });
  };
  const fnSuccess = (response:any) => {
    if(response!=null)
    {
      const data={'connectorName':connectorName?.current?.value,'connectorResponse':response.data};
      console.log(data);
      setResponseData(data);
    }
  };
  
  const fnFail = (error:any) => {
    //Add failed handling
  };

  /* const handleClick = (event:any) => {
    hiddenFileInput?.current?.click();
  }; */

  const AddConnector = () => {
    console.log(connectorName);
    const connectorDetails={
      connectorName:connectorName.current.value,
      SelectedCalenderId:calenderValue
    }
    ModalService.open(AddConnection,connectorDetails);
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
          <TextField inputRef={connectorName}  fullWidth id="outlined-basic" label="Connector Name" variant="outlined" required/> 
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
        <Button onClick={AddConnector}>Add</Button> 
        </div>
      </ModalFooter> 
    </Modal>
  );
}
