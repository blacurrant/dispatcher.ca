import React, { useState } from "react";
import { Form, Input, Button, Progress, Typography } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const jobRoles = [
  "CEO or Owner",
  "Event Organizer",
  "Event Marketer",
  "Designer",
  "Human Resources",
  "Sales/Account Management",
  "Operations/Administration",
  "Other",
];

export default function UserProfileForm() {
  const [selectedRoles, setSelectedRoles] = useState([]);

  const onFinish = (values) => {
    console.log("Form values:", { ...values, roles: selectedRoles });
  };

  const toggleRole = (role) => {
    setSelectedRoles((prev) =>
      prev.includes(role) ? prev.filter((r) => r !== role) : [...prev, role]
    );
  };

  return (
    // <div className='w-full h-full'>

    <div className="w-[600px] h-full mx-auto p-6 bg-white rounded-lg shadow-md">
      <Progress
        percent={33}
        showInfo={false}
        strokeColor="#8B5CF6"
        trailColor="#E5E7EB"
      />

      <Title level={2} className="mt-6 mb-2 !text-xl !font-bold">
        Let&apos;s Get to Know You
      </Title>
      <div className="text-gray-400 mb-6 font-lora">
        <p className="font-lora">
            By default this will be used to personalize your dashboard.
        </p>
        <p  className="font-lora">
            You can adjust these settings now or change them later from your
            profile.
        </p>
      </div>

      <Form layout="vertical" onFinish={onFinish}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Form.Item
            name="firstName"
            label="First Name"
            rules={[
              { required: true, message: "Please input your first name!" },
            ]}
          >
            <Input className="!rounded-2xl !h-[48px]" />
          </Form.Item>
          <Form.Item
            name="lastName"
            label="Last Name"
            rules={[
              { required: true, message: "Please input your last name!" },
            ]}
          >
            <Input className="!rounded-2xl !h-[48px]" />
          </Form.Item>
        </div>

        <Form.Item label="What Describes you the best?">
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
            {jobRoles.map((role) => (
              <Button
                key={role}
                className={`text-left px-3 py-2 h-[48px] rounded-2xl ${
                  selectedRoles.includes(role)
                    ? "bg-primary text-white border-primary"
                    : "bg-white text-gray-700 border-gray-300"
                }`}
                onClick={() => toggleRole(role)}
              >
                {role}
              </Button>
            ))}
          </div>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="w-full bg-primary hover:bg-purple-700 border-primary hover:border-purple-700 rounded-2xl h-12 text-lg mt-4"
          >
            Continue <ArrowRightOutlined />
          </Button>
        </Form.Item>
      </Form>
    </div>
    // </div>
  );
}
