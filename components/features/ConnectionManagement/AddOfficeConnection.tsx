import {useState,useRef} from 'react';
import Modal from "../../lib/modalPopup/components/Modal";
import ModalBody from "../../lib/modalPopup/components/ModalBody";
import ModalHeader from "../../lib/modalPopup/components/ModalHeader";
import ModalFooter from "../../lib/modalPopup/components/ModalFooter";
import TextField from '@mui/material/TextField';
import Button from './../../common/Button';
import axios from "axios";
import { config } from '../../../services/http-common';


export default function AddOfficeConnection(props: any) {

  const serviceAccountEmail = useRef<any>(null);
  const applicationID = useRef<any>(null);
  const tenantID = useRef<any>(null);
  const clientSecret = useRef<any>(null);

  const AddConnector = () => {
    let url=config.connectionManagement.baseURL+config.connectionManagement.CreateConnector;
    const req={
      "name": props.connectorName,
      "source": "Office365",
      "accessMode": "Service Account",
      "connectionString": {
        "type": "service_account",
        "project_id": applicationID.current.value,
        "private_key_id": "02e8de71b4d825013c90841d312c33c45cafcb51",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDH7BAqJg4QLp7E\nfluZYfxBmmjDHCWtTHDzNb0NHdyziSl+e2SrpQRA7zW3poOhHbEa3BM3Hss2dx6l\n4ZjXS8DHY9uSTcLIUsq99khNVRCPb9+nXfkF1BUXt6ZBQjbBA5lFN8kVZOHLxRPS\n1kK0BGGrIzBlyKR41OezYiLTumvNliLHpsh1mkP9no/ZuGig9v9Q/D7PV17MSPV0\negx2ov0hh1v5yz8G7MA9kABzO+dVljnKDuPCWLiE8q2Um/eprqajOGE3PPoxt87D\n1dgSBGI0VtHjZOTEk3Hv625xg4zVUacteb3SU7blrwUbtflzDFoi3U9sbIw4kz7D\ntpWx/LchAgMBAAECggEAICRPSv94RljAdNXd0zCiNkflbOzzD8QY6rkqjlfNOl4k\nei3Ldx8eKnRq/f467mXQKgHU4wlD4ZtQJZo6EO8gbM4cqI5w8PUCnHzijfBNq8nw\nOr/MgAfjZj9D7vz+wZRbCXpZDWP9O14RfFWvPrLvouyS5OJXsweDwt7Vu5WerFwc\no1LdwnJYlys2J00JFL5ehoBULNwigkyApsQ1SYbEngL2P5294lAO4Xxq2FunvW8f\navFC94rNQ6+uETk5IXnIeFl6RrEx5HpFeY4XTLxHJ80zIjXQYqTOmxO7UL3CH/ng\nWreCvDNigY/FlWs77/0sBSw1U4txVaQ1mLZW8rxBawKBgQDtH0lqSOpoyKVCU5QS\nWeKtV/QhKxkrcPy0z/IcRu12o3krep1SmkEaDfqgIIKw/g4U4t8COhvLH3SdRQ79\nJCFbuWW0G2qhxVRKb+WaSkKGjUvPuugefBrNKS0mihF+GQyTpAA8NNmrxYIywP58\nlvrkKhgCp9Dr8T/wMRZjLN1mEwKBgQDX1pzs68a7A4LQKnqUjhAS7TDR/WdQPyyk\n2/RomzIHfOMkUoXNz0FDI+CjhUKbR49pk1XiBdtCl6dl5cG3uc26bll1PBmqa3xc\neUS2LHPCdIKDJoItnfpknLPAPsol0tQ/XZkzxrR4tESB2v6YTA9rcWjNmy0E7L89\nAh+5yfYkewKBgQDhSJ1enoIfJaplFrUSrlV/rZWjQag7LrDZNMvo87Y+xlej6G26\nAhYiI+/e3KRudiF41IdePUkUtgD8PpVcCkyrMbyf3oBzy+AmjKNO8Ii9/1ZsuT45\nYF2yWBGukPTHohLh3qneibPYz+DASb4/Ls6VoiyHsVr8H4xIrsp/VSvQAwKBgAhr\n0jGYPWe8ilUO4zt6k3v5jycSSP6jiF1iS5XtQDV0lPQs2BWgmX5CHxiiMWgXkavf\n2MD504U0n45lOXquoC0+8vSVBLdWfEKrZJfrAhU7MIBndzrKaCOWzZiZmo+BO1DB\nmSGhBheTiPy8C6Trisp5YUpsXIRNrGR3+b7o91aTAoGBAIlO+7ZxhgIc8kFcW4Qp\ngBmHpjbdD9r44BhmLsFoYfBjQhpXC01TzJ5+79uTXfEoGtOblOl2pPWf2lA3xp/r\nWwxxvKOzav4NbkQvu0R2vXLO+hJNfmaveZ0J+ZVFywgsAcBCOEbDiP/jJKAmeHpe\nvqtDlJGZXgIgIbB9qrIJ29+V\n-----END PRIVATE KEY-----\n",
        "client_email": serviceAccountEmail.current.value,
        "client_id": tenantID.current.value,
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/pixelupsrvacc%40project-pixelup.iam.gserviceaccount.com"
      },
      "orgId": "1",
      "noOfDaysToSyncBefore": 2,
      "noOfDaysToSyncAfter": 30,
      "noOfSecondsToSyncCalendar": 90
    }
    let status="";
    const res = axios.post(url, req).then((response) => {
      console.log(response);
      alert('Saved');
      props.close();
    }).catch((error) => {
      console.log(error);
      alert(error.message);
      props.close();
    });
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
          <label className="w-full">
          <TextField value={props.connectorName}  fullWidth id="outlined-basic" label="Connector Name" variant="outlined" required/> 
          </label>
        </div>
        <div className="py-3">
          <label className="w-full">
          <TextField inputRef={serviceAccountEmail} fullWidth id="outlined-basic" label="Service Account Email" variant="outlined" required/> 
          </label>
        </div>
        <div className="py-3">
          <label className="w-full">
          <TextField inputRef={applicationID}  fullWidth id="outlined-basic" label="Application ID" variant="outlined" required/> 
          </label>
        </div>
        <div className="py-3">
          <label className="w-full">
          <TextField inputRef={tenantID}  fullWidth id="outlined-basic" label="Tenant ID" variant="outlined" required/> 
          </label>
        </div>
        <div className="py-3">
          <label className="w-full">
          <TextField inputRef={clientSecret}  fullWidth id="outlined-basic" label="Client Secret" variant="outlined" required/> 
          </label>
        </div>
      </ModalBody>
      <ModalFooter>
        <div className="flex py-4 w-full">
          <Button onClose={props.close} onClick={AddConnector}>Next</Button>
        </div>
      </ModalFooter> 
    </Modal>
  );
}