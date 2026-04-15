import React from "react";

const HomepageShort = () => {
  return (
    <div className="text-center space-y-5 mt-10">
      <h1 className="text-3xl font-bold">Friends to keep close in your life</h1>
      <p className="text-[#888888]">
        Your personal shelf of meaningful connections. Browse, tend, and nurture <br />
        the relationships that matter most.
      </p>
      <button className="bg-green-800 px-2 py-1 text-white rounded-[5px]">+ Add a Friend</button>

      <div className="grid grid-cols-2 md: grid-cols-4 rounded-2xl gap-5 container mx-auto my-10">

        <div className="py-8 px-10 shadow-2xl font-semibold rounded-2xl">
          <span className="text-green-800  font-bold text-2xl ">10</span>
          <p>Total Friends</p>
        </div>
        <div className="py-8 px-10 shadow-2xl font-semibold rounded-2xl">
          <span className="text-green-800  font-bold text-2xl ">3</span>
          <p>On Track</p>
        </div>
        <div className="py-8 px-10 shadow-2xl font-semibold fontatri rounded-2xl">
          <span className="text-green-800  font-bold text-2xl ">6</span>
          <p>Need Attention</p>
        </div>
        <div className="py-8 px-10 shadow-2xl font-semibold">
          <span className="text-green-800  font-bold text-2xl ">12</span>
          <p>Interactions This Month</p>
        </div>
        
      </div>
    </div>
    
  );
};

export default HomepageShort;
