import React, { useState } from "react";
import { IoIosSettings } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import LogoIcon from "../../assets/LogoIcon.png";
import { Image } from "antd";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex justify-between items-center drop-shadow-md w-[100%] p-5 bg-white ">
      <Image
        src={LogoIcon}
        alt="logo"
        className="!w-[180px] object-contain"
        preview={false}
      />

      <div className="hidden md:flex items-center space-x-3">
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
      </div>

      <div className="md:hidden">
        <FaBars size={25} onClick={toggleMobileMenu} />
      </div>

      {isMobileMenuOpen && (
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
      )}
    </div>
  );
};

export default Navbar;
