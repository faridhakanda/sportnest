import { headers } from "next/headers";
import { auth } from "./auth";
import { authClient } from "./auth-client";

export const getAllSportFacilities = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facilities`);
    const data = await res.json();
    return data;
}
export const getFacilityDetailsById = async(id) => {
    const tokenResponse = await auth.api.getToken({
        headers: await headers()
    });
    const token = tokenResponse?.token;
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

export const getMyAllAddedFacility = async(userId) => {
    // const { token } = await authClient.getToken({
    //     headers: await headers()
    // });
    const { token } = await auth.api.getToken({
        headers: await headers()
    })
    console.log(token, 'token');
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-facility/${userId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`
        }
    });
    const data = await res.json();
    return data;
}