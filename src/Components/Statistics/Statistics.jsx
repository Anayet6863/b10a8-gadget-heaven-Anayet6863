import React, { useContext, useEffect } from "react";
import  { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    useEffect(()=>{
            document.title = "Gadget Heaven || Statistics"
    },[])
    const data = [
        {
          name: 'iphone 11',
          price: 690,
         rating: 406,
        },
        {
          name: 'iphone 15 pro max',
          price:500,
          rating:402,
        },
        {
          name: "Samsung S22 ultra",
          price: 899,
          rating:4.8,
        },
        {
            name: "readmi note 9",
            price: 300,
            rating: 3.9,
        },
        {
            name:"xaomi 12" ,
            price: 750,
            rating:4.5 ,
        },
        {
            name: "Samsung A55",
            price: 650,
            rating:4.4 ,
        },
        {
            name: "MacBook-Pro-M3",
            price: 1299,
            rating: 4.7,
        },
        {
            name: "MacBook-Air-M3",
          price: 1499,
          rating: 4.8,
        },
        {
            name: "M1 Smart Watch",
          price: 249,
          rating: 4.8,
        }
      ];
  return (
    <div>
      <div className="bg-[#9538E2] max-w-full h-[300px] text-center">
        <h1 className="text-5xl text-white p-10">Statistics</h1>
        <p className="text-white">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="container mx-auto text-center mt-20 mb-20 flex justify-center bg-gray-100">
        <LineChart
          width={1000}
          height={500}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="price" stroke="#8884d8" />
          <Line type="monotone" dataKey="rating" stroke="#82ca9d" />
        </LineChart>
      </div>
    </div>
  );
};

export default Statistics;
