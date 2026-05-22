import React from "react";
import AllFacilityCard from "./allFacilityCard";
import Image from "next/image";

const BannerPage = () => {
  const url =
    "https://imgs.search.brave.com/YrzbiSUUnNN03ZBUwV8Ne8tcGKr4mabmCuhhgCp7e4E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTQ5/MTkwNzU2L3Bob3Rv/L3ZhcmlvdXMtc3Bv/cnQtZXF1aXBtZW50/cy1vbi1ncmFzcy5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/czBMel9rMFZxXzlQ/NkpCRVRCTXRMc0sw/bFNLRUhnNFRucXo5/S2xSQ1NIQT0";
  return (
    <div className="mx-auto z-1 my-2 rounded-md">
      <div
        id="banner"
        className="mx-auto mb-4 grid grid-cols-1  max-w-6xl justify-center"
      >
        <div className="  shadow-sm mx-auto rounded-md md:mx-2 my-16">
          {/* px-2 py-2 was added in upper div class */}

          <h2 className="font-bold text-center mt-8 items-center text-3xl italic md:text-4xl bg-linear-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            <span className="text-yellow-700">S</span>port
            <span className="text-pink-700">N</span>est
          </h2>
          <p className="text-yellow-400 my-2 font-bold text-center">We are provide excellent sport facility for our lovely client.</p>
            <div className="flex text-center mx-auto justify-center gap-4 font-bold md:text-2xl text-white italic">
                <h2>Football</h2>
                <h2>Cricket</h2>
                <h2>Badminton</h2>
                <h2>Tennis</h2>
                <h2>Hockey</h2>
            </div>
            <p className="text-center text-white my-8">Physical activity make you body perfect.</p>
        </div>
        {/* <div className="absolute mt-28 ml-12 z-20 bg-red-500 justify-center mx-auto text-center items-center">
          SportNest
        </div> */}
      </div>
    </div>
  );
};

export default BannerPage;
