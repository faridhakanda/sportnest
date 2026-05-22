import Image from "next/image";
import React from "react";

const BookingDetailCard = ({ facility }) => {
  return (
    <div className="grid md:flex gap-4 justify-between items-center">
      <Image
        className="w-full md:w-fit rounded-md"
        src={facility.facility_image}
        alt={facility.facility_name}
        width={400}
        height={400}
      />
      <div className="items-center mx-auto justify-center px-2">
        {/* <p>Booking Id: {facility._id}</p> */}
        <h2 className="font-bold text-xl">{facility.facility_name}</h2>
        <p>
          <span className="text-[#647489]">Facility Type: </span>{" "}
          <span className="text-orange-500">{facility.facility_type}</span>
        </p>
        <p>
          <span className="text-[#647489] text-sm">Price: </span>
          <span className="font-bold text-orange-600">
            ${facility.facility_price_per_hour}/ph
          </span>
        </p>
        <p>
          <span className="text-[#647489]">Location: </span>
          <span className="text-orange-500">{facility.facility_location}</span>
        </p>
        <p>
          <span className="text-sm text-[#647489]">Owner Name:</span>{" "}
          <span className="font-bold text-[#647489]">{facility.userName}</span>
        </p>
        <p>
          <span className="text-sm text-[#647489]">Owner Email:</span>{" "}
          <span className="font-bold text-[#647489]">{facility.userEmail}</span>
        </p>
        <p>
          <span className="text-[#647489]">Facility Capacity: </span>
          <span className="text-orange-500 font-bold">
            {facility.facility_capacity}
          </span>
        </p>
        <p>
          <span className="text-[#647489]">Facility Available Slot: </span>
          <span className="text-orange-500 font-bold">
            {facility.facility_available_slot}
          </span>
        </p>
        <p className=" my-1">
          <span className="font-semibold">
            {facility.facility_description}
          </span>{" "}
        </p>
      </div>
    </div>
  );
};

export default BookingDetailCard;
