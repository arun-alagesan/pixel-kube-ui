import floor from '../assets/images/parking.png'





const getParkingSlots = async () => {
    const base64data = await fetch(floor.src)
        .then(response => response.blob())
        .then(blob => {
            const reader = new FileReader();
            reader.readAsDataURL(blob);
            return new Promise((res) => {
                reader.onloadend = () => {
                    res(reader.result);
                }
            })
        })
    const parkingDetails = {
        buildingName: "Einsten - meeting room",
        address: "ground floor, uk",
        startDate: "June 01, 5.30PM",
        endDate: "June 01, 7.30PM",
        floorDetails: [{
            floorName: "Ground Floor", floorId: "1",
            parkingSlots: [{ top: "40px", left: "122px", isAvailable: true, id: "Slot -1",name:"Robert Mathew" },
            { top: "40px", left: "159px", isAvailable: false, id: "Slot -2",name:"James Rodrigues" },
            { top: "40px", left: "191px", isAvailable: true, id: "Slot -3",name:"John David" },
            { top: "40px", left: "228px", isAvailable: true, id: "Slot -4",name:"Williams Edward" }],
            imageData: base64data
        },
        {
            floorName: "First Floor", floorId: "2",
            parkingSlots: [{ top: "110px", left: "175px", isAvailable: true, id: "Slot -11",name:"Robert Mathew" },
            { top: "110px", left: "200px", isAvailable: false, id: "Slot -12",name:"James Rodrigues" },
            { top: "230px", left: "175px", isAvailable: true, id: "Slot -13",name:"John David" },
            { top: "230px", left: "200px", isAvailable: true, id: "Slot -14",name:"Williams Edward" }],
            imageData: base64data
        }]
    }
    return parkingDetails
}
const saveSlot=(slotId)=>{
    //save this to db
}

const ParkingService = {
    getParkingSlots,
    saveSlot

}

export default ParkingService;