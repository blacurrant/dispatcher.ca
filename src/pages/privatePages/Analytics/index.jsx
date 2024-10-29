import React from "react";
import AttendeeDashboard from "../../../components/AttendeesBreakdown";
import PeopleAccordion from "./LeadInfo";
import { Card, Divider, Typography } from "antd";
import Partners from "./Partners";

const { Title, Text } = Typography;

const Analytics = () => {
  return (
    <div className="w-[100%] h-[90vh] bg-white overflow-auto">
      <AttendeeDashboard />

      {/* <div className=" w-full px-6 space-y-2">
        <div>
          <Text className="text-gray-600">Goal Breakdown: For </Text>
          <Text strong className="text-lg italic">
            $50,000 in revenue
          </Text>
          <Text className="text-gray-600"> from the event with </Text>
          <Text strong className="text-lg italic">
            ACV
          </Text>
          <Text className="text-gray-600"> (average customer value) </Text>
          <Text strong className="text-lg italic">
            of 10,000
          </Text>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex w-1/3 justify-between px-2 border border-primary bg-white border-opacity-60 py-2 rounded-2xl shadow-md">
            <div className="flex flex-col ">
              <Text className="text-sm text-gray-500">
                Recommended Event Budget
              </Text>
              <Text className="text-xs text-gray-400">with 3x ROI</Text>
            </div>
            <p className="text-3xl font-semibold text-primary m-0">$16,000</p>
          </div>

          <Divider type="vertical" className="h-16" />

          <div className="flex w-1/3 items-center justify-between px-2 border border-primary bg-white border-opacity-60 py-2 rounded-2xl shadow-md">
            <Text className="text-sm text-gray-500"># New Leads to Target</Text>
            <p className="text-3xl font-semibold text-primary">50</p>
          </div>

          <Divider type="vertical" className="h-16" />

          <div className="flex w-1/3 justify-between px-2 border border-primary bg-white border-opacity-60 py-2 rounded-2xl shadow-md
          ">
            <div className="flex flex-col ">
              <Text className="text-sm text-gray-500"># Hot Leads</Text>
              <Text className="text-xs text-gray-400">
                with win rate of 10%
              </Text>
            </div>
            <p className="text-3xl font-semibold text-primary m-0">5</p>
          </div>
        </div>
      </div> */}
      <div className="flex w-full h-fit justify-between p-4 gap-4">
        {/* <div className="w-full h-fit overflow-auto"> */}
          <PeopleAccordion />
        {/* </div> */}
        {/* <Partners /> */}
      </div>
    </div>
  );
};

export default Analytics;
