import React, { useEffect, useState } from "react";
import Trending from "../Trending/Trending";

const Trendings = () => {
  useEffect(() => {
    document.title = "Gadget Heaven || Trendings";
  }, []);
  const [allTrendingData, setAllTrendingData] = useState([]);
  useEffect(() => {
    fetch("./TrendingData.json").then((res) =>
      res.json().then((data) => setAllTrendingData(data))
    );
  }, []);

  //console.log(allTrendingData);

  return (
    <div>
      <div className="bg-[#9538E2] max-w-full h-[300px] text-center">
        <h1 className="text-5xl text-white p-10">Trendings</h1>
        <p className="text-white">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to
          <br /> the coolest accessories, we have it all!
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-3 gap-10 rounded-lg shadow-md mt-24 mbbb-24">
        {allTrendingData.map((item, idx) => (
          <Trending key={idx} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Trendings;
