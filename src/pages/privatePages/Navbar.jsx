import React, { useState } from "react";
import { IoIosSettings } from "react-icons/io";
import { FaBars, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import LogoIcon from "../../assets/LogoIcon.png";
import { auth } from "../../firebase/firebase";
import { Divider, Dropdown, Image, Modal, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { completedOnboarding, setCurrentUserSlice } from "../../store/slices/currentUserSlice";
import { CaretDownOutlined, BellFilled } from "@ant-design/icons";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggle = useSelector((state) => state?.sidebarToggle);
  const userInfo = useSelector((state) => state?.currentUserSlice?.userInfo);

  const items = [
    {
      label: <a>Profile</a>,
      key: "0",
    },
    {
      type: "divider",
    },
    {
      label: <a onClick={() => setLogoutModal(true)}>Logout</a>,
      key: "1",
    },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setLogoutModal(false);
      navigate("/login");
      dispatch(setCurrentUserSlice(null));
      dispatch(completedOnboarding(null));
      console.log("User signed out");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="flex justify-between items-center drop-shadow-md w-[100%] max-h-[10vh] p-4 bg-white ">
      <Image
        src={LogoIcon}
        alt="logo"
        className="!w-[180px] object-contain"
        preview={false}
      />

      {/* <div className="hidden md:flex items-center space-x-3">
        <ul className="flex space-x-8">
          <li>
            <Link href="/">Solutions</Link>
          </li>
          <li>
            <Link href="/">Resources</Link>
          </li>
          <li>
            <Link href="/">Pricing</Link>
          </li>
          <li className="flex items-center">
            <IoIosSettings size={25} />
          </li>
        </ul>
      </div> */}

      <div className="md:hidden">
        <FaBars size={25} onClick={toggleMobileMenu} />
      </div>

      {/* {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#FBF9FC] drop-shadow-md md:hidden">
          <ul className="flex flex-col items-center space-y-4 p-4">
            <li>
              <Link href="/">Solutions</Link>
            </li>
            <li>
              <Link href="/">Resources</Link>
            </li>
            <li>
              <Link href="/">Pricing</Link>
            </li>
            <li className="flex items-center">
              <IoIosSettings size={25} />
            </li>
          </ul>
        </div>
      )} */}
      {/* {isMobileMenuOpen && ( */}
      <div className=" flex items-center gap-3">
        <Dropdown menu={{ items }} trigger={["click"]}>
          <div
            onClick={() => setDropDown(true)}
            className={` flex gap-2 justify-start items-center rounded-3xl p-2 cursor-pointer bg-purple-100`}
          >
            {userInfo && (
              <>
                {/* {userInfo?.photoURL ? (
                  <Image
                    width={30}
                    height={30}
                    className="rounded-full"
                    src={userInfo?.photoURL}
                    alt=" "
                    preview={false}
                  />
                ) : ( */}
                <div className="w-8 h-8 rounded-full bg-primary text-white flex justify-center items-center">
                  {userInfo?.displayName[0].toUpperCase()}
                </div>
                {/* )} */}
                <p className="text-black">{userInfo?.displayName}</p>
                <CaretDownOutlined />
              </>
            )}
          </div>
        </Dropdown>
        {/* <Divider solid className="h-8 border border-gray-300" type="vertical" /> */}
        <div className="w-10 flex items-center justify-center">
          <BellFilled className="text-xl text-primary" />
        </div>
      </div>
      {/* )} */}
      {logoutModal && (
        <Modal
          visible={logoutModal}
          onCancel={() => setLogoutModal(false)}
          onOk={() => handleSignOut()}
        >
          <p>Are you sure you want to log out?</p>
        </Modal>
      )}
    </div>
  );
};

export default Navbar;
