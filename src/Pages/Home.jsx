import React from "react";
import useApps from "../hooks/useApps";
import AppCard from "../Components/AppCard";
import { Link } from "react-router";

const Home = () => {
  const { apps, loading, error } = useApps();

  if (loading) {
    return (
      <div className="flex flex-col items-center py-10 space-y-3">
        <span className="loading loading-spinner loading-md"></span>
        <p className="text-xl font-semibold text-[#627382]">Loading...</p>
      </div>
    );
  }

  const featuredApp = apps.slice(0, 8);
  return (
    <div className="bg-gray-100">
      {/* Banner section */}
      <div className="md:px-20 pt-10 md:pt-20 w-11/12 md:w-10/12 mx-auto text-center gap-5 flex flex-col items-center justify-center">
        <div className="space-y-10">
          <div className="space-y-4">
            <h1 className="font-bold text-4xl md:text-7xl">
              We Build <br />
              <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                Productive{" "}
              </span>
              Apps
            </h1>
            <p className="md:text-[20px] text-[#627382]">
              At HERO.IO , we craft innovative apps designed to make everyday
              life simpler, smarter, and more exciting. <br />
              Our goal is to turn your ideas into digital experiences that truly
              make an impact.
            </p>
          </div>
          <div className="flex gap-5 items-center justify-center ">
            <Link
              to={"https://play.google.com/"}
              target="#"
              className=" flex gap-1 font-semibold text-xl py-3 px-6 rounded-sm shadow-sm border border-gray-200 hover:scale-105 transition ease-in-out"
            >
              <img
                className="w-8 h-8"
                src={"/google-play-store.png"}
                alt=""
              />{" "}
              Google Play
            </Link>
            <Link
              to={"https://www.apple.com/app-store/"}
              target="#"
              className=" flex gap-1 font-semibold text-xl py-3 px-6 rounded-sm shadow-sm border border-gray-200 hover:scale-105 transition ease-in-out"
            >
              <img className="w-8 h-8" src={"/app-store.webp"} alt="" />
              App Store
            </Link>
          </div>
          <div>
            <img src={"/hero.png"} alt="" />
          </div>
        </div>
      </div>

      <div className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] p-10 md:p-20 flex flex-col gap-10 items-center justify-center">
        <h2 className="font-bold text-4xl md:text-5xl text-white text-center">
          Trusted by Millions, Built for You
        </h2>
        <div className="flex gap-14 flex-col md:flex-row">
          <div className="space-y-4">
            <p className="text-white text-center opacity-80">Total Downloads</p>
            <p className="font-extrabold text-5xl md:text-6xl text-white text-center">
              29.6M
            </p>
            <p className="text-white opacity-80">21% More Than Last Month</p>
          </div>

          <div className="space-y-4">
            <p className="text-white text-center opacity-80">Total Reviews</p>
            <p className="font-extrabold text-5xl md:text-6xl text-white text-center">
              906K
            </p>
            <p className="text-white opacity-80">46% More Than Last Month</p>
          </div>

          <div className="space-y-4">
            <p className="text-white text-center opacity-80">Active Apps</p>
            <p className="font-extrabold text-5xl md:text-6xl text-white text-center">
              132+
            </p>
            <p className="text-white opacity-80">31 More Will Launch</p>
          </div>
        </div>
      </div>

      {/* Card */}
      <div className="flex flex-col items-center justify-center gap-10 p-15 md:p-20">
        <div className="space-y-4 text-center">
          <h1 className="font-bold text-4xl sm:text-5xl">Trending Apps</h1>
          <p className="text-xl text-[#627382]">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredApp.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
        <Link to={"/app"}>
          <button className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white hover:scale-105 transition ease-in-out rounded-sm font-semibold px-7 py-5">
            Show All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
