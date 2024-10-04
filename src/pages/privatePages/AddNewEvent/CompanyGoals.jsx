import React, { useState } from "react";
import { Form, Button, Progress, Typography, Upload, Radio, Input } from "antd";
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

const { TextArea } = Input;

const businessOptions = [
  { icon: <PreEventAnalysis />, label: "Lead Generation" },
  { icon: <TakeNotes />, label: "Brand Awareness" },
  { icon: <FindLeads />, label: "Hiring" },
  { icon: <PostEvent />, label: "Product Launch" },
  { icon: <SetGoals />, label: "Fundraising" },
  { icon: <MoreIcon />, label: "Other" },
];

export default function CompanyGoals({ formData, onInputChange }) {
  const [selectedBusiness, setSelectedBusiness] = useState(null);
  //   const [hasSponsored, setHasSponsored] = useState(null);

  const onFinish = (values) => {
    console.log("Form values:", {
      ...values,
      businessDescription: selectedBusiness,
    });
  };

  const textAreaStyle = {
    borderRadius: "16px",
  };

  return (
    <div className="w-full mx-auto bg-white flex flex-col gap-6">
      {/* <Form layout="vertical" className="" onFinish={onFinish}> */}
      <p className="text-2xl font-light font-lora border-b border-primary border-opacity-20">
        Company goals at the event{" "}
      </p>
      <Form.Item>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          {businessOptions.map((option) => (
            <Button
              key={option.label}
              className={`h-24 w-full text-wrap text-center flex flex-col items-center justify-center rounded-2xl ${
                selectedBusiness === option.label
                  ? "!bg-primary text-white border-primary"
                  : "bg-white text-gray-500 border-gray-300 hover:border-primary"
              }`}
              // onClick={() => setSelectedBusiness(option.label)}
              value={formData.selectedBusiness}
              onClick={() => onInputChange("selectedBusiness", option.label)}
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
      <div className="grid grid-cols-2 gap-6">
        <Form.Item
          label="List all the Key Performance Indicators for the event "
          extra="(e.g., number of leads, ROI, customer acquisition cost, engagement)"
        >
          <TextArea value={formData?.kpi} onChange={(e)=> onInputChange("kpi", e.target.value)} rows={2} style={textAreaStyle} />
        </Form.Item>

        <Form.Item
          label="List all marketing & branding strategies for the event "
          extra="(e.g., giveaways, demos, speaking slots, panel participation)"
        >
          <TextArea value={formData?.brandStrategies} onChange={(e)=> onInputChange("brandStrategies", e.target.value)}  rows={2} style={textAreaStyle} />
        </Form.Item>
      </div>
      {/* </Form> */}
    </div>
  );
}
