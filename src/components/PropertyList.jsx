// components/PropertyListing.js
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadProperties } from "../slices/propertySlice";
import PropertyCard from "./PropertyCard";
import CityTabs from "./CityTab";
import Heading from "./Heading";
import { GiSandsOfTime } from "react-icons/gi";

function PropertyListing() {
  const activeCity = useSelector((state) => state.activeCity);
  const properties = useSelector((state) => state.properties);
  const dispatch = useDispatch();
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    // Simulate fetching property data from an API or JSON file
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:9000/hotel");
        const data = await response.json();
        dispatch(loadProperties(data));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  const filteredProperties = properties.filter(
    (property) => property.city === activeCity
  );

  const numberOfItems =
    showMore && filteredProperties ? filteredProperties.length : 6;

  return (
    <>
      <div className="container mx-auto px-[15%]">
        <Heading />
        <CityTabs />
        <div className="grid grid-cols-3 gap-4">
          {filteredProperties?.slice(0, numberOfItems).map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        <div className="flex items-center justify-center">
          {!showMore && (
            <>
              <button
                className="flex items-center gap-1 text-sm rounded-full font-bold 
              tracking-wide text-white mx-4 my-4
              hover:bg-white hover:text-stone-800 bg-blue-700 disabled:cursor-not-allowed 
              px-4 py-2"
                onClick={() => setShowMore(true)}
              >
                <GiSandsOfTime />
                <span>Show More</span>
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default PropertyListing;
