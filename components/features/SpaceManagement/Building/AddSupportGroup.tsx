import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";

type props = { changeStep: (step: number) => void };

const AddSupportGroup = ({ changeStep }: props) => {
    return (
        <div className="row justify-content-center">
            <div className="col-12 col-md-6 col-lg-4 div-md-6 margin-auto">
                <div className="row border-bottom align-items-center">
                    <div className="col-10">
                        Physical Infrastructure
                    </div>
                    <div className="col-2">
                        <Switch />
                    </div>
                </div>
                <div className="row border-bottom align-items-center">
                    <div className="col-10">
                        IT Infrastructure
                    </div>
                    <div className="col-2">
                        <Switch />
                    </div>
                </div>
                <div className="row border-bottom align-items-center">
                    <div className="col-10">
                        Catering
                    </div>
                    <div className="col-2">
                        <Switch />
                    </div>
                </div>
                <div className="row border-bottom align-items-center">
                    <div className="col-10">
                        Front Desk
                    </div>
                    <div className="col-2">
                        <Switch />
                    </div>
                </div>
                <div className="row border-bottom align-items-center">
                    <div className="col-10">
                        Cleaning
                    </div>
                    <div className="col-2">
                        <Switch />
                    </div>
                </div>
            </div>
            <div className="col-12 text-center mt-5">
                <Button variant="contained" type="submit" onClick={() => changeStep(3)}>Add Support Group</Button>
            </div>

        </div>
    );
}

export default AddSupportGroup;