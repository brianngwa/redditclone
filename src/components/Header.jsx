import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import Image from "next/image";
import reddit from "/public/reddit.png";

function Header() {
  return (
    <div className="flex p-3 ">
      <div className="flex items-center justify-start h-10 min-w-10 rounded-full bg-gray-300 mr-5 ">
        <div className="text-2xl">
          <GiHamburgerMenu />
        </div>
        <div className="flex items-center h-10  min-w-10 rounded-full bg-gray-300 mr-5 ">
          <Image src={reddit} alt="logo" className=" w-14 rounded-full" />{" "}
        </div>
      </div>
      <div className="flex items-center justify-stretch h-10 w-1/2 rounded-r-full rounded-l-full  bg-gray-300 mr-5 ">
        <CiSearch />
        <div className="flex h-4/5 w-full  overflow-hidden rounded">
          <span>
            r/Frontend is just so beautiful and wonderful and marvelous
          </span>
        </div>
      </div>
      <div className="flex justify-end h-10  min-w-10 rounded-full bg-gray-300 mr-5"></div>
    </div>
  );
}

export default Header;
