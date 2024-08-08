"use client";

import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import Image from "next/image";
import reddit from "/public/reddit.png";
import Left from "@/components/Left";

function Header() {
  const [visibility, setVisibility] = useState("hidden");

  const visibilityHandler = () => {
    if (visibility == "hidden") setVisibility("undefined");
    else setVisibility("hidden");
  };

  return (
    <div className="relative">
      <div className="flex p-3 justify-between sticky z-50 h-1/6 ">
        <div className="flex items-center h-10 min-w-10 rounded-full  mr-5 ">
          <div
            className="text-2xl cursor-pointer hover:bg-slate-200 rounded-full p-2"
            onClick={visibilityHandler}
          >
            <GiHamburgerMenu />
          </div>
          <div className="flex items-center h-10  min-w-10 rounded-full  mr-5 ">
            <Image src={reddit} alt="logo" className=" w-14 rounded-full" />{" "}
          </div>
        </div>
        <div className="flex items-center justify-stretch h-9  w-1/2 rounded-r-full rounded-l-full  bg-gray-300 mr-5 ">
          <CiSearch />
          <div className="flex h-4/5 w-full  overflow-clip rounded">
            <span>
              r/Frontend is just so beautiful and wonderful and marvelous
            </span>
          </div>
        </div>
        <div className="flex justify-center h-10  min-w-14 rounded-full bg-red-500 mr-5 ">
          <button className=" text-white  font-bold">Log in</button>
        </div>
      </div>
      <Left toggle={visibility} />
    </div>
  );
}

export default Header;
