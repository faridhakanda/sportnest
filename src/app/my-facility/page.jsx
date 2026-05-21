import { auth } from "@/lib/auth";
import { getMyAllAddedFacility } from "@/lib/data";
import { headers } from "next/headers";
import { authClient } from "@/lib/auth-client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";

const MyBooking = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  //console.log('my booking page: ', session);
  const userInfo = session?.user;
  // console.log('user info in my-booking: ', userInfo);

  // console.log('user id: ', userInfo.id);
  // const userE = userInfo.email;
  // const userN = userInfo.name;
  // console.log(userE, userN);
  const userId = userInfo.id;
  //console.log('user id now: ', userId);

  const getFacility = await getMyAllAddedFacility(userId);
  //console.log('get facility: ', getFacility);
  return (
    <div>
      <h2 className="font-bold mt-4 text-[#647489] text-center text-2xl">My Added Facility</h2>
      <div className="mx-auto justify-center">
        {getFacility.length > 0 ? (
          <div className="mx-auto mb-4 grid grid-cols-1  max-w-6xl justify-center">
            {getFacility.map((facility) => (
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
                      "rounded-md bg-red-500 mx-2 my-2 text-white font-bold text-lg"
                    }
                    variant="outline"
                  >
                    Delete
                  </Button>
                  <Button
                    className={
                      "rounded-md w-24 bg-cyan-500 mx-2 my-2 text-white font-bold text-lg"
                    }
                    variant="outline"
                  >
                    Edit
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mx-auto text-center  my-auto justify-center items-center">
            <h2 className="text-2xl my-auto mx-auto  text-center justify-center items-center font-bold">Not found any of your added facility!</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBooking;
