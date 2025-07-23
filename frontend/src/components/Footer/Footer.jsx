import React from "react";

const Footer = () => {
  return (
    <div className="text-white md:px-10">
      <div className="py-20">
        <p className="">Developed by me</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
          doloribus.
        </p>
      </div>
      <p className="pb-5">Questions? Contact me</p>
      <div className="grid grid-cols-2 md:grid-cols-4 pb-10 text-sm max-w-5xl">
        <ul className="flex flex-col space-y-2">
          <li>FAQ</li>
          <li>Invetor relations</li>
          <li>Privicy</li>
          <li>Speed Test</li>
        </ul>
        <ul className="flex flex-col space-y-2">
          <li>Help Center</li>
          <li>Jobs</li>
          <li>Cookies Preferences</li>
          <li>Legal Notices</li>
        </ul>
        <ul className="flex flex-col space-y-2">
          <li>Account</li>
          <li>Ways To Watch</li>
          <li>Corporate information</li>
          <li>Only On Netflix</li>
        </ul>
        <ul className="flex flex-col space-y-2">
          <li>Media Center</li>
          <li>Terms Of Use</li>
          <li>Contect Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
