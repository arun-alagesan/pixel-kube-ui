export interface Facility {
    facilityId: number;
    facilityName: string;
    email: string;
    escalationPeriod: number;
    escalationEmail: string;
    notifyFacilities: boolean;
    notifyOrganizer: boolean;
    orgId: number;
    resources: Resource[];
}

export interface Resource {
    resourceId: number;
    type: string;
    name: string;
    isEnabled: boolean;
    icon?: string;
    facilityId: number;
}