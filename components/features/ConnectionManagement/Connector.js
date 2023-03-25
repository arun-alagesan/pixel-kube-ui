import { useState } from 'react';
import Modal from "../../lib/modalPopup/components/Modal";
import ModalBody from "../../lib/modalPopup/components/ModalBody";
import ModalHeader from "../../lib/modalPopup/components/ModalHeader";
import ModalFooter from "../../lib/modalPopup/components/ModalFooter";
import Button from "../../common/Button";
import ConnectorIcon from "../../../assets/icons/connectormanagement.svg";
import { ListBox } from 'primereact/listbox';

export default function Connector(props) {
    const calenders = [];
    const [selectedCity, setSelectedCity] = useState(null);

    props.connectorResponse.map((x) => {
        calenders.push({ daysToSync: x.daysToSync, description: x.description, sourceCalendarId: x.sourceCalendarId, timeZone: x.timeZone, title: x.title });
        return <li key={x.sourceCalendarId}>{x.title}</li>;
    });

    const onSave = () => {
        console.log(selectedCity);
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
                <div className="card flex justify-content-center">
                    <ListBox value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={calenders} optionLabel="title" className="w-full md:w-14rem" />
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
