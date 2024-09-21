import React, { useState } from "react";
import { Modal, Button, Card } from "antd";
import { DoneBoarding } from "../../../utils/images";
import Paragraph from "antd/es/typography/Paragraph";
import { openNotification } from "../../../components/notifications";

export default function OnboardingCompletionModal({
  isModalVisible,
  setIsModalVisible,
}) {
  //   const [isModalVisible, setIsModalVisible] = useState(true);

  const handleOk = () => {
    console.log("ssdsds");
    setIsModalVisible(false);
    openNotification("Success", "Welcome Onboard!", "success");

    // Add logic to navigate to dashboard or perform other actions
  };

  return (
    <Modal
      open={isModalVisible} // Change "visible" to "open" for Ant Design v4+
      footer={null}
      closable={true}
      width={600}
      bodyStyle={{ padding: 0 }}
    >
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <div className="md:w-full md:pr-4">
          <Paragraph className="text-2xl font-normal font-lora mb-2">
            Fantastic news, Krishna! You&apos;ve successfully completed
            onboarding
          </Paragraph>
          <Paragraph className="text-gray-500 text-sm">
            Ready to get started? Hit the button below to dive into your
            dashboard and explore what awaits!
          </Paragraph>
        </div>
        <div className=" mt-4 md:mt-0">
          <DoneBoarding />
        </div>
      </div>
      <div onClick={() => handleOk()} className="w-full flex justify-center items-center font-bold text-lg text-primary cursor-pointer">Explore MelloUp</div>
    </Modal>
  );
}
