import AllFacilityCard from "@/components/allFacilityCard";
import BannerPage from "@/components/banner";
import { getAllSportFacilities, getLimitedFacilities } from "@/lib/data";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const facilities = await getLimitedFacilities();
  console.log(facilities, "new project!");
  return (
    <div className="mx-auto justify-center">
      <BannerPage />
      
      {/* All Facility */}
      <div className="flex justify-between  mx-2 rounded-md px-2 items-center">
        <h2 className="text-xl font-bold text-[#647489]">Explore more facility</h2>
        <Link href={'/facilities'}>
            <Button className={'rounded-md font-bold'}>Explore More</Button>
        </Link>
        
      </div>
      
      {facilities.length > 0 ? (
        <div className="mx-auto mb-4 grid grid-cols-1  max-w-6xl justify-center">
          
          {facilities.map((facility) => (
            <div key={facility._id}>
              <div className="mx-auto">
                <div className="mx-auto mb-4 grid grid-cols-1  max-w-6xl justify-center">
                  <div className="bg-slate-100  shadow-sm mx-4 rounded-md md:mx-2 my-2 px-2 py-2">
                    <AllFacilityCard facility={facility} />
                    <div className="flex my-2 justify-between">
                      <Link
                        className="mx-auto w-full md:w-96"
                        href={`/facilities/${facility._id}`}
                      >
                        <Button
                          className={
                            "rounded-md w-full md:w-96 bg-cyan-500  my-2 text-white font-bold text-lg"
                          }
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

      {/* <div>
        <div className="mx-auto my-4 grid grid-cols-1 md:grid-cols-3 max-w-6xl justify-center">
          {facilities.map((facility) => (
            <div
              className="bg-purple-200 mx-4 rounded-md md:mx-2 my-2 px-2 py-2"
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
              <p>Owner Name: {facility.userName}</p>
              <p>Owner email: {facility.userEmail}</p>
              <p>{facility.facility_description}</p>
              <Link className="" href={`/facilities/${facility._id}`}>
                <Button
                  className={"rounded-md bg-blue-200 mx-2 my-2 text-[#647489]"}
                  variant="outline"
                >
                  See details...
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
}

