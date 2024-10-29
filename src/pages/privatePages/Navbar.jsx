import React, { useState } from "react";
import { IoIosSettings } from "react-icons/io";
import { FaBars, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import LogoIcon from "../../assets/LogoIcon.png";
import { auth } from "../../firebase/firebase";
import { Button, Divider, Dropdown, Image, Modal, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { completedOnboarding, setCurrentUserSlice } from "../../store/slices/currentUserSlice";
import { CaretDownOutlined, BellFilled, ExclamationCircleOutlined } from "@ant-design/icons";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggle = useSelector((state) => state?.sidebarToggle);
  const userInfo = useSelector((state) => state?.currentUserSlice?.userInfo);

  const items = [
    // {
    //   label: <a>Profile</a>,
    //   key: "0",
    // },
    // {
    //   type: "divider",
    // },
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
    <div className="flex justify-between items-center border-b-2 border-secondary w-[100%] max-h-[10vh] p-4 bg-primary_light ">
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
        <Dropdown
          menu={{ items }}
          trigger={["click"]}
          overlayClassName="custom-dropdown"
          dropdownRender={(menu) => (
            <div className="bg-white rounded-lg shadow-lg w-64">
              {React.cloneElement(menu, {
                className: "py-2",
              })}
            </div>
          )}
        >
          <div
            onClick={() => setDropDown(true)}
            className="flex items-center gap-3 rounded-full py-2 px-4 cursor-pointer bg-purple-100 hover:bg-purple-200 transition-colors duration-200"
          >
            {userInfo && (
              <>
                <div className="w-10 h-10 rounded-full bg-primary text-white flex justify-center items-center text-lg font-semibold">
                  {userInfo?.displayName[0].toUpperCase()}
                </div>
                <div className="flex-grow">
                  <p className="text-black font-medium truncate max-w-[120px]">
                    {userInfo?.displayName}
                  </p>
                </div>
                <CaretDownOutlined className="text-gray-600" />
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
          footer={null}
          centered
          width={400}
        >
          <div className="flex flex-col items-center p-6">
            <ExclamationCircleOutlined className="text-5xl text-primary mb-4" />
            <h2 className="text-2xl font-semibold mb-4">Confirm Logout</h2>
            <p className="text-gray-600 mb-6">Are you sure you want to log out?</p>
            <div className="flex justify-center gap-4">
              <Button
                onClick={() => setLogoutModal(false)}
                className="w-32 h-10 !rounded-full border-gray-300 !bg-primary_light hover:!border-primary hover:!text-primary"
              >
                Cancel
              </Button>
              <Button
                onClick={() => handleSignOut()}
                type="primary"
                danger
                className="w-32 h-10 !rounded-full"
              >
                Log Out
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Navbar;
