import React from "react";

function Sidebar() {
  return (
    <div className="max-w-[350px]  h-screen bg-black">
      <div className="flex border border-purple-200 rounded">
        <input
          type="text"
          className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Search..."
        />
        <button className="px-4 text-white bg-purple-600 border-l rounded ">
          Search
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
