import { useState } from 'react';
import Modal from "../../lib/modalPopup/components/Modal";
import ModalBody from "../../lib/modalPopup/components/ModalBody";
import ModalHeader from "../../lib/modalPopup/components/ModalHeader";
import ModalFooter from "../../lib/modalPopup/components/ModalFooter";
import Button from "../../common/Button";
import ConnectorIcon from "../../../assets/icons/connectormanagement.svg";
import { ListBox } from 'primereact/listbox';
import axios from 'axios';
import {config} from '../../../services/http-common';

export default function Connector(props) {
    const calenders = [];
    const [selectedCalendar, setSelectedCalendar] = useState(null);

    props.connectorResponse.map((x) => {
        calenders.push({ daysToSync: x.daysToSync, description: x.description, sourceCalendarId: x.sourceCalendarId, timeZone: x.timeZone, title: x.title });
        return <li key={x.sourceCalendarId}>{x.title}</li>;
    });

    const onSave = () => {
        let url=config.connectionManagement.baseURL+config.connectionManagement.AddCalender;
        const req={
            "name": props.connectorName,
             "source": "Google",
             "accessMode": "Service Account",
             "calendar": {
               "sourceCalendarId": selectedCalendar.sourceCalendarId,
               "timeZone": selectedCalendar.timeZone,
               "title": selectedCalendar.title,
               "description": selectedCalendar.description,
           "allowedAccess": "writer"
             },
             "orgId": "1"
           }
           const res = axios.post(url, req);
        alert('Saved');
        props.close();
    }

    return (
        <Modal>
            <ModalHeader>
                <div style={{ display: 'flex', width: '100%' }}>
                    <div style={{ width: '20%', fontWeight: 'bold' }}>
                        <ConnectorIcon></ConnectorIcon>
                    </div>
                    <div style={{ width: '60%' }}>
                        <h3 className="heading4 font-bold pb-4">{props.connectorName}</h3>
                    </div>
                    <div style={{ width: '20%' }}><button onClick={props.close}>✖</button></div>
                </div>
            </ModalHeader>
            <ModalBody>
               <div className="py-4 overflow-auto" style={{ maxHeight: '68vh' }}>
                    <ListBox value={selectedCalendar} onChange={(e) => setSelectedCalendar(e.value)} options={calenders} optionLabel="title"/>
                </div>
            </ModalBody>
            <ModalFooter>
                <div className="flex py-4 w-full">
                    <Button onClose={props.close} onClick={onSave}>Save</Button>
                </div>
            </ModalFooter>
        </Modal>
    );
}
