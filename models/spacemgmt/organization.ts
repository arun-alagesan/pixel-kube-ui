export default interface Organization {
    orgId: number
    orgGuid: string
    orgName: string
    industry: string
    buildingName: string
    mailingAddress: string
    country: string
    state: string
    city: string
    zipcode: string
    phoneNumber: string
    email: string
    website: string
    image: string
    logo: string
    roles: any
    countryId: number | null
    countryName: string | null
    stateId: number | null
    stateName: string | null
    cityId: number | null
    cityName: string | null
}

