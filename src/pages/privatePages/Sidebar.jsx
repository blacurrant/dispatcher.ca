import React, {useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {

  const [activeTab, setActiveTab] = useState(null);


  const sidebarOptions = [
    {
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      name: "Trips",
      path: "/trips",
    }
  ];
  return (
    <div className="w-full h-[100vh] flex flex-col bg-cyan-600 border-r border-gray-200 ">
      <div className="h-[10vh] flex items-center justify-start border-b border-cyan-200">
        <h1 className="text-3xl text-cyan-200 px-5">Dispatcher.ca</h1>
      </div>
      <div>
        {sidebarOptions.map((option, index) => {
          return (
            <Link  to={option.path} onClick={() => setActiveTab(index)} className={`h-[10vh] text-cyan-200 hover:bg-cyan-900 px-5 flex justify-start items-center ${activeTab === index && "bg-cyan-900"}`} key={index}>
              <p>{option.name}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
