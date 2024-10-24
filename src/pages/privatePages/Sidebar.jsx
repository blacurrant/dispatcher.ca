import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import homeIcon from "../../assets/Home.png";
import analytics from "../../assets/Tuning.png";
import { Image } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setSidebarToggle } from "../../store/slices/sidebarToggle";
import { AnalyticsIcon, EventLogo, HomeIcon, ToggleIconImg } from "../../utils/images";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState(0);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggle = useSelector((state) => state?.sidebarToggle);
  const userInfo = useSelector((state) => state?.currentUserSlice?.userInfo);

  console.log(userInfo?.photoURL, "dfad");

  const handleSidebar = () => {
    dispatch(setSidebarToggle());
  };

  const sidebarOptions = [
    {
      name: "Home",
      path: "/",
      icon: <HomeIcon />,
    },
    {
      name: "My Events",
      path: "/events",
      icon: <EventLogo />,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <AnalyticsIcon />,
    },
  ];

  return (
    <div
      className={`w-[20%] h-full flex flex-col justify-between shadow-lg bg-primary_light transition-all duration-300 ease-in-out ${
        toggle?.sidebar ? "w-[5%]" : "w-[20%]"
      }`}
    >
      <div className="relative rounded-lg flex flex-col ">
        <div onClick={handleSidebar} className={`p-7 border-r-4 border-white`}>
          <div
            className={`w-fit h-fit left-2 transition-transform duration-300 ease-in-out ${
              toggle?.sidebar ? "rotate-180" : "rotate-0"
            } `}
          >
            <ToggleIconImg />
          </div>
        </div>
        {sidebarOptions.map((option, index) => {
          return (
            <Link
              to={option.path}
              onClick={() => setActiveTab(index)}
              className={`hover:bg-secondary hover:border-blue-100 p-5 flex justify-start items-center border-r-4 border-white gap-2 transition-all duration-300 ease-in-out ${
                activeTab === index ? "bg-secondary !border-primary" : ""
              }`}
              key={index}
            >
              {option?.icon}
              {!toggle?.sidebar && (
                <p className={`transition-opacity duration-300 ease-in-out $`}>
                  {option?.name}
                </p>
              )}
              {option?.comingSoon && (
                <p
                  className={`text-[10px] bg-primary text-white px-2 transition-all duration-300 ease-in-out ${
                    toggle?.sidebar ? "opacity-0 w-0" : "opacity-100 w-auto"
                  }`}
                >
                  Coming Soon
                </p>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
