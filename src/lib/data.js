import { headers } from "next/headers";
import { auth } from "./auth";

export const getAllSportFacilities = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facilities`);
    const data = await res.json();
    return data;
}
export const getFacilityDetailsById = async(id) => {
    const { token } = await auth.api.getToken({
        headers: await headers()
    })
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facilities/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`
        },
        //cache: 'no-store'
    });
    const data = await res.json();
    return data;
}