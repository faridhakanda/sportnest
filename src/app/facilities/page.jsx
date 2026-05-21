import { authClient } from '@/lib/auth-client';
import { getAllSportFacilities } from '@/lib/data';
import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Facilities = async () => {
    const facilities = await getAllSportFacilities();
    console.log(facilities);
    //const { name, price, } = facilities;
    const session = await authClient.getSession()
    console.log(session, 'session in page!');
    return (
        <div className=''>
            {/* <div className='mx-auto my-4 grid grid-cols-3 max-w-6xl justify-center'>
                {facilities.map(facility => 
                    <div className='bg-purple-200 m-1' key={facility._id}>
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
            </div> */}
            <h2 className='mx-auto w-3/4 pl-1 md:px-6 pt-4'>All Facilities</h2>
            {facilities.length > 0 ? 
                <div className='mx-auto my-4 grid grid-cols-1 md:grid-cols-3 max-w-6xl justify-center'>
                {facilities.map(facility => 
                    <div className='bg-slate-100 shadow-md mx-4 rounded-md md:mx-2 my-2 px-2 py-2' key={facility._id}>
                        <Image src={facility.facility_image} alt={facility.facility_name} width={400} height={400} />
                        <h2>Facility name: {facility.facility_name}</h2>
                        <p>Price: ${facility.facility_price_per_hour}</p>
                        <p>Owner Name: {facility.userName}</p>
                        <p>Owner email: {facility.userEmail}</p>
                        <p>{facility.facility_description}</p>
                        <Link className='' href={`/facilities/${facility._id}`}>
                            <Button className={'rounded-md bg-blue-200 mx-2 my-2 text-[#647489]'} variant='outline'>
                                See details...
                            </Button>
                        </Link>
                        
                    </div>
                    
                )}
                
            </div>
            :
            <div>
                <h2>Not Available any of Facility!</h2>
            </div>
            }
            
        </div>
    );
};

export default Facilities;