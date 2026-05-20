export const getAllSportFacilities = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facilities`);
    const data = await res.json();
    return data;
}
export const getFacilityDetailsById = async(id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facilities/${id}`);
    const data = await res.json();
    return data;
}