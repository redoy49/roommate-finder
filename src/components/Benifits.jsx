import React from "react";
import benifits from "../assets/benifits.jpg";
import { CiCircleCheck } from "react-icons/ci";

const Benifits = () => {
  return (
    <div className="my-8 md:my-24">
      <div className="md:flex justify-center items-center gap-6">
        <div className="md:w-1/2">
          <img
            className="w-full h-96 object-cover p-2 rounded-xl"
            src={benifits}
            alt=""
          />
        </div>
        <div className="md:w-1/2 p-2 flex-1">
          <h2 className="text-xl md:text-3xl font-bold mb-6">
            Why use RoomMate?
          </h2>
          <p className="mb-6">
            Roommate is a one-stop destination for anyone looking out for
            roommates, flatmates, co-living spaces or PGs.
          </p>
          <div className="space-y-1 mb-6">
            <p className="flex items-center gap-1">
              <CiCircleCheck className="text-violet-400" size={18} />
              Efficient Matching Based on Preferences
            </p>
            <p className="flex items-center gap-1">
              <CiCircleCheck className="text-violet-400" size={18} />
              Verified Profiles and Safety Features
            </p>
            <p className="flex items-center gap-1">
              <CiCircleCheck className="text-violet-400" size={18} />
              Location-based search
            </p>
            <p className="flex items-center gap-1">
              <CiCircleCheck className="text-violet-400" size={18} />
              Saves time and effort
            </p>
          </div>
          <button className="btn rounded-full bg-violet-600 h-12 px-6 text-white">
            Find Roommate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Benifits;
