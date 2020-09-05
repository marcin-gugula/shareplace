export async function getCoordsFromAddress(address) {

    const urlAddress = encodeURI(address);
    // fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${}&key=YOUR_API_KEY`);
    // fetch(`https://nominatim.openstreetmap.org/search/${urlAddress}?format=json`).then(response => {
    // console.log(response.json());
//   })
    const response = await fetch(`https://nominatim.openstreetmap.org/search/${urlAddress}?format=json`);
    if (!response.ok) {
        throw new Error("Failed to fetch coordinates...");
    }
    const data = await response.json();
    if (data.error_message) {
        throw new Error(data.error_message);
    }
    const coordinates = data[0];
    return coordinates;
}

export async function getAddressFromCoords(coords){
    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${coords.lat}&lon=${coords.lon}`)
    if (!response.ok) {
        throw new Error("Failed to fetch address...");
    }
    const data = await response.json();
    if (data.error_message) {
        throw new Error(data.error_message);
    }
    console.log(data);
    const address = data.display_name;
    return address;
}