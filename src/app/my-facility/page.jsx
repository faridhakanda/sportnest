import { auth } from "@/lib/auth";
import { getMyAllAddedFacility } from "@/lib/data";
import { headers } from "next/headers";
import { authClient } from "@/lib/auth-client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";
import { MyFacilityDelete } from "@/components/myFacilityDel";
import { MyFacilityEdit } from "@/components/myFacilityEdit";
// import FacilityCard from "@/components/card";
// import MyFacilityCard from "@/components/myFacilityCard";
// import BookCard from "@/components/bCard";
import AllFacilityCard from "@/components/allFacilityCard";

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
      


      
      {/* facility details card like  */}
      {getFacility.length > 0 ? (
        <div className="mx-auto mb-4 grid grid-cols-1  max-w-6xl justify-center">
          {getFacility.map((facility) => (
            <div key={facility._id}>
             
              <div className="mx-auto">
                <div className="mx-auto mb-4 grid grid-cols-1  max-w-6xl justify-center">
                    <div className="bg-slate-100  shadow-sm mx-4 rounded-md md:mx-2 my-2 px-2 py-2">
                        {/* <BookCard facility={facility} /> */}
                        <AllFacilityCard facility={facility} />
                        <div className="flex my-2 justify-between">
                            <MyFacilityDelete userId={facility.userId} />
                            <MyFacilityEdit facility={facility} />
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

export default MyBooking;
