import { Button } from "@mui/material";


type props = { onSave: () => void, close?: any };

const SaveAlert = ({ onSave, close }: props) => {
    return (
        <div className="bg-white p-5">
            <div className="row">
                <div className="col-12">
                    <div className="fw-bold">Successfully Saved</div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-6 text-center">
                    <Button variant="contained" onClick={() => { close(); }} >
                        <div>Ok</div>
                    </Button>
                </div>
            </div>
        </div>);
}

export default SaveAlert;