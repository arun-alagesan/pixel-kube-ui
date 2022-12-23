import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const AddFloorItem = () => {

    //let selectedFile!: File;
    const [selectedFile, setSelectedFile] = useState<File>();

    const handleFileSelected = (e: React.ChangeEvent<HTMLInputElement>): void => {
        console.log(e.target.files);
        if (e.target.files != null && e.target.files.length > 0) {
            setSelectedFile(e.target.files[0]);
        }

        //const files = Array.from(e.target.files);
        //console.log("files:", files)
    }


    return (
        <div className="row">
            <div className="col-12 col-md-4 mt-3">
                <TextField fullWidth label="Floor Name" variant="outlined" className="pk-input" />
            </div>
            <div className="col-12 col-md-8 mt-3">
                <div className="row">
                    <div className="col-6">
                        <Button variant="contained" component="label">
                            Upload Floor Plan
                            <input hidden accept="image/*" onChange={handleFileSelected} multiple type="file" />
                        </Button>
                    </div>
                    <div className="col-6">
                        {(selectedFile?.name == null ? "No files Selected" : selectedFile.name)}
                    </div>
                </div>

            </div>

        </div>
    );
}

export default AddFloorItem;