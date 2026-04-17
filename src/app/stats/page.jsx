"use client";
import React, { useContext, useMemo } from "react";
import { NotificationContext } from "@/app/context/ForDetatilsToTime";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

// color
const COLORS = ["#4f46e5", "#10b981", "#f59e0b"];

const StatsPage = () => {
  const { notification } = useContext(NotificationContext);

  //  Call, Text, Video  percentage logic
  const chartData = useMemo(() => {
  const total = notification.length;

  if (total === 0) return [];

  //  Way 
  const chartData = ["call", "text", "video"].map((type) => {
    const count = notification.filter((n) => n.type === type).length;
    return {
      name: type[0].toUpperCase() + type.slice(1),
      value: count,
      percentage: ((count / total) * 100).toFixed(1),
    };
  });

  return chartData;
}, [notification]);

  // When no any Data 

  if (notification.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500 text-lg font-semibold">
          কোনো data নেই। আগে Call / Text / Video করো।
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto my-10 px-4">
      <h1 className="text-2xl font-bold text-center mb-8">
        Notification Stats
      </h1>

      {/*  Percentage Cards */}
      <div className="grid grid-cols-3 gap-4 mb-10 max-w-xl mx-auto">
        {chartData.map((item, index) => (
          <div
            key={item.name}
            className="rounded-2xl p-4 text-center text-white font-semibold"
            style={{ backgroundColor: COLORS[index] }}
          >
            <p className="text-3xl font-bold">{item.percentage}%</p>
            <p className="mt-1">{item.name}</p>
            <p className="text-sm opacity-80">{item.value} </p>
          </div>
        ))}
      </div>

      {/*  PieChart */}
      <div className="flex justify-center">
        <PieChart width={350} height={350}>
          <Pie
            data={chartData}
            innerRadius="60%"
            outerRadius="85%"
            cornerRadius={8}
            paddingAngle={5}
            dataKey="value"
          >
            {chartData.map((entry, index) => (
              <Cell key={entry.name} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value, name, props) => [
              `${props.payload.percentage}%`,
              name,
            ]}
          />
          <Legend />
        </PieChart>
      </div>

      {/*  Total count */}
      <p className="text-center text-gray-500 mt-4 font-semibold">
         Interaction: {notification.length} 
      </p>
    </div>
  );
};

export default StatsPage;