import BookingCard from "@/components/bookingCard";
import { getFacilityDetailsById } from "@/lib/data";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FacilityDetailsById = async ({ params }) => {
  const { id } = await params;
  console.log("facility id: ", id);
  //const facilityDetails = await getFallbackRouteParams()
  const facility = await getFacilityDetailsById(id);
  console.log(facility, "facility details!");
  return (
    <div className="mx-auto">
      <div className="bg-blue-200 w-96 mx-auto my-2  rounded-md">
        <Image
          className="rounded-ss-md rounded-se-md"
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
          <p>{facility.facility_description}</p>
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
