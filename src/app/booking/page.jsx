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
      <h2 className="font-bold mt-4 text-2xl text-[#647489] text-center">My Booking Facility</h2>
      
      <div className="">
        
        
        {facilities.length > 0 ? (
                  <div className="mx-auto mb-4 grid grid-cols-1  max-w-6xl justify-center">
                    {facilities.map((facility) => (
                      <div
                        key={facility._id}
                        className="bg-slate-100 shadow-md mx-4 rounded-md md:mx-2 my-2 px-2 py-2"
                      >
                        <div className="grid md:flex gap-4 justify-between items-center">
                          <Image
                            className="w-full md:w-fit"
                            src={facility.facility_image}
                            alt={facility.facility_name}
                            width={400}
                            height={400}
                          />
                          <div className="items-center mx-auto justify-center">
                            <h2>Facility name: {facility.facility_name}</h2>
                            <p>Price: ${facility.facility_price_per_hour}</p>
                            <p>Owner Id: {facility.userId}</p>
                            <p>Owner Name: {facility.userName}</p>
                            <p>Owner email: {facility.userEmail}</p>
                            <p>{facility.facility_description}</p>
                          </div>
                        </div>
        
                        <div className="flex justify-between">
                          <Button
                            className={
                              "rounded-md bg-red-500 mx-auto w-full md:w-96 my-2 text-white font-bold text-lg"
                            }
                            variant="outline"
                          >
                            Delete
                          </Button>
                          {/* <Button
                            className={
                              "rounded-md w-24 bg-cyan-500 mx-2 my-2 text-white font-bold text-lg"
                            }
                            variant="outline"
                          >
                            Edit
                          </Button> */}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div>
                    <h2>Not found any of your added facility!</h2>
                  </div>
                )}
      </div>
    </div>
  );
};

export default Booking;
