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
      <h2>Booking for join sport!</h2>
      <p>My booking length is: {facilities.length}</p>

      <div className="">
        <h2 className="mx-auto w-3/4 pl-1 md:px-6 pt-4">All Facilities</h2>
        {facilities.length > 0 ? (
          <div className="mx-auto my-4 grid grid-cols-1 md:grid-cols-3 max-w-6xl justify-center">
            {facilities.map((facility) => (
              <div
                className="bg-slate-100 shadow-md mx-4 rounded-md md:mx-2 my-2 px-2 py-2"
                key={facility._id}
              >
                <Image
                  className="w-full"
                  src={facility.facility_image}
                  alt={facility.facility_name}
                  width={400}
                  height={400}
                />
                <h2>Facility name: {facility.facility_name}</h2>
                <p>Price: ${facility.facility_price_per_hour}</p>
                <p>Owner Id: {facility.userId}</p>
                <p>Owner Name: {facility.userName}</p>
                <p>Owner email: {facility.userEmail}</p>
                <p>{facility.facility_description}</p>
                {/* <Link className="w-full">
                  <Button
                    className={
                      "rounded-md w-full bg-red-500  mx-auto my-2 text-white font-bold text-lg"
                    }
                    variant="outline"
                  >
                    Delete
                  </Button>
                </Link> */}
                <Button
                    className={
                      "rounded-md w-full bg-red-500  mx-auto my-2 text-white font-bold text-lg"
                    }
                    variant="outline"
                  >
                    Delete
                  </Button>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <h2>Not Available any of Facility!</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Booking;
