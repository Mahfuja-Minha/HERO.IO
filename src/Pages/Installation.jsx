import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import useApps from "../hooks/useApps";

const Installation = () => {
  const [installedlist, setInstalledlist] = useState([]);
  const { loading } = useApps();

  const [sortInstalledApp, setSortInstalledApp] = useState("none");

  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("installedlist"));
    if (savedList) setInstalledlist(savedList);
  }, []);

   if (loading) {
  return (
    <div className="flex flex-col items-center py-10 space-y-3">
      <span className="loading loading-spinner loading-md"></span>
      <p className="text-xl font-semibold text-[#627382]">Loading...</p>
    </div>
  );
}

  function parseDownloads(value) {
    if (!value) return 0;
    const num = parseFloat(value);

    if (value.toUpperCase().includes("B")) return num * 1_000_000_000;
    if (value.toUpperCase().includes("M")) return num * 1_000_000;
    if (value.toUpperCase().includes("K")) return num * 1_000;
    return num;
  }

  const sortedItem = (() => {
    if (sortInstalledApp === "app-asc") {
      return [...installedlist].sort(
        (a, b) => parseDownloads(a.downloads) - parseDownloads(b.downloads)
      );
    } else if (sortInstalledApp === "app-desc") {
      return [...installedlist].sort(
        (a, b) => parseDownloads(b.downloads) - parseDownloads(a.downloads)
      );
    } else {
      return installedlist;
    }
  })();

  const handleRemove = (id, title) => {
    const existingList = JSON.parse(localStorage.getItem("installedlist"));
    let updatedList = existingList.filter((a) => a.id !== id);
    setInstalledlist(updatedList);

    localStorage.setItem("installedlist", JSON.stringify(updatedList));
    toast(`${title} uninstalled from your device`);
  };
  return (
    <div className="text-center p-20 bg-gray-100">
      <div className="space-y-4">
        <h1 className="font-bold text-3xl md:text-5xl">Your Installed Apps</h1>
        <p className="md:text-xl text-[#627382]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="flex justify-between py-5 items-center">
        <h1 className="font-semibold text-2xl">
          {" "}
          {sortedItem.length} Apps Found
        </h1>

        <label className="form-control max-w-xs">
          <select
            className="select select-bordered"
            value={sortInstalledApp}
            onChange={(e) => setSortInstalledApp(e.target.value)}
          >
            <option className="text-[#627382]" value="none">
              Sort By Size
            </option>
            <option className="text-[#627382]" value="app-asc">
              Low-&gt;High
            </option>
            <option className="text-[#627382]" value="app-desc">
              High-&gt;Low
            </option>
          </select>
        </label>
      </div>

      <div className="space-y-4 ">
        {sortedItem.map((a) => (
          <div className="shadow-sm flex flex-col sm:flex-row justify-between items-center p-4 bg-white rounded-sm gap-2">
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div>
                <img className="w-30" src={a.image} alt="Movie" />
              </div>
              <div className="space-y-4">
                <h2 className="card-title">{a.title}</h2>
                <div className="items-center flex gap-4 justify-center">
                  <div className="text-[#00D390] font-medium flex gap-1 items-center justify-center">
                    <img
                      src={"/icon-downloads.png"}
                      className="w-4 h-4"
                      alt=""
                    />
                    <p>{a.downloads}</p>
                  </div>
                  <div className=" text-[#FF8811] font-medium flex gap-1 items-center justify-center">
                    <img
                      src={"/icon-ratings.png"}
                      className="w-4 h-4"
                      alt=""
                    />
                    <p>{a.ratingAvg}</p>
                  </div>
                  <div>
                    <p className="text-[#627382]">{a.size} MB</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <button
                onClick={() => handleRemove(a.id, a.title)}
                className="btn bg-[#00D390] text-white font-semibold"
              >
                Uninstall
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
// console.log("Hello");
export default Installation;
