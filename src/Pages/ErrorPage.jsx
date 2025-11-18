import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="p-20 flex flex-col items-center justify-center gap-4">
      <img src={"/error-404.png"} alt="" />
      <h1 className="font-semibold text-5xl">Oops, page not found!</h1>
      <p className="text-xl text-[#627382]">
        The page you are looking for is not available.
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

export default ErrorPage;
