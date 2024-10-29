import React from "react";
import { Collapse } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

const people = [
  {
    name: "James Bill",
    title: "Community Manager",
    company: "Transak",
    description:
      "Opportunity to covert Transak for your product Galaxe Quest, for community onboarding.",
    linkedin: "https://linkedin.com/in/jamesbill",
    website: "https://jamesbill.com",
    companySize: "Small (10-50pp)",
  },
  {
    name: "Aditya Gurjar",
    title: "AI Engineer",
    company: "Bindbee",
    description:
      "Opportunity to covert Transak for your product Galaxe Quest, for community onboarding.",
    linkedin: "https://linkedin.com/in/jamesbill",
    website: "https://jamesbill.com",
    companySize: "Small (10-50pp)",
  },
  {
    name: "Stephini Leyman",
    title: "Finance Analyst",
    company: "Dao4",
    description:
      "Opportunity to covert Transak for your product Galaxe Quest, for community onboarding.",
    linkedin: "https://linkedin.com/in/jamesbill",
    website: "https://jamesbill.com",
    companySize: "Small (10-50pp)",
  },
  {
    name: "Paul Jacobs",
    title: "Product Manager",
    company: "Telescope",
    description:
      "Opportunity to covert Transak for your product Galaxe Quest, for community onboarding.",
    linkedin: "https://linkedin.com/in/jamesbill",
    website: "https://jamesbill.com",
    companySize: "Small (10-50pp)",
  },
];

export default function Partners() {
  return (
    <div className="w-full h-fit flex flex-col gap-2">
      <h1>Top 20 Potential Partners</h1>
      <Collapse
        bordered={false}
        expandIcon={({ isActive }) => (
          <CaretRightOutlined rotate={isActive ? 90 : 0} />
        )}
        className="bg-white w-full"
      >
        {people.map((person, index) => (
          <Panel
            key={index}
            header={
              <div className="flex items-center">
                <span className="font-semibold">{person.name}</span>
                <span className="mx-2">|</span>
                <span className="text-gray-600">
                  {person.title} @{person.company}
                </span>
              </div>
            }
            className="mb-2 rounded-lg border border-gray-200 bg-white overflow-hidden"
          >
            {person.description && (
              <p className="text-gray-700 mb-2">{person.description}</p>
            )}
            <div className="flex items-center text-sm text-blue-500">
              {person.linkedin && (
                <a href={person.linkedin} className="mr-2 hover:underline">
                  LinkedIn
                </a>
              )}
              {person.website && (
                <>
                  <span className="mr-2">|</span>
                  <a href={person.website} className="mr-2 hover:underline">
                    Website
                  </a>
                </>
              )}
              {person.companySize && (
                <>
                  <span className="mr-2">|</span>
                  <span className="text-gray-600">
                    Company Size: {person.companySize}
                  </span>
                </>
              )}
            </div>
          </Panel>
          
        ))}
      </Collapse>
    </div>
  );
}
