import React from "react";

function Left({ toggle }) {
  return (
    <div className={`min-h-screen w-64 absolute bg-black ${toggle}`}>Left</div>
  );
}

export default Left;
