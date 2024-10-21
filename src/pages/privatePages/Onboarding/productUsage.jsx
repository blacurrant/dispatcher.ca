import React, { useState } from "react";
import { Form, Button, Progress, Typography, Upload, Radio } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import {
  PreEventAnalysis,
  TakeNotes,
  FindLeads,
  PostEvent,
  SetGoals,
  MoreIcon,
} from "../../../utils/images";
import { useDispatch, useSelector } from "react-redux";
import {
  completedOnboarding,
  setOnboardingInfo,
} from "../../../store/slices/currentUserSlice";
import { createUserApi } from "../../../api/Api_collection";

const { Title, Paragraph } = Typography;

const businessOptions = [
  { icon: <PreEventAnalysis />, label: "Pre-event Analysis" },
  { icon: <TakeNotes />, label: "Take notes on leads during the event" },
  { icon: <FindLeads />, label: "Find leads at the upcoming event" },
  { icon: <PostEvent />, label: "Post-event ROI calculation" },
  { icon: <SetGoals />, label: "Set goals for the upcoming event" },
  { icon: <MoreIcon />, label: "Other" },
];

export default function ProductUsageForm({
  setFormTab,
  setFormDrawer,
  setIsModalVisible,
}) {
  const [selectedBusiness, setSelectedBusiness] = useState(null);
  const [hasSponsored, setHasSponsored] = useState(null);

  const dispatch = useDispatch();
  const createUser = useSelector(
    (state) => state.currentUserSlice?.onboardingInfo
  );
  const userInfo = useSelector((state) => state?.currentUserSlice?.userInfo);
  console.log(userInfo, "createUser");

  const onFinish = async (values) => {
    dispatch(
      setOnboardingInfo({
        ...values,
        platform_usage_type: selectedBusiness,
        is_sponsor: hasSponsored,

      })
    );

    const user = {
      ...createUser,
      platform_usage_type: selectedBusiness,
      is_sponsor: hasSponsored,
      email: userInfo?.email,
      user_id: userInfo?.uid,
      is_active: true,
    };
    const res = await createUserApi(user);
    console.log("API response:", res);

    dispatch(completedOnboarding(true));
    setFormDrawer(false);
    setIsModalVisible(true); // Open the modal
    console.log("Form values:", {
      ...values,
      businessDescription: selectedBusiness,
    });
    dispatch(setOnboardingInfo(null));
  };

  return (
    <div className="w-[600px] mx-auto p-6 shadow-lg rounded-3xl">
      <Progress
        percent={75}
        showInfo={false}
        strokeColor="#723D9E"
        trailColor="#ECE6F0"
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
        Pick your event marketing goals
        </p>
        <Form.Item>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {businessOptions.map((option) => (
              <Button
                key={option.label}
                className={`h-24 w-full text-wrap text-center flex flex-col items-center justify-center rounded-2xl hover:!bg-hover hover:!text-primary hover:!border-primary border ${
                  selectedBusiness && selectedBusiness.includes(option.label)
                    ? "!bg-primary text-white border-primary "
                    : "bg-white text-gray-500 border-gray-300 hover:border-primary"
                }`}
                onClick={() => {
                  setSelectedBusiness(prevSelected => {
                    if (!prevSelected) return [option.label];
                    return prevSelected.includes(option.label)
                      ? prevSelected.filter(item => item !== option.label)
                      : [...prevSelected, option.label];
                  });
                }}
              >
                <p
                  className={`text-sm ${
                    selectedBusiness && selectedBusiness.includes(option.label)
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
                  className={`w-full h-[48px] rounded-2xl hover:!bg-hover hover:!text-primary hover:!border-primary border ${
                    hasSponsored === true ? "bg-primary " : ""
                  }`}
                >
                  Yes
                </Button>
                <Button
                  type={hasSponsored === false ? "primary" : "default"}
                  onClick={() => setHasSponsored(false)}
                  className={`w-full h-[48px] rounded-2xl hover:!bg-hover hover:!text-primary hover:!border-primary border ${
                    hasSponsored === false ? "bg-primary " : ""
                  }`}
                >
                  No
                </Button>
              </div>
            </div>
          </Form.Item>
        </div>

        <Form.Item>
          <div className="w-full gap-5 flex justify-between items-center">
            <Button
              type="primary"
              onClick={() => setFormTab(3)}
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
              Submit <ArrowRightOutlined />
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
}
