import Organization from "./organization";

export default interface Building {
    buildingId: number;
    buildingName: string;
    orgId: number;
    address: string;
    groupName: string;
    organization: Organization;
}