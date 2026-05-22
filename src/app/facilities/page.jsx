import AllFacilityCard from "@/components/allFacilityCard";
// import BookCard from "@/components/bCard";
// import { authClient } from "@/lib/auth-client";
import { getAllSportFacilities } from "@/lib/data";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Facilities = async () => {
  const facilities = await getAllSportFacilities();
  //console.log(facilities);
  //const { name, price, } = facilities;
//   const session = await authClient.getSession();
//   console.log(session, "session in page!");
  return (
    <div className="">
      <h2 className="mx-auto text-center font-bold text-2xl pl-1 mt-4 text-[#647489] ">All Facilities</h2>
      {facilities.length > 0 ? (
              <div className="mx-auto mb-4 grid grid-cols-1  max-w-6xl justify-center">
                {facilities.map((facility) => (
                  <div key={facility._id}>
                   
                    <div className="mx-auto">
                      <div className="mx-auto mb-4 grid grid-cols-1  max-w-6xl justify-center">
                          <div className="bg-slate-100  shadow-sm mx-4 rounded-md md:mx-2 my-2 px-2 py-2">
                              <AllFacilityCard facility={facility} />
                              <div className="flex my-2 justify-between">
                                <Link className="mx-auto w-full md:w-96" href={`/facilities/${facility._id}`}>
                                    <Button
                                    className={"rounded-md w-full md:w-96 bg-cyan-500  my-2 text-white font-bold text-lg"}
                                    variant="outline"
                                    >
                                    Booking Now
                                    </Button>
                                </Link>
                                  {/* <MyFacilityDelete userId={facility.userId} />
                                  <MyFacilityEdit facility={facility} /> */}
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

export default Facilities;
