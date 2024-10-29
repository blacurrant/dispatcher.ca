import React from "react";
import { Form, Button, Input } from "antd";
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

export default function CompanyGoals({ formData, onInputChange, setEventFormData }) {

  console.log(formData, "===========haha=========");
  
  // Function to toggle selected options
  const toggleBusinessSelection = (label) => {
    const currentGoals = formData.company_goals ? formData.company_goals.split(",") : [];
    const updatedGoals = currentGoals.includes(label)
      ? currentGoals.filter((item) => item !== label)
      : [...currentGoals, label];
    
    setEventFormData(prevData => ({
      ...prevData,
      company_goals: updatedGoals.join(",")
    }));
  };

  const textAreaStyle = {
    borderRadius: "16px",
  };

  return (
    <div className="w-full mx-auto bg-white flex flex-col gap-6">
      <p className="text-2xl font-light font-lora border-b border-primary border-opacity-20">
        Company goals at the event{" "}
      </p>
      <Form.Item>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          {businessOptions.map((option) => {
            console.log(formData.company_goals, "asdasdasd")
            
            const companyGoalsArray = formData.company_goals ? formData.company_goals : [];
            return (
              <Button
                key={option.label}
                className={`h-24 w-full text-wrap text-center flex flex-col items-center justify-center rounded-2xl ${
                  companyGoalsArray.includes(option.label)
                    ? "!bg-primary text-white border-primary"
                    : "bg-white text-gray-500 border-gray-300 hover:border-primary"
                }`}
                onClick={() => toggleBusinessSelection(option.label)}
              >
                <p
                  className={`text-sm ${
                    companyGoalsArray.includes(option.label)
                      ? "stroke-current text-white"
                      : "stroke-current text-gray-500"
                  }`}
                >
                  {option.icon}
                </p>
                <p className="w-fit text-sm">{option.label}</p>
              </Button>
            );
          })}
        </div>
      </Form.Item>
      <div className="grid grid-cols-2 gap-6">
        <Form.Item
          label="List all the Key Performance Indicators for the event "
          extra="(e.g., number of leads, ROI, customer acquisition cost, engagement)"
        >
          <TextArea
            value={formData?.list_of_KPIs}
            onChange={(e) => onInputChange("list_of_KPIs", e.target.value)}
            rows={2}
            style={textAreaStyle}
          />
        </Form.Item>

        <Form.Item
          label="List all marketing & branding strategies for the event "
          extra="(e.g., giveaways, demos, speaking slots, panel participation)"
        >
          <TextArea
            value={formData?.list_of_branding_strategies}
            onChange={(e) => onInputChange("list_of_branding_strategies", e.target.value)}
            rows={2}
            style={textAreaStyle}
          />
        </Form.Item>
      </div>
    </div>
  );
}