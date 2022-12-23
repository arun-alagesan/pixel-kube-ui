import { useState } from "react";
import PopupHeader from "../../../common/PopupHeader";
import StepProgress from "../../../common/StepProgress";
import Facilities from "../Organization/Facilities";
import AddOrgGeneral from "../Organization/General";
import AddBuildingGeneralInfo from "./AddBuildingGeneralInfo";
import AddFloor from "./AddFloor";
import AddSupportGroup from "./AddSupportGroup";




let renderCount = 0;
const CreateBuilding = (props: any) => {
    console.log("renderCount of AddOrg ", ++renderCount);
    const [currentStep, setCurrentStep] = useState(1);
    var stepList = ["General", "Support Group", "Floors"];

    const changeStepHandler = (step: number) => { setCurrentStep(step); };

    const getCurrentPage: any = () => {
        if (currentStep == 1) {
            return <AddBuildingGeneralInfo changeStep={changeStepHandler}></AddBuildingGeneralInfo>;
        }
        else if (currentStep == 2) {
            return <AddSupportGroup changeStep={changeStepHandler}></AddSupportGroup>;
        }
        else {
            return <AddFloor></AddFloor>;
        }
    }
    return (
        <div className="container">
            <div className="row justify-content-center align-items-center">
                <div className="col-10 col-lg-8 col-xl-8">
                    <div className="card p-5">
                        <div className="card-body">
                            <PopupHeader title="Add Building" subHeading="Please fill the organization details" align="center" close={props.close} ></PopupHeader>

                            <div className="row">
                                <div className="col-12 mb-2">
                                    <StepProgress stepList={stepList} currentStep={currentStep} ></StepProgress>
                                </div>
                            </div>
                            {
                                getCurrentPage()
                                // currentStep === 1 ? <AddBuildingGeneralInfo changeStep={changeStepHandler}></AddBuildingGeneralInfo> : <AddSupportGroup changeStep={changeStepHandler}></AddSupportGroup>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default CreateBuilding;