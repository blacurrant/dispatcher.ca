import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import userIcon from "../../assets/user-circle.png";
import homeIcon from "../../assets/Home.png";
import analytics from "../../assets/Tuning.png";
import { Image, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setSidebarToggle } from "../../store/slices/sidebarToggle";
import { ToggleIconImg } from "../../utils/images";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { setCurrentUserSlice } from "../../store/slices/currentUserSlice";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [logoutModal, setLogoutModal] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggle = useSelector((state) => state?.sidebarToggle);
  const userInfo = useSelector((state) => state?.currentUserSlice?.userInfo);

  console.log(userInfo?.photoURL, "dfad");

  const handleSidebar = () => {
    dispatch(setSidebarToggle());
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setLogoutModal(false);
      navigate("/login");
      dispatch(setCurrentUserSlice(null));
      console.log("User signed out");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const sidebarOptions = [
    {
      name: "Home",
      path: "/home",
      icon: homeIcon,
    },
    {
      name: "Analytics",
      path: "/analytics",
      icon: analytics,
    },
    {
      name: "Campaign",
      path: "/campaign",
      icon: "+",
      comingSoon: true,
    },
  ];

  return (
    <div
      className={`w-[20%] h-full flex flex-col justify-between border-r border-gray-200 shadow-lg bg-white ${
        toggle?.sidebar && "w-[5%]"
      }`}
    >
      <div className="rounded-lg flex flex-col ">
        <div
          onClick={handleSidebar}
          className={`flex justify-end items-center p-2 ${
            toggle?.sidebar && "rotate-180 justify-center"
          }`}
        >
          <ToggleIconImg />
        </div>
        {sidebarOptions.map((option, index) => {
          return (
            <Link
              to={option.path}
              onClick={() => setActiveTab(index)}
              className={` hover:bg-blue-100 hover:border-blue-100 p-5 flex justify-start items-center border-r-4 border-white gap-2 ${
                activeTab === index && " bg-blue-100 !border-primary"
              }`}
              key={index}
            >
              <Image
                className=" !w-[24px] !h-[24px] object-contain"
                src={option?.icon}
                alt="icon"
                preview={false}
              />
              {!toggle?.sidebar && <p>{option?.name}</p>}
              {option?.comingSoon && <p className="text-[10px] bg-primary text-white px-2

              ">Coming Soon</p>}
            </Link>
          );
        })}{" "}
      </div>
      <div className="rounded-lg p-1 flex flex-col gap-1">
        <div
        onClick={() => setLogoutModal(true)}
          className={` px-5 py-5 flex gap-2 justify-start items-center hover:shadow-lg rounded-lg cursor-pointer`}
        >
          <Image
            width={30}
            height={30}
            className="rounded-full"
            src={userInfo?.photoURL && userInfo?.photoURL}
            alt="u"
          />
          {!toggle?.sidebar && (
            <p className="text-black">{userInfo?.displayName}</p>
          )}
          {/* <p onClick={handleSignOut} className="font-semibold cursor-pointer">--</p> */}
        </div>
      </div>
      {
        logoutModal && <Modal
        visible={logoutModal}
        onOk={() => handleSignOut()}>
          <p>Are you sure you want to log out?</p>
        </Modal>
      }
    </div>
  );
};

export default Sidebar;
