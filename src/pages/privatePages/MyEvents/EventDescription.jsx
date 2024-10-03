import React from "react";
import { Typography, Button, Divider, Breadcrumb } from "antd";
import {
  BarChartOutlined,
  EditOutlined,
  LinkOutlined,
  EnvironmentOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const { Title, Text } = Typography;

export default function EventPage() {
  const params = useParams();
  console.log(params);

  const location = useLocation();
  console.log(location?.state);

  const navigate = useNavigate();

  return (
    <div className="h-[90vh] flex flex-col overflow-auto bg-purple-50">
      <div
        className="relative h-[50vh] bg-cover bg-center"
        style={{
          backgroundImage: "url('/placeholder.svg?width=1200')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between p-8">
        <Breadcrumb
          className="!text-white cursor-pointer"
          items={[
            {
              title: "My Events",
              href: "/events",
            },
            {
              title: location?.state?.eventName,
            },
          ]}
        />
        <div className="flex flex-col">

          <p className="!text-white text-5xl font-semibold">
            {location?.state?.eventName}
          </p>
          <p className="text-white text-lg font-light">
            Join us for the biggest tech event of the year
          </p>
        </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Title level={2}>Event Details</Title>
            <div className="space-y-4">
              <div className="flex items-center">
                <ClockCircleOutlined className="mr-2 text-blue-500" />
                <Text>
                  {location?.state?.month} {location?.state?.date}, 2023 | 9:00
                  AM - 6:00 PM
                </Text>
              </div>
              <div className="flex items-center">
                <EnvironmentOutlined className="mr-2 text-blue-500" />
                <Text>San Francisco Convention Center/ Online</Text>
              </div>
              <div className="flex items-center">
                <LinkOutlined className="mr-2 text-blue-500" />
                <a
                  href="https://techconference2023.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  https://techconference2023.com
                </a>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <Button
              type="primary"
              icon={<BarChartOutlined />}
              size="large"
              className="w-full h-12 text-lg bg-primary hover:!bg-hover hover:!text-primary hover:!border-primary border rounded-2xl"
              onClick={() => navigate("/analytics")}
            >
              Event Analytics
            </Button>
            <Button
              icon={<EditOutlined />}
              size="large"
              className="w-full h-12 text-lg rounded-2xl hover:!bg-hover hover:!text-primary hover:!border-primary border"
            >
              Edit Event
            </Button>
          </div>
        </div>

        <Divider />

        <div className="mt-8">
          <Title level={3}>Event Description</Title>
          <Text>
            Tech Conference 2023 brings together industry leaders, innovators,
            and tech enthusiasts for three days of cutting-edge presentations,
            workshops, and networking opportunities. Explore the latest trends
            in AI, blockchain, cybersecurity, and more. Don't miss this chance
            to shape the future of technology!
          </Text>
        </div>

        <div className="mt-8">
          <Title level={3}>Your Booth</Title>
        </div>
      </div>

      <footer className="mt-auto bg-gray-100 py-4 text-center">
        <Text className="text-gray-600">@melloup</Text>
      </footer>
    </div>
  );
}
