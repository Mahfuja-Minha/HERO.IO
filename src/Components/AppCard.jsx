import { Download, Star } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const AppCard = ({ app }) => {
  const { title, image, ratingAvg, downloads, id } = app;
  return (
    <Link
      to={`/app/${id}`}
      className="card bg-base-100 hover:scale-105 transition ease-in-out shadow-sm p-4"
    >
      <figure className="h-60">
        <img
          className=" w-85 overflow-hidden object-cover rounded-lg"
          src={image}
          alt="app-image"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>

        <div className="card-actions justify-between">
          <button className="btn text-[#00D390] font-medium">
              <img src={"/icon-downloads.png"} className="w-5" alt="" />
            {downloads}</button>
          <button className="btn bg-[#FFF0E1] text-[#FF8811] font-medium">
            <img src={"/icon-ratings.png"} className="w-5" alt="" />{ratingAvg}</button>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
