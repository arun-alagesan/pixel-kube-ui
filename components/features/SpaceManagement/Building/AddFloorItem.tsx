import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";


const AddFloorItem = ({ onAddFile }: any) => {

    //let selectedFile!: File;
    // const [selectedFile, setSelectedFile] = useState<File>();

    const [fileName, setFileName] = useState("");

    const handleFileSelected = (e: React.ChangeEvent<HTMLInputElement>): void => {
        console.log(e.target.files);
        if (e.target.files != null && e.target.files.length > 0) {
            // setSelectedFile(e.target.files[0]);
            getBase64(e.target.files[0]);
            // onAddFile(e.target.files[0])?
        }

        //const files = Array.from(e.target.files);
        //console.log("files:", files)
    }

    const getBase64 = (file: any) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            setFileName(file.name);
            onAddFile({ floorName: file.name, floorPlan: reader.result })
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }


    return (
        <div className="row">
            <div className="col-12 col-md-4 mt-3">
                <TextField fullWidth label="Floor Name" variant="outlined" value={fileName} className="pk-input" />
            </div>
            <div className="col-12 col-md-8 mt-3">
                <div className="row">
                    <div className="col-6">
                        <Button variant="contained" component="label">
                            Upload Floor Plan
                            <input hidden accept="image/*" onChange={handleFileSelected} type="file" />
                        </Button>
                    </div>
                    <div className="col-6">
                        {(fileName ? fileName : "No files Selected")}
                    </div>
                </div>

            </div>

        </div>
    );
}

export default AddFloorItem;