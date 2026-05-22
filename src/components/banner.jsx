import React from 'react';
import AllFacilityCard from './allFacilityCard';

const BannerPage = () => {
    return (
        // <div className='mx-auto items-center justify-center'>
        //     <h2>Banner Page!</h2>
        //     <h2 className='bg-gradient-to-l from-[#9514FA] to-[#4F39F6] text-3xl font-bold bg-clip-text text-transparent'>SportNest</h2>
        // </div>
        <div className="mx-auto">
                <div className="mx-auto mb-4 grid grid-cols-1  max-w-6xl justify-center">
                  <div className="bg-slate-100  shadow-sm mx-4 rounded-md md:mx-2 my-2 px-2 py-2">
                        

                            <h2>Something added in banner page!</h2>
                        {/* <AllFacilityCard facility={facility} />
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
                        </Link> */}
                        {/* <MyFacilityDelete userId={facility.userId} />
                                  <MyFacilityEdit facility={facility} /> */}
                    </div>
                  </div>
                
            </div>
    );
};

export default BannerPage;