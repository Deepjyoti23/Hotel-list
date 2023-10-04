// components/CityTabs.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveCity } from "../slices/activeCitySlice";
import { ImArrowRight2 } from "react-icons/im";

function CityTabs() {
  const activeCity = useSelector((state) => state.activeCity);
  const dispatch = useDispatch();

  const cities = ["New York", "Mumbai", "Paris", "London"];

  const handleCityClick = (city) => {
    dispatch(setActiveCity(city));
  };

  return (
    <div className="flex mt-6 mb-4 justify-between">
      <div>
        {cities.map((city) => (
          <button
            key={city}
            className={`inline-block text-sm  rounded-full font-bold mx-2 my-2
          hover:bg-blue-700 hover:text-white focus:bg-blue-700 disabled:cursor-not-allowed 
           px-4 py-2 ${
             activeCity === city
               ? "bg-blue-700 focus:bg-blue-700 !important text-white"
               : "bg-zinc-200 text-stone-800"
           }`}
            onClick={() => handleCityClick(city)}
          >
            {city}
          </button>
        ))}
      </div>
      <div className="flex justify-end">
        <button
          className="flex text-sm rounded-full font-bold 
        tracking-wide text-blue-700 transition-colors duration-300 mx-2 my-2
        hover:text-blue-700 border-2 border-blue-700 focus:text-blue-700 disabled:cursor-not-allowed 
        px-4 py-2 items-center gap-2"
        >
          View All
          <ImArrowRight2 />
        </button>
      </div>
    </div>
  );
}

export default CityTabs;
