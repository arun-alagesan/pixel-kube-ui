import Building from "./building";
import Organization from "./organization";

export default interface Space {
    spaceId: number;
    floorId: number;
    buildingId: number;
    orgId: number;
    spaceType: string;
    spaceAliasName?: any;
    mappedCalendarIds?: any;
    email?: any;
    directionNotes?: any;
    servicingFacilities?: any;
    coordinates?: any;
    workweekdays?: any;
    startTime?: any;
    endTime?: any;
    resources?: any;
    role?: any;
    organization: Organization;
    building: Building;
}
export interface SpaceType{
    
}