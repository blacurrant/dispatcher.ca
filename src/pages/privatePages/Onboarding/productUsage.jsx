import React, { useState } from "react";
import { Form, Button, Progress, Typography, Upload, Radio } from "antd";
import {
  UploadOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import {
  PreEventAnalysis,
  TakeNotes,
  FindLeads,
  PostEvent,
  SetGoals,
  MoreIcon,
} from "../../../utils/images";

const { Title, Paragraph } = Typography;

const businessOptions = [
  { icon: <PreEventAnalysis />, label: "Pre-event Analysis" },
  { icon: <TakeNotes />, label: "Take notes on leads during the event" },
  { icon: <FindLeads />, label: "Find leads at the upcoming event" },
  { icon: <PostEvent />, label: "Post-event ROI calculation" },
  { icon: <SetGoals />, label: "Set goals for the upcoming event" },
  { icon: <MoreIcon />, label: "Other" },
];

export default function ProductUsageForm({ setFormTab }) {
  const [selectedBusiness, setSelectedBusiness] = useState(null);
  const [hasSponsored, setHasSponsored] = useState(null);

  const onFinish = (values) => {
    setFormTab(5);
    console.log("Form values:", {
      ...values,
      businessDescription: selectedBusiness,
    });
  };

  return (
    <div className="w-[600px] mx-auto p-6 bg-white rounded-3xl">
      <Progress
        percent={75}
        showInfo={false}
        strokeColor="#8B5CF6"
        trailColor="#E5E7EB"
      />

      <div className="py-6">
        <Title className="!text-xl !font-bold">
          How Will You Use Our Product?
        </Title>
        <Paragraph className="text-gray-400 font-lora">
          Your choice here won&apos;t limit what you can do in MelloUp.
        </Paragraph>
      </div>

      <Form layout="vertical" onFinish={onFinish}>
        <p className="!text-md !font-semibold !text-gray-500 py-4">
          Pick one that describes your business
        </p>
        <Form.Item>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {businessOptions.map((option) => (
              <Button
                key={option.label}
                className={`h-24 w-full text-wrap text-center flex flex-col items-center justify-center rounded-2xl ${
                  selectedBusiness === option.label
                    ? "!bg-primary text-white border-primary"
                    : "bg-white text-gray-500 border-gray-300 hover:border-primary"
                }`}
                onClick={() => setSelectedBusiness(option.label)}
              >
                <p
                  className={`text-sm ${
                    selectedBusiness === option.label
                      ? "stroke-current text-white" // Active state stroke color
                      : "stroke-current text-gray-500" // Inactive state stroke color
                  }`}
                >
                  {option.icon}
                </p>
                <p className="w-fit  text-sm">{option.label}</p>
              </Button>
            ))}
          </div>
        </Form.Item>
        <div className="w-full flex gap-5">
          <Form.Item className="w-full">
            <div className="mb-6">
              <h2 className="!text-md !font-semibold !text-gray-500 py-4">
                Sponsored an event Before?
              </h2>
              <div className="flex space-x-4">
                <Button
                  type={hasSponsored === true ? "primary" : "default"}
                  onClick={() => setHasSponsored(true)}
                  className={`w-full h-[48px] rounded-2xl ${
                    hasSponsored === true
                      ? "bg-primary border-primary hover:bg-purple-700 hover:border-purple-700"
                      : ""
                  }`}
                >
                  Yes
                </Button>
                <Button
                  type={hasSponsored === false ? "primary" : "default"}
                  onClick={() => setHasSponsored(false)}
                  className={`w-full h-[48px] rounded-2xl ${
                    hasSponsored === false
                      ? "bg-primary border-primary hover:bg-purple-700 hover:border-purple-700"
                      : ""
                  }`}
                >
                  No
                </Button>
              </div>
            </div>
          </Form.Item>

          <Form.Item className="w-full">
            <h2 className="!text-md !font-semibold !text-gray-500 py-4">
              Upload lead list (if any)
            </h2>
            <div className="w-full">
              <label htmlFor="upload-input">
                <div className="w-full h-12 rounded-2xl bg-white border border-gray-300 flex items-center justify-center cursor-pointer hover:border-primary">
                  <span className="mr-2"><UploadOutlined /></span> {/* Icon Placeholder */}
                  Upload
                </div>
              </label>
              <input
                id="upload-input"
                type="file"
                className="!hidden"
              />
            </div>
          </Form.Item>
        </div>

        <Form.Item>
          <div className="w-full gap-5 flex justify-between items-center">
            <Button
              type="primary"
              onClick={() => setFormTab(3)}
              className="w-full bg-primary hover:bg-purple-700 border-primary hover:border-purple-700 rounded-2xl h-12 text-lg mt-4"
            >
              <ArrowLeftOutlined />
              Back
            </Button>

            <Button
              type="primary"
              htmlType="submit"
              className="w-full bg-primary hover:bg-purple-700 border-primary hover:border-purple-700 rounded-2xl h-12 text-lg mt-4"
            >
              Continue <ArrowRightOutlined />
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
}
