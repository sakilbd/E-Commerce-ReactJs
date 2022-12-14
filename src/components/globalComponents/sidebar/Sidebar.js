import React,{useState,useEffect} from "react";
import './sidebar.css'


function Sidebar({hideSidebar}) {
  
  
  
  return (
    <div>
    
      <div className={"sidebar-animate "+(hideSidebar=="hidden"?"sm:hidden sml:hidden md:hidden":"sm:block sml:block md:block")+ " sml:absolute md:absolute sm:absolute sml:z-10 md:z-10 sm:z-10 lg:relative h-screen lg:block bg-black min-w-[300px]"}>
        {/* <div className="flex border border-purple-200 rounded">
        <input
          type="text"
          className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Search..."
        />
        <button className="px-4 text-white bg-purple-600 border-l rounded ">
          Search
        </button>
      </div> */}
 
      
      </div>
    </div>
  );
}

export default Sidebar;
