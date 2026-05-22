import { headers } from "next/headers";
import { auth } from "./auth";
import { authClient } from "./auth-client";

// this api for all facility data show

export const getLimitedFacilities = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/limited-facilities`);
    const data = await res.json();
    return data;
}
export const getAllSportFacilities = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facilities`);
    const data = await res.json();
    return data;
}
//this api for show by facility id with details
export const getFacilityDetailsById = async(id) => {
    // const tokenResponse = await auth.api.getToken({
    //     headers: await headers()
    // });
    // const token = tokenResponse?.token;
    const { token } = await auth.api.getToken({
        headers: await headers()
    })
    //console.log('get token detila: ', token);
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facilityDetails/${id}`, {
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




// this api show which facility added a user
export const getMyAllAddedFacility = async(userId) => {
    // const { token } = await authClient.getToken({
    //     headers: await headers()
    // });
    const { token } = await auth.api.getToken({
        headers: await headers()
    })
    //console.log(token, 'token');
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



// this api show user show user booking facility by user id

export const getMyBookingFacility = async(userId) => {
    const { token } = await auth.api.getToken({
        headers: await headers()
    })
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${userId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`
        }
    });
    const data = await res.json();
    return data;
}