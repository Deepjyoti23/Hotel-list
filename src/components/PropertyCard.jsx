// components/PropertyCard.js
import React from "react";
import { Link } from "react-router-dom";
import { PiBuildings } from "react-icons/pi";
import { BiBed } from "react-icons/bi";
import { LiaArrowsAltSolid, LiaBathSolid } from "react-icons/lia";

function PropertyCard({ property }) {
  console.log(property.id);
  const {
    id,
    image,
    location,
    hotelName,
    room,
    bed,
    bath,
    area,
    price,
    purpose,
    popular,
  } = property;
  // console.log(id);
  return (
    <Link to={`${id}`}>
      <div className="bg-white gap-4 rounded-xl text-stone-800 font-sans">
        <div className="p-1.5 relative">
          <img
            className="rounded-xl h-[249px] w-full object-cover"
            src={image}
            alt={hotelName}
          />
          <button
            className="absolute top-4 left-2 inline-block text-sm rounded-full font-bold 
           tracking-wide text-blue-700 bg-white mx-4 my-2 px-4 py-2"
          >
            {purpose === "rent" ? "For Rent" : "For Sale"}
          </button>
          {popular === "yes" && (
            <button className="absolute bottom-0 left-0 w-1/4 text-sm rounded font-bold text-white bg-blue-700 px-6 py-1 pr-[77px] shadow-lg">
              Popular
            </button>
          )}
          <button className="absolute top-4 right-4 bg-white p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 stroke-blue-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </button>
        </div>
        <div className="p-3">
          <div className="pb-3 flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 stroke-orange-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>

            <span>{location}</span>
          </div>
          <h2 className="font-bold text-stone-800">{hotelName}</h2>
          <div className="grid grid-cols-4 gap-4 m-4 ">
            <p>
              <PiBuildings /> {room} Room
            </p>
            <p>
              <BiBed />
              {bed} Bed
            </p>
            <p>
              <LiaBathSolid />
              {bath} Bath
            </p>
            <p>
              <LiaArrowsAltSolid />
              {area} sft
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p>
              <span className="text-blue-700 font-bold text-xl">${price}</span>
              /month
            </p>
            <button
              className="inline-block text-sm rounded-full font-bold 
                tracking-wide text-blue-700 transition-colors duration-300 mx-4 my-2
              hover:text-blue-700 border-2 border-blue-700 focus:text-blue-700 disabled:cursor-not-allowed 
                px-4 py-2 justify-end"
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PropertyCard;
