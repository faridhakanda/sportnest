import { getFacilityDetailsById } from '@/lib/data';
import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FacilityDetailsById = async({ params }) => {
    const { id } = await params;
    console.log('facility id: ', id);
    //const facilityDetails = await getFallbackRouteParams()
    const facility = await getFacilityDetailsById(id);
    console.log(facility, 'facility details!');
    return (
        <div className='mx-auto'>
            <div className='bg-blue-200 w-96 mx-auto my-2  rounded-md'>
                <Image className='rounded-ss-md rounded-se-md' src={facility.facility_image} alt={facility.facility_name} width={400} height={400} />
                <div className='px-2 py-2 '>
                    
                    <h2 className='font-bold text-xl'>{facility.facility_name}</h2>
                    <p>Facility Type: {facility.facility_type}</p>
                    <p>Location: {facility.facility_location}</p>
                    <p>Owner Name: {facility.userName}</p>
                        <p>Owner email: {facility.userEmail}</p>
                    <p>
                        Facility available slots: 
                        {facility.facility_available_slot}
                    </p>
                    <p>Description: {facility.facility_description}</p>
                    <p>Facility capacity: {facility.facility_capacity}</p>
                </div>
                <Link className='' href={'/'}>
                    <Button className={'rounded-md'} variant='outline'>Go to Home</Button>
                </Link>
            
            </div>
            
        </div>
    );
};

export default FacilityDetailsById;