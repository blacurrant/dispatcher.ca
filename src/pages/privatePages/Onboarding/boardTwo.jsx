/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Form, Input, Button, Progress, Typography } from "antd";
import { ArrowRightOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { setOnboardingInfo } from "../../../store/slices/currentUserSlice";

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

export default function UserProfileForm({ setFormTab }) {
  const [selectedRoles, setSelectedRoles] = useState('');

  const dispatch = useDispatch();

  const onFinish = (values) => {

    dispatch(setOnboardingInfo({...values, designation: selectedRoles}));
    setFormTab(3);
    console.log("Form values:", { ...values, designation: selectedRoles });
  };

  const toggleRole = (role) => {
    setSelectedRoles(role)
  };

  return (
    // <div className='w-full h-full'>

    <div className="w-[600px] h-full mx-auto p-6 shadow-lg rounded-3xl">
      <Progress
        percent={25}
        showInfo={false}
        strokeColor="#723D9E"
        trailColor="#ECE6F0"
      />
      <div className="py-8">

      <Title level={2} className=" mb-2 !text-xl !font-bold">
        Let&apos;s Get to Know You
      </Title>
      <div className="text-gray-400 font-lora">
        <p className="font-lora">
          By default this will be used to personalize your dashboard.
        </p>
        <p className="font-lora">
          You can adjust these settings now or change them later from your
          profile.
        </p>
      </div>
      </div>


      <Form layout="vertical" onFinish={onFinish}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Form.Item
            name="first_name"
            label="First Name"
            rules={[
              // { required: true, message: "Please input your first name!" },
            ]}
          >
            <Input className="!rounded-2xl !h-[48px]" />
          </Form.Item>
          <Form.Item
            name="last_name"
            label="Last Name"
            rules={[
              // { required: true, message: "Please input your last name!" },
            ]}
          >
            <Input className="!rounded-2xl !h-[48px]" />
          </Form.Item>
        </div>

        <Form.Item name="designation" label="What Describes you the best?">
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
            {jobRoles.map((role) => (
              <Button
                key={role}
                className={`text-left px-3 py-2 h-[48px] rounded-2xl hover:!bg-hover hover:!text-primary hover:!border-primary border ${
                  selectedRoles == role
                    ? "!bg-primary !text-white !border-primary "
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
          <div className="w-full gap-5 flex justify-between items-center">
            <Button
              type="primary"
              onClick={() => setFormTab(1)}
              className="w-full bg-primary_light  border-primary text-primary hover:!bg-secondary hover:!text-primary hover:!border-primary border rounded-2xl h-12 text-lg mt-4"
            >
              <ArrowLeftOutlined />
              Back 
            </Button>

            <Button
              type="primary"
              htmlType="submit"
              className="w-full bg-primary hover:!bg-hover hover:!text-primary hover:!border-primary border rounded-2xl h-12 text-lg mt-4"
            >
              Continue <ArrowRightOutlined />
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
    // </div>
  );
}
