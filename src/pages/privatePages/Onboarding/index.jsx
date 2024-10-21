/* eslint-disable react/prop-types */
import { Button, ConfigProvider, Drawer, Image, Space } from "antd";
import { useState } from "react";
import { motion } from "framer-motion";
import UserProfileForm from "./boardTwo";
import StartBoarding from "./startBoard";
import ProductUsageForm from "./productUsage";
import CompanyInfoForm from "./aboutCompany";
import InviteTeamForm from "./inviteTeam";
import LogoIcon from "../../../assets/LogoIcon.png";

const variants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};

const DrawerComponent = ({
  open,
  handleClose,
  buttonStatus,
  header,
  setFormDrawer,
  setIsModalVisible,
  isModalVisible,
}) => {
  const [formData, setFormData] = useState(null);
  const [formTab, setFormTab] = useState(1);

  const purpleTheme = {
    token: {
      colorPrimary: "#723D9E",
      colorLink: "#723D9E",
      colorLinkHover: "#723D9E",
      borderRadius: 16,
    },
  };

  return (
    <Drawer
      title={null}
      placement="right"
      onClose={handleClose}
      open={open}
      closable={false}
      width="100%"
      prefixCls="drawer"
      extra={
        header ? (
          <Space>
            {buttonStatus && <Button className="text-black">button</Button>}
            <div className="cross-wrapper" onClick={handleClose}>
              x
            </div>
          </Space>
        ) : null
      }
    >
      <div className="flex justify-between">
        <Image
          src={LogoIcon}
          alt="logo"
          className="!w-[180px] object-contain"
          preview={false}
        />
        <p className="text-primary font-bold text-md">Skip this page</p>
      </div>
      <ConfigProvider theme={purpleTheme}>
        <motion.div
          key={formTab} // Key changes trigger animation when formTab changes
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={variants}
          transition={{ duration: 0.5 }} // Adjust animation speed
        >
          {formTab === 1 && (
            <StartBoarding setFormTab={setFormTab} setFormData={setFormData} />
          )}
          {formTab === 2 && (
            <UserProfileForm
              setFormTab={setFormTab}
              setFormData={setFormData}
            />
          )}
          {formTab === 3 && (
            <CompanyInfoForm
              setFormTab={setFormTab}
              setFormData={setFormData}
            />
          )}
          {formTab === 4 && (
            <ProductUsageForm
              setFormTab={setFormTab}
              setFormData={setFormData}
              setFormDrawer={setFormDrawer}
              setIsModalVisible={setIsModalVisible}
              isModalVisible={isModalVisible}
            />
          )}
          {/* {formTab === 5 && (
            <InviteTeamForm
              setFormTab={setFormTab}
              setFormData={setFormData}
              setFormDrawer={setFormDrawer}
              setIsModalVisible={setIsModalVisible}
              isModalVisible={isModalVisible}
            />
          )} */}
        </motion.div>
      </ConfigProvider>
    </Drawer>
  );
};

export default DrawerComponent;
