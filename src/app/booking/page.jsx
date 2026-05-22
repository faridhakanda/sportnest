// import BookCard from "@/components/bCard";
// import BookingCard from "@/components/bookingCard";
import { BookingDelete } from "@/components/bookingDel";
import BookingDetailCard from "@/components/bookingDetailCard";
//import FacilityCard from "@/components/card";
import { auth } from "@/lib/auth";
import { getMyBookingFacility } from "@/lib/data";
import { Button } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Booking = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  console.log("my booking facility: ", session);
  const userInfo = session?.user;
  const userId = userInfo.id;
  console.log(userId, "user id of booking page!");
  const facilities = await getMyBookingFacility(userId);
  console.log(facilities, "my booking in booking page!");
  return (
    <div>
      <h2 className="font-bold mt-4 text-2xl text-[#647489] text-center">
        My Booking Facility
      </h2>

      

      {facilities.length > 0 ? (
        <div className="mx-auto mb-4 grid grid-cols-1  max-w-6xl justify-center">
          {facilities.map((facility) => (
            <div key={facility._id}>
             
              <div className="mx-auto">
                <div className="mx-auto mb-4 grid grid-cols-1  max-w-6xl justify-center">
                    <div className="bg-slate-100  shadow-sm mx-4 rounded-md md:mx-2 my-2 px-2 py-2">
                        <BookingDetailCard facility={facility} />
                        <div className="flex my-2 justify-between">
                            <BookingDelete bookingId={facility._id} />
                        </div>
                    </div>
                </div>
            </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="mx-auto my-auto flex justify-center items-centerd">
          <h2 className="font-bold text-xl my-8">
            Not found any of your added facility!
          </h2>
        </div>
      )}
    </div>
  );
};

export default Booking;
