import { IArea } from '@bmunozg/react-image-area';
import { useEffect, useState } from 'react';
import ApiResponse from '../../../../../models/ApiResponse';
import SpaceService from '../../../../../services/space.service';
import RoomLeftPanel from './RoomLeftPanel';
import RoomRightPanel from './RoomRightPanel';

type props = { close: any, floorDetails: any, spaceDetails: any, afterSubmit: any };
const AddRoom = (props: props) => {
    const [areas, setAreas] = useState<IArea[]>(() => {
        let coordinates = [];
        if (props?.spaceDetails?.coordinates)
            coordinates = props.spaceDetails.coordinates.split(",").map((item: any) => {
                let cor = item.split("|");
                return { x: cor[0], y: cor[1], width: cor[2], height: cor[3], unit: "%" }
            });
        return coordinates;
    });

    const setAreaData = (data: IArea[]) => {
        setAreas(data);
    }
    const onDeleteArea = (deleteItem: IArea) => {
        setAreas(areas.filter(x => x != deleteItem));
    }


    const onSubmitData = async (data: any) => {
        //debugger;
        // var request = {
        //     // "SpaceId": "",
        //     "FloorId": data.floorDetails.floor,
        //     "OrgId": data.floorDetails.organization,
        //     "BuildingId": data.floorDetails.building,
        //     "SpaceType": data.floorDetails.space,
        //     "SpaceAliasName": data.spaceAliasName,
        //     "MappedCalendarIds": [1, 2, 3],
        //     "email": data.email,
        //     "directionNotes": data.directionNotes,
        //     // "servicingFacilities": data.servicingFacilities,
        //     "coordinates": areas.map((x => { return x.x + "|" + x.y + "|" + x.width + "|" + x.height })).join(","),
        //     // "workweekdays": "workweekdays",
        //     // "startTime": "startTime",
        //     // "endTime": "endTime",
        //     // "resources": "resources",
        //     // "role": null
        // }

        var request: any = {
            // "SpaceId":null,
            "floorId": data.floorDetails.floor,
            "OrgId": data.floorDetails.organization,
            "BuildingId": data.floorDetails.building,
            "spaceType": data.floorDetails.space,
            "spaceAliasName": data.spaceAliasName,
            "mappedCalendarIds": [1, 2, 3],
            "email": data.email,
            "directionNotes": data.directionNotes,
            "servicingFacilities": data.servicingFacilities,
            "coordinates": areas?.map((x => { return x.x + "|" + x.y + "|" + x.width + "|" + x.height })).join(","),
            // "workweekdays": "workweekdays",
            // "startTime": "startTime",
            // "endTime": "endTime",
            // "resources": "resources",
            // "role": null

        }
        let response: ApiResponse;
        if (props?.spaceDetails?.spaceId) {
            request.SpaceId = props?.spaceDetails?.spaceId;
            response = await SpaceService.updateSpace(props?.spaceDetails?.spaceId, request)
        }
        else
            response = await SpaceService.createSpace(request)
        if (response.statusCode == 200)
            props.afterSubmit();

    }

    return (
        <div className="col-10 col-md-12 col-lg-10 col-xl-8">
            <div className="row justify-content-center align-items-center">
                <div className="col-lg-10 card">
                    <div className="card-body p-0" >
                        <div className="row" style={{ height: "80vh" }}>
                            <RoomLeftPanel floorDetails={props.floorDetails} areas={areas} onAreaChange={setAreaData} ></RoomLeftPanel>
                            <RoomRightPanel  {...props} areas={areas} onAreaDelete={onDeleteArea} afterSubmit={onSubmitData} ></RoomRightPanel>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default AddRoom;