import BannerPage from "@/components/banner";
import { getAllSportFacilities } from "@/lib/data";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
    const facilities = await getAllSportFacilities();
    //console.log(facilities, 'new project!')
  return (
    <div>
        <h2>SportNest project for frontend!</h2>
        <p>{facilities.length}</p>
        <BannerPage />
        <div>
            <div className='mx-auto my-4 grid grid-cols-1 md:grid-cols-3 max-w-6xl justify-center'>
                {facilities.map(facility => 
                    <div className='bg-purple-200 mx-4 rounded-md md:mx-2 my-2 px-2 py-2' key={facility._id}>
                        <h2>Facility name: {facility.name}</h2>
                        <p>Price: ${facility.price_per_hour}</p>
                        <p>{facility.description}</p>
                        <Link className='' href={`/facilities/${facility._id}`}>
                            <Button className={'rounded-md bg-blue-200 mx-2 my-2 text-[#647489]'} variant='outline'>
                                See details...
                            </Button>
                        </Link>
                        
                    </div>
                )}
            </div>
        </div>
    </div>
  );
}
