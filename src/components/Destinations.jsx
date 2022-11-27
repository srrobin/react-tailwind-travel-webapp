import React from "react";
import borabora from "../assets/borabora.jpg";
import borabora2 from "../assets/borabora2.jpg";
import keywest from "../assets/keywest.jpg";
import maldives from "../assets/maldives.jpg";
import maldives3 from "../assets/maldives3.jpg";
const Destinations = () => {
  return (
    <div className="max-w-[1240px] mx-auto my-16 px-4 text-center">
      <h1 className="capitalize text-slate-700 dark:text-gray-100">all inclusive resort</h1>
      <p className="mb-4">Lorem ipsum dolor sit amet consectetur.</p>
      <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4">
        <img
          className="w-full h-full object-cover  col-span-2 md:col-span-3 row-span-2"
          src={borabora}
          alt=""
        />
        <img className="w-full h-full object-cover " src={borabora2} alt="" />
        <img className="w-full h-full object-cover " src={keywest} alt="" />
        <img className="w-full h-full object-cover " src={maldives} alt="" />
        <img className="w-full h-full object-cover " src={maldives3} alt="" />
      </div>
    </div>
  );
};

export default Destinations;
