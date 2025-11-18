import React from "react";
import { Link } from "react-router";

const AppNotFound = () => {
  return (
    <div className="p-20 flex flex-col items-center justify-center gap-4">
      <img src={"/App-Error.png"} alt="" />
      <h1 className="font-semibold text-5xl">OOPS!! APP NOT FOUND</h1>
      <p className="text-xl text-[#627382]">
        The App you are requesting is not found on our system. please try
        another apps
      </p>
      <Link
        to={"/"}
        className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white hover:scale-105 transition ease-in-out rounded-sm font-semibold px-7 py-5"
      >
        Go Back!
      </Link>
    </div>
  );
};

export default AppNotFound;
