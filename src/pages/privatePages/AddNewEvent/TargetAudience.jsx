import React, { useState } from 'react';
import { Form, Button, Typography } from 'antd';
import { IoSaveOutline } from "react-icons/io5";

const { Title, Paragraph } = Typography;

const questions = [
  {
    question: "Select all attendees roles you want to target at the event",
    options: ["Developers", "Startups", "Investors", "Marketing professionals", "Others"],
  },
//   {
//     question: "Select all demographic specifications of your target attendees",
//     options: ["Age", "Profession", "Location", "Company size", "Others"],
//   },
  {
    question: "Select all engagement tactics you plan to use at the event",
    options: ["Networking sessions", "One-on-one meetings", "Workshops", "Panel discussions", "Others"],
  },
  {
    question: "Select all segments you want to target at the event",
    options: ["Top leads", "Potential partners", "Decision-makers", "Industry influencers", "Others"],
  },
];

export default function TargetAudienceForm() {
  const [form] = Form.useForm();
  const [selectedOptions, setSelectedOptions] = useState({});

  const onFinish = (values) => {
    console.log('Form values:', values);
  };

  const toggleOption = (questionIndex, option) => {
    setSelectedOptions((prev) => {
      const currentOptions = prev[`question_${questionIndex}`] || [];
      const updatedOptions = currentOptions.includes(option)
        ? currentOptions.filter((item) => item !== option)
        : [...currentOptions, option];
      
      return {
        ...prev,
        [`question_${questionIndex}`]: updatedOptions,
      };
    });
  };

  return (
    <div className="w-full mx-auto  bg-white ">
      <Title level={2} className="mb-6">Target Audience at the Event</Title>
      <Form
        form={form}
        name="targetAudience" 
        onFinish={onFinish}
        layout="vertical"
      >
        {questions.map((q, index) => (
          <Form.Item
            key={index}
            name={`question_${index}`}
            label={<Paragraph strong>{q.question}</Paragraph>}
            className="mb-8"
          >
            <div className="flex flex-wrap gap-4">
              {q.options.map((option, optionIndex) => (
                <Button
                  key={optionIndex}
                  type={selectedOptions[`question_${index}`]?.includes(option) ? "primary" : "default"}
                  className="hover:!bg-hover hover:!text-primary hover:!border-primary border rounded-2xl h-[48px] w-[200px]"
                  onClick={() => toggleOption(index, option)}
                >
                  {option}
                </Button>
              ))}
            </div>
          </Form.Item>
        ))}
        <Form.Item>
          <Button type="primary" htmlType="submit" className="rounded-2xl h-[48px] px-8">
            <IoSaveOutline />   
            Save
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}