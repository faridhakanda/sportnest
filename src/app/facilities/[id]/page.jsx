import { getFacilityDetailsById } from '@/lib/data';
import { Button } from '@heroui/react';
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
            <h2>facility id: {id}</h2>
            <div className='bg-blue-200 w-96 mx-auto my-2'>
                <h2>Facility name: {facility.name}</h2>
                <p>Facility Type: {facility.facility_type}</p>
                <p>Location: {facility.location.address}</p>
                <div>
                    Facility available slots: 
                    {facility.available_slots.map((slot, index) =>
                        <div key={index}>{slot}</div>
                    )}
                </div>
                <p>Facility booking count: {facility.booking_count}</p>
                <p>Facility capacity: {facility.capacity}</p>
            </div>
            <Link className='' href={'/'}>
                <Button className={'rounded-md'} variant='outline'>Go to Home</Button>
            </Link>
        </div>
    );
};

export default FacilityDetailsById;