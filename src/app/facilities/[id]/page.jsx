import BookingCard from "@/components/bookingCard";
import { auth } from "@/lib/auth";
//import { auth } from "@/lib/auth";
//import { auth } from "@/lib/auth";

import { getFacilityDetailsById } from "@/lib/data";
import { Button } from "@heroui/react";
import { headers } from "next/headers";
//import { headers } from "next/headers";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { toast } from "react-toastify";

const FacilityDetailsById = async ({ params }) => {
  const { id } = await params;
  console.log("facility id: ", id);
  //const facilityDetails = await getFallbackRouteParams()
  const facility = await getFacilityDetailsById(id);
  console.log(facility, "facility details!");
  
  
  // now make new api
  
//   const { token } = await auth.api.getSession({
//     headers: await headers()
//   })
//   const tokenResponse = await auth.api.getToken({
//     headers: await headers()
//   })
//   const { token } = tokenResponse?.token;
//   const sessionData = await auth.api.getSession({
//     headers: await headers()
//   });
//   const token = sessionData?.session?.token;
//   if (!token) {
//     return (
//         toast.error('Token not valid!')
//     )
//   }
//   const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facilityDetails/${id}`, {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json',
//         authorization: `Bearer ${token}`
//     }
//   });
//   const facility = await res.json();
  


  return (
    <div className="mx-auto">
      <div className="bg-blue-200 w-96 mx-auto my-2  rounded-md">
        <Image
          className="w-full rounded-ss-md rounded-se-md"
          src={facility.facility_image}
          alt={facility.facility_name}
          width={400}
          height={400}
        />

        <div className="px-2 py-2 ">
          <h2>Facility name: {facility.facility_name}</h2>
          <p>Price: ${facility.facility_price_per_hour}</p>
          <p>Owner Name: {facility.userName}</p>
          <p>Owner email: {facility.userEmail}</p>
          <p>Facility description: {facility.facility_description}</p>
        </div>
        <BookingCard facility={facility} />
        <Link className="" href={"/"}>
          <Button className={"rounded-md"} variant="outline">
            Go to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FacilityDetailsById;
