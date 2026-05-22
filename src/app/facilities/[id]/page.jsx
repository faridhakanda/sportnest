import AllFacilityCard from "@/components/allFacilityCard";
import BookingCard from "@/components/bookingCard";
import { BookingDelete } from "@/components/bookingDel";
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
  //console.log("facility id: ", id);
  //const facilityDetails = await getFallbackRouteParams()
  const facility = await getFacilityDetailsById(id);
  //console.log(facility, "facility details!");

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
      

      {/* Facility Details like booking and my facility page */}
      <div className="mx-auto mb-4 grid grid-cols-1  max-w-6xl justify-center">
        <div className="bg-slate-100  shadow-sm mx-4 rounded-md md:mx-2 my-2 px-2 py-2">
          <div className="grid md:flex gap-4 justify-between items-center">
            
            <AllFacilityCard facility={facility} />
          </div>

          <div className="flex my-2 justify-between">
            {/* <BookingDelete bookingId={facility._id} /> */}
            <BookingCard facility={facility} />
            <Link className="" href={"/"}>
              <Button
                className={"rounded-md bg-purple-600 text-white font-bold"}
                variant="outline"
              >
                Go to Home
              </Button>
            </Link>
          </div>
        </div>
        {/* ))} */}
      </div>
    </div>
  );
};

export default FacilityDetailsById;


// {/* <Image
//               className="w-full md:w-fit rounded-md"
//               src={facility.facility_image}
//               alt={facility.facility_name}
//               width={400}
//               height={400}
//             />
//             <div className="items-center mx-auto justify-center px-2">
//               {/* <p>Booking Id: {facility._id}</p> */}
//               <h2 className="font-bold text-xl">{facility.facility_name}</h2>
//               <p>
//                 <span className="text-[#647489]">Facility Type: </span>{" "}
//                 <span className="text-orange-500">
//                   {facility.facility_type}
//                 </span>
//               </p>
//               <p>
//                 <span className="text-[#647489] text-sm">Price: </span>
//                 <span className="font-bold text-orange-600">
//                   ${facility.facility_price_per_hour}/ph
//                 </span>
//               </p>
//               <p>
//                 <span className="text-[#647489]">Location: </span>
//                 <span className="text-orange-500">
//                   {facility.facility_location}
//                 </span>
//               </p>
//               <p>
//                 <span className="text-sm text-[#647489]">Owner Name:</span>{" "}
//                 <span className="font-bold text-[#647489]">
//                   {facility.userName}
//                 </span>
//               </p>
//               <p>
//                 <span className="text-sm text-[#647489]">Owner Email:</span>{" "}
//                 <span className="font-bold text-[#647489]">
//                   {facility.userEmail}
//                 </span>
//               </p>
//               <p>
//                 <span className="text-[#647489]">Facility Capacity: </span>
//                 <span className="text-orange-500 font-bold">
//                   {facility.facility_capacity}
//                 </span>
//               </p>
//               <p>
//                 <span className="text-[#647489]">
//                   Facility Available Slot:{" "}
//                 </span>
//                 <span className="text-orange-500 font-bold">
//                   {facility.facility_available_slot}
//                 </span>
//               </p>
//               <p className=" my-1">
//                 <span className="font-semibold">
//                   {facility.facility_description}
//                 </span>{" "}
//               </p>
//             </div> */}