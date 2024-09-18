import { Button, Drawer, Space } from "antd";
import { useState } from "react";
import UserProfileForm from "./boardTwo";
import StartBoarding from "./startBoard";

const DrawerComponent = ({ open, handleClose, buttonStatus, header }) => {
  const [formData, setFormData] = useState(null);
  const [formTab, setFormTab] = useState(1);

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
            {buttonStatus && (
              <Button className="text-black" >button</Button>
            )}
            <div className="cross-wrapper" onClick={handleClose}>
              x
            </div>
          </Space>
        ) : null
      }
    >
      {formTab == 1 && (
        <StartBoarding  setFormTab={setFormTab} setFormData={setFormData} />
      )}
      {formTab == 2 && (
        <UserProfileForm setFormTab={setFormTab} setFormData={setFormData} />
      )}
    </Drawer>
  );
};

export default DrawerComponent;
