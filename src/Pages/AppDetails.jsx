import React, { useState } from "react";
import { useParams } from "react-router";
import useApps from "../hooks/useApps";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { toast } from "react-toastify";
import AppNotFound from "./AppNotFound";

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading, error } = useApps();

  const [isInstalled, setIsInstalled] = useState(false);

  // const local = localStorage.getItem(install)

  if (loading) {
  return (
    <div className="flex flex-col items-center py-10 space-y-3">
      <span className="loading loading-spinner loading-md"></span>
      <p className="text-xl font-semibold text-[#627382]">Loading...</p>
    </div>
  );
}

  const app = apps.find((a) => String(a.id) === id);

  if (!app) {
    return <AppNotFound />;
  }

  const { title, companyName, image, description, ratingAvg, downloads, reviews, size } =
    app;

  const existingList = JSON.parse(localStorage.getItem("installedlist")) || [];
  const handleAddToinstalled = () => {
    let updatedList = [];
    if (existingList) {
      const isDuplicate = existingList.some((a) => a.id === app.id);
      if (isDuplicate) {
        return;
      }
      updatedList = [...existingList, app];
    } else {
      updatedList.push(app);
    }
    localStorage.setItem("installedlist", JSON.stringify(updatedList));

    setIsInstalled(true);
    toast.success("App Installed Successfully!");
  };

  return (
    <div className="bg-gray-100 space-y-10 p-20">
      <div className="flex gap-10 flex-col md:flex-row">
        <div className=" drop-shadow-lg">
          <img className="h-80 w-80" src={image} alt="" />
        </div>
        <div className=" space-y-8">
          <div className="space-y-2">
            <h1 className="text-[#001931] text-3xl font-bold">{title}</h1>
            <p className="text-xl text-[#627382]">Developed by <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-semibold">{companyName}</span></p>
          </div>
          <div className="text-[#00193120] border">
            {/* <hr className="text-[#00193120]" /> */}
          </div>
          <div className="flex gap-6 ">
            <div className="space-y-2">
              <img src={"/icon-downloads.png"} className="w-10" alt="" />
              <p className="text-[#001931] opacity-80">Downloads</p>
              <h1 className="text-[#001931] text-3xl md:text-[40px] font-extrabold">
                {downloads}
              </h1>
            </div>
            <div className="border text-[#00193110]"></div>
            <div className="space-y-2">
              <img src={"/icon-ratings.png"} className="w-10" alt="" />

              <p className="text-[#001931] opacity-80">Average Ratings</p>
              <h1 className="text-[#001931] text-3xl md:text-[40px] font-extrabold">
                {ratingAvg}
              </h1>
            </div>
            <div className="border text-[#00193110]"></div>
            <div className=" space-y-2">
              <img src={"/icon-review.png"} className="w-10" alt="" />
              <p className="text-[#001931] opacity-80">Total Reviews</p>
              <h1 className="text-[#001931] text-3xl md:text-[40px] font-extrabold">
                {reviews}
              </h1>
            </div>
          </div>
          <div>
            <button
              className="px-5 py-3.5 text-white rounded-sm font-semibold text-xl bg-[#00D390] cursor-pointer  hover:scale-105 transition ease-in-out"
              onClick={handleAddToinstalled}
              disabled={existingList.some((a) => a.id === app.id)}
            >
              {existingList.some((a) => a.id === app.id)
                ? "Installed"
                : `Install Now (${size} MB)`}
            </button>
          </div>
        </div>
      </div>
      <hr className="text-[#00193120]" />

      {/* chart */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold">Ratings</h3>
        <div className="rounded-xl h-70">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={app.ratings} layout="vertical">
              <XAxis type="number" axisLine={false} tickLine={false} />
              <YAxis
                dataKey="name"
                type="category"
                axisLine={false}
                tickLine={false}
                reversed
              />
              <Tooltip cursor={false} />
              <Bar dataKey="count" fill="#FF8811" barSize={25} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <hr className="text-[#00193120] " />

      <div className="space-y-6">
        <h1 className="text-2xl font-semibold">Description</h1>
        <p className="text-[#627382] text-xl">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
