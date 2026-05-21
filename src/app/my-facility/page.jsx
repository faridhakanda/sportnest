import { auth } from '@/lib/auth';
import { getMyAllAddedFacility } from '@/lib/data';
import { headers } from 'next/headers';
import { authClient } from '@/lib/auth-client';
import React from 'react';
import Image from 'next/image';

const MyBooking = async () => {
    
    const session = await auth.api.getSession({
        headers: await headers()
    });
    console.log('my booking page: ', session);
    const userInfo = session?.user;
    console.log('user info in my-booking: ', userInfo);
    
    console.log('user id: ', userInfo.id);
    const userE = userInfo.email;
    const userN = userInfo.name;
    console.log(userE, userN);
    const userId = userInfo.id
    console.log('user id now: ', userId);
    
    const getFacility = await getMyAllAddedFacility(userId);
    console.log('get facility: ', getFacility);
    return (
        <div>
            <h2>My Booking which I added!</h2>
            <h2>{getFacility.length} added in my facility!</h2>
            <div>
                <div className='mx-auto my-4 grid grid-cols-1 md:grid-cols-3 max-w-6xl justify-center'>
                {getFacility.map(facility => 
                    <div key={facility._id} className='bg-slate-100 shadow-md mx-4 rounded-md md:mx-2 my-2 px-2 py-2'>
                        <Image className='w-full' src={facility.facility_image} alt={facility.facility_name} width={400} height={400} />
                        <h2>Facility name: {facility.facility_name}</h2>
                        <p>Price: ${facility.facility_price_per_hour}</p>
                        <p>Owner Id: {facility.userId}</p>
                        <p>Owner Name: {facility.userName}</p>
                        <p>Owner email: {facility.userEmail}</p>
                        <p>{facility.facility_description}</p>
                        {/* <Link className='' href={`/facilities/${facility._id}`}>
                            <Button className={'rounded-md bg-blue-200 mx-2 my-2 text-[#647489]'} variant='outline'>
                                See details...
                            </Button>
                        </Link> */}
                        
                    </div>
                    
                )}
                
            </div>
            </div>
        
        </div>
    );
};

export default MyBooking;