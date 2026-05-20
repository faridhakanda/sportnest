import { getAllSportFacilities } from '@/lib/data';
import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const Facilities = async () => {
    const facilities = await getAllSportFacilities();
    //console.log(facilities);
    //const { name, price, } = facilities;
    return (
        <div>
            <div className='mx-auto my-4 grid grid-cols-3 max-w-6xl justify-center'>
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
            </div>
        </div>
    );
};

export default Facilities;