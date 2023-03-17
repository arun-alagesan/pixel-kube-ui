
import { useState } from "react";
import PopupHeader from "../../../common/PopupHeader";
import SuccessMessage from "../common/SuccessMessage";

import AddRoom from "./AddRoom/AddRoom";
import SelectSpace from "./SelectSpace";
import SpaceDetails from "./SpaceDetails";
import cup from "/assets/icons/cup.svg"


const CreateSpace = (props: any) => {
    const steps = ['Select Space', 'Add Details', 'Add Room'];
    const [currentStep, setCurrentStep] = useState(0);
    // const [editDetails, setEditDetails] = useState(props.spaceDetails);
    const [step1Details, setStep1Details] = useState<any>();
    const [step2Details, setStep2Details] = useState<any>();
    const [step0Details, setStep0Details] = useState<any>();

    const changeStep = (data: any) => {
        //debugger;
        if (currentStep == 0)
            setStep0Details(data);
        else if (currentStep == 1)
            setStep1Details(data);
        else if (currentStep == 2)
            setStep2Details(data);
        setCurrentStep(currentStep + 1);
    }
    const onSuccessClick = () => {
        props.close();
        props.submittedCallback();

    }
    const getRenderPage = () => {
        if (currentStep === 0 || currentStep === 1)
            return (
                <div className="col-10 col-md-6 col-lg-4">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-10 card">
                            <div className="card-body p-4">
                                <PopupHeader title={steps[currentStep]} close={props.close} align="left" ></PopupHeader>
                                {currentStep === 0 ? <SelectSpace spaceDetails={props.spaceDetails} afterSubmit={changeStep}></SelectSpace> : <SpaceDetails spaceDetails={props.spaceDetails} afterSubmit={changeStep}></SpaceDetails>}
                            </div>
                        </div>
                    </div>
                </div>
            );

        if (currentStep === 2)
            return (
                <AddRoom floorDetails={{ ...step0Details, ...step1Details, ...step2Details }} spaceDetails={props.spaceDetails} close={props.close} afterSubmit={changeStep}></AddRoom>
            );
        if (currentStep == 3)
            return (
                <SuccessMessage
                    headerText="Congratulation!"
                    bodyText="You have successfully Added the Rooms."
                    headerIcon={cup}
                    buttonText="View Room"
                    close={props.close}
                    buttonCallback={onSuccessClick}
                ></SuccessMessage>
            )
    }

    return getRenderPage();
}

export default CreateSpace;