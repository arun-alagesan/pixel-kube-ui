export default interface Facility {
    id: number;
    facility: string;
    email: string;
    escalationPeriod: string;
    escalationEmail: string;
    notifyFacility: boolean;
    notifyOrganizer: boolean;
    resources: Resource[];
}

export interface Resource {
    id: number;
    resource: string;
    type: string;
    isActive: boolean;
    icon?: string;
}
