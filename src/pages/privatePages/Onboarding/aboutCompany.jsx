import React, { useState } from "react";
import { Form, Input, Button, Select, Progress, Dropdown } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import Title from "antd/es/typography/Title";

export default function CompanyInfoForm({ setFormTab }) {
  const [form] = Form.useForm();
  const [selectedCompanyType, setSelectedCompanyType] = useState(null);


  const onFinish = (values) => {
    setFormTab(4);
    console.log("Form values:", values);
  };

  const companyType = [
    "AI/  SaaS",
    "FinTech",
    "Tech",
    "Consumer Tech / E- Commerce",
    "Marketing Agency",
    "Other",
  ];

  const companyName = [
    {
      key: 1,
      value: "Company 1",
    },
    {
      key: 2,
      value: "Company 2",
    },
    {
      key: 3,
      value: "Company 3",
    },
    {
      key: 4,
      value: "Company 4",
    },
  ];

  const companySize = [
    {
      key: 1,
      value: "1-11",
    },
    {
      key: 2,
      value: "11-50",
    },
    {
      key: 3,
      value: "51-100",
    },
    {
      key: 4,
      value: "101-200",
    },
    {
      key: 5,
      value: "More than 200",
    }
  ]

  return (
    <div className="w-[600px] mx-auto p-6 bg-gray-50 rounded-lg">
      <Progress
        percent={50}
        showInfo={false}
        strokeColor="#723D9E"
        trailColor="#ECE6F0"
      />

<div className="py-8">

      <Title className="!text-xl !font-bold mb-2">Tell Us About Your Company</Title>
      <p className="text-sm font-lora text-gray-400 mb-6">
        By details this will be used to Personalize your dashboard. You can
        adjust these settings later or change them later from your profile.
      </p>
</div>

      <Form
        form={form}
        name="companyInfo"
        onFinish={onFinish}
        layout="vertical"
        requiredMark="optional"
      >
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Form.Item
              name="companyName"
              label="Company Name"
              // rules={[{ required: true, message: 'Required' }]}
            >
              <Select
                options={companyName}
                className="h-[48px] !rounded-2xl border-gray-300"
              />
            </Form.Item>

            <Form.Item
              name="companySize"
              label="Company Size"
              // rules={[{ required: true, message: 'Required' }]}
            >
              <Select options={companySize} className="h-[48px] !rounded-2xl border-gray-300" />
            </Form.Item>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Form.Item
              name="websiteLink"
              label="Website Link"
              // rules={[{ required: true, message: 'Required' }]}
            >
              <Input className="h-[48px] !rounded-2xl border-gray-300" />
            </Form.Item>

            <Form.Item
              name="companyLocation"
              label="Company Location"
              // rules={[{ required: true, message: 'Required' }]}
            >
              <Select options={companyName} className="h-[48px] !rounded-2xl border-gray-300" />
            </Form.Item>
          </div>

          <Form.Item name="companyType" label="Type of Company">
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
            {companyType.map((role) => (
              <Button
                key={role}
                className={`text-left px-3 py-2 h-[48px] rounded-2xl hover:!bg-hover hover:!text-primary hover:!border-primary ${
                  selectedCompanyType == role
                    ? "!bg-primary !text-white !"
                    : "bg-white text-gray-700 border-gray-300"
                }`}
                onClick={() => setSelectedCompanyType(role)}
              >
                {role}
              </Button>
            ))}
          </div>
          </Form.Item>
        </div>

        <Form.Item>
          <div className="w-full gap-5 flex justify-between items-center">
            <Button
              type="primary"
              onClick={() => setFormTab(2)}
              className="w-full bg-primary hover:!bg-hover hover:!text-primary hover:!border-primary border border-primary rounded-2xl h-12 text-lg mt-4"
            >
              <ArrowLeftOutlined />
              Back
            </Button>

            <Button
              type="primary"
              htmlType="submit"
              className="w-full bg-primary  border-primary hover:!bg-hover hover:!text-primary hover:!border-primary border rounded-2xl h-12 text-lg mt-4"
            >
              Continue <ArrowRightOutlined />
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
}
