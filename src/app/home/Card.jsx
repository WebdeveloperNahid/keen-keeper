import Image from "next/image";
import React from "react";

const Card = ({ singleData }) => {
  return (
    <div className=" card bg-base-100  shadow-sm   ">
      <figure>
        <Image
        className="border rounded-full "
          src={singleData.picture}
          alt={singleData.name}
          width={100}
          height={100}
          
        />
      </figure>
      <div className="card-body ">
        <h1 className="text-2xl font-semibold">{singleData.name}</h1>
        <p> {singleData.days_since_contact} d ago</p>

        <div className="flex gap-2 justify-center items-center">
          {singleData.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-green-400 rounded-2xl px-5 py-1 text-white   "
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex justify-center items-center">
          <button
            className={` w-20 rounded-2xl h-7 ${singleData.status == "on-track" ? "bg-green-900 text-white" : singleData.status === "overdue" ? "bg-red-600 text-white" : singleData.status === "almost due" ? " bg-yellow-500 text-white" : ""}`}
          >
            {" "}
            {singleData.status}{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
