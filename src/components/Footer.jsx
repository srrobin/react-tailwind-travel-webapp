import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="w-full dark:border-t  dark:border-slate-800   py-16">
      <div className="max-w-[1240px] mx-auto px-4 flex flex-col ">
        <div className="sm:flex justify-between items-center text-center">
          <h2 className=" uppercase text-slate-900 dark:text-white">travel.</h2>
          <div className="flex justify-between w-full  sm:max-w-[280px] my-4">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaInstagram className="icon" />
            <FaPinterest className="icon" />
            <FaYoutube className="icon" />
          </div>
        </div>
        <div className="flex justify-between items-center ">
          <ul className="sm:flex text-slate-500 dark:text-slate-400">
            <li>Home</li>
            <li>Destinations</li>
            <li>Travel</li>
            <li>View</li>
            <li>Book</li>
          </ul>
          <ul className="sm:flex text-slate-500 dark:text-slate-400">
            <li>Home</li>
            <li>Destinations</li>
            <li>Travel</li>
            <li>View</li>
            <li>Book</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
