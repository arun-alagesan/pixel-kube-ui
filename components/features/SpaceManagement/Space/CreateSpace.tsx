
import { useState } from "react";
import PopupHeader from "../../../common/PopupHeader";

import AddRoom from "./AddRoom/AddRoom";
import SelectSpace from "./SelectSpace";
import SpaceDetails from "./SpaceDetails";


const CreateSpace = (props: any) => {
    const steps = ['Select Space', 'Add Details', 'Add Room'];
    const [currentStep, setCurrentStep] = useState(2);

    const changeStep = () => {
        setCurrentStep(currentStep + 1);
    }
    const getRenderPage = () => {
        if (currentStep === 0 || currentStep === 1)
            return (
                <div className="col-10 col-md-6 col-lg-4">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-10 card">
                            <div className="card-body p-4">
                                <PopupHeader title={steps[currentStep]} close={props.close} align="left" ></PopupHeader>
                                {currentStep === 0 ? <SelectSpace afterSubmit={changeStep}></SelectSpace> : <SpaceDetails afterSubmit={changeStep}></SpaceDetails>}
                            </div>
                        </div>
                    </div>
                </div>
            );

        if (currentStep === 2)
            return (
                <AddRoom close={props.close}></AddRoom>
            );
    }

    return getRenderPage();
}

export default CreateSpace;