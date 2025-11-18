import React, { useState } from "react";
import AppCard from "../Components/AppCard";
import useApps from "../hooks/useApps";
import AppNotFound from "./AppNotFound";
import { Search } from "lucide-react";

const App = () => {
  const { apps, loading } = useApps();
  const [search, setSearch] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);

  if (loading) {
    return (
      <div className="flex flex-col items-center py-10 space-y-3">
        <span className="loading loading-spinner loading-md"></span>
        <p className="text-xl font-semibold text-[#627382]">Loading...</p>
      </div>
    );
  }

  const term = search.trim().toLocaleLowerCase();
  const searchedApp = term
    ? apps.filter((app) => app.title.toLocaleLowerCase().includes(term))
    : apps;

  // if (searchedApp.length === 0) {
  //   return <AppNotFound />;
  // }

  return (
    <div className="p-15 md:p-20 bg-gray-100">
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-5xl font-bold text-[#001931]">
          Our All Applications
        </h1>
        <p className="text-xl text-[#627382]">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-0 justify-between pb-4 pt-10 items-center ">
        <h2 className="text-2xl font-semibold text-[#001931]">
          {searchLoading
            ? ""
            : `(${searchedApp.length}) Apps Found`}
        </h2>

        <label className="input">
          <Search className="text-[#627382]" />
          <input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setSearchLoading(true);

              setTimeout(() => {
                setSearchLoading(false);
              }, 400);
            }}
            type="search"
            placeholder="Search App"
          />
        </label>
      </div>

      {searchLoading && (
        <div className="flex flex-col items-center py-10 space-y-3">
          <span className="loading loading-spinner loading-md"></span>
          <p className="text-xl font-semibold text-[#627382]">Searching...</p>
        </div>
      )}

      {!searchLoading && (
        <div>
          {searchedApp.length === 0 ? (
            <AppNotFound />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {" "}
              {searchedApp.map((app) => (
                <AppCard key={app.id} app={app} />
              ))}{" "}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
