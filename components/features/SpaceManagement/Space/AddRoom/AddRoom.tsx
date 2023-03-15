import { IArea } from '@bmunozg/react-image-area';
import { useState } from 'react';
import SpaceService from '../../../../../services/space.service';
import RoomLeftPanel from './RoomLeftPanel';
import RoomRightPanel from './RoomRightPanel';

type props = { close: any, floorDetails: any };
const AddRoom = (props: props) => {
    const [areas, setAreas] = useState<IArea[]>([]);

    const setAreaData = (data: IArea[]) => {
        setAreas(data);
    }
    const onDeleteArea = (deleteItem: IArea) => {
        debugger;
        setAreas(areas.filter(x => x != deleteItem));
    }
    
    const onSubmitData = async (data: any) => {
        debugger;

        var request = {
            "floorId": data.floorDetails.floor,
            "spaceType": "spaceType",
            "spaceAliasName": data.alias,
            "mappedCalendarIds": [1,2,3],
            "email": data.email,
            "directionNotes": "directionNotes",
            "servicingFacilities": [1,2,3],
            "coordinates": areas.map((x=>{return x.x+"|"+x.y+"|"+x.width+"|"+x.height})).join(","),
            // "workweekdays": "workweekdays",
            "startTime": "startTime",
            "endTime": "endTime",
            // "resources": "resources",
            // "role": null

        }
        const response = await SpaceService.createSpace(request)


        // props.close();

    }

    return (
        <div className="col-10 col-md-12 col-lg-10 col-xl-8">
            <div className="row justify-content-center align-items-center">
                <div className="col-lg-10 card">
                    <div className="card-body p-0" >
                        <div className="row" style={{ height: "80vh" }}>
                            <RoomLeftPanel floorDetails={props.floorDetails} areas={areas} onAreaChange={setAreaData} ></RoomLeftPanel>
                            <RoomRightPanel floorDetails={props.floorDetails} close={props.close} areas={areas} onAreaDelete={onDeleteArea} afterSubmit={onSubmitData} ></RoomRightPanel>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default AddRoom;