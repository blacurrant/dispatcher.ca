import React from "react";
import { Typography, Button, Card } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { BoardingImage } from "../../../utils/images";

const { Title, Paragraph } = Typography;

export default function StartBoarding({setFormTab}) {
  return (
    <div className="h-screen w-full flex flex-col gap-6 items-center justify-center p-4">
      <Title level={2} className="text-center font-bold">
        Welcome to MelloUp
      </Title>
      <Card className="w-[600px] shadow-lg rounded-3xl">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="md:w-full md:pr-4">
            <Paragraph className="text-2xl font-normal font-lora mb-2">
              Let&apos;s get you planning your first event as quickly as
              possible!
            </Paragraph>
            <Paragraph className="text-gray-500 text-sm">
              This setup guide will quickly get the basics of your organization.
              It&apos;ll take about 90 seconds if you have all the information
              in your hand.
            </Paragraph>
          </div>
          <div className=" mt-4 md:mt-0">
            <BoardingImage />
          </div>
        </div>
      </Card>
      <Button
        type="primary"
        size="large"
        className="w-[600px] h-[60px] bg-primary hover:!bg-hover hover:!text-primary hover:!border-primary border rounded-2xl "
        icon={<ArrowRightOutlined />}
        onClick={() => setFormTab(2)}
      >
        Continue
      </Button>
    </div>
  );
}
