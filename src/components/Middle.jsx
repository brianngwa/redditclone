import React from "react";

function Middle() {
  return (
    <div className="flex flex-col  p-4 m-x ">
      <div className="flex justify-between">
        <div className="flex">
          <div className="h-10 w-10 rounded-full bg-gray-300 "></div>
          <div className="flex flex-col">
            <span>Frontend</span>
            <span>Username</span>
          </div>
        </div>
        <div className="h-10 w-10 rounded-full bg-gray-300 "></div>
      </div>
      <div className=" mb-5">
        <h1 className=" font-bold">
          My name is Brian and I'm a hardworking guy. What do I need to become
          great. What does it take to be sucessful?{" "}
        </h1>
        <p>Hi guys, </p>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.
        </p>
      </div>
      <div className="flex">
        <div className="h-10  min-w-10 rounded-full bg-gray-300 mr-5 "></div>
        <div className="h-10  min-w-10 rounded-full bg-gray-300 mr-5 "></div>
        <div className="h-10  min-w-10 rounded-full bg-gray-300 mr-5 "></div>
        <div className="h-10  min-w-10 rounded-full bg-gray-300 mr-5 "></div>
      </div>
    </div>
  );
}

export default Middle;
