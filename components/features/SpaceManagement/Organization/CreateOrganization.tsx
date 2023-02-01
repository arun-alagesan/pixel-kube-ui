import { gridColumnsTotalWidthSelector } from "@mui/x-data-grid";
import { useState } from "react";
import PopupHeader from "../../../common/PopupHeader";
import StepProgress from "../../../common/StepProgress";

import Facilities from "./Facilities";
import AddOrgGeneral from "./General";


let renderCount = 0;
const CreateOrganization = (props: any) => {
    console.log(props.organization);
    const [currentStep, setCurrentStep] = useState(1);
    var stepList = ["General", "Facilities"];

    const changeStepHandler = (step: number) => { setCurrentStep(step); };



    return (
        <div className="container">
            <div className="row justify-content-center align-items-center">
                <div className="col-10 col-lg-11 col-xl-10">
                    <div className="card">
                        <div className="card-body">
                            <PopupHeader title="Add Organization" subHeading="Please fill the organization details" align="center" close={props.close} ></PopupHeader>

                            <div className="row">
                                <div className="col-12 mb-2">
                                    <StepProgress stepList={stepList} currentStep={currentStep} ></StepProgress>
                                </div>
                            </div>
                            {
                                currentStep === 1 ? <AddOrgGeneral organization={props.organization} key={1} submittedCallback={props.submittedCallback} changeStep={changeStepHandler}></AddOrgGeneral> : <Facilities key={2} orgId={props.organization.orgId} ></Facilities>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default CreateOrganization;