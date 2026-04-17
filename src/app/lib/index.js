"use client";
import React from "react";
import ForDetailsToTime from "../context/ForDetatilsToTime";


const Providers = ({ children }) => {
  return <ForDetailsToTime>{children}</ForDetailsToTime>
};

export default Providers;
