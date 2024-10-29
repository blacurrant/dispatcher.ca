import React from "react";
import { Collapse } from "antd";
import { CaretRightOutlined, MailFilled } from "@ant-design/icons";

const { Panel } = Collapse;

const people = [
  {
    name: "James Bill",
    title: "Community Manager",
    company: "Transak",
    description: (
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <span className="font-semibold">What They Do:</span> They specialize
          in marketing measurement and analytics, helping brands understand
          their performance and optimize strategies.
        </li>
        <li>
          <span className="font-semibold">Why They Need You:</span> Foundever’s
          services can support Billy Grace in managing customer feedback and
          inquiries, enhancing service delivery and client satisfaction.
        </li>
        <li>
          <span className="font-semibold">Timing:</span> As they grow their
          client base, enhancing customer service processes is vital for
          maintaining high satisfaction levels.
        </li>
        <li>
          <span className="font-semibold">
            Possible CX Solutions Currently Used:
          </span>{" "}
          Intercom, HubSpot
        </li>
      </ul>
    ),

    linkedin: "https://linkedin.com/in/jamesbill",
    website: "https://jamesbill.com",
    companySize: "1-50",
    country: "Portugal",
    estimatedArr: "$1M - $10M",
  },
  {
    name: "Aditya Gurjar",
    title: "AI Engineer",
    company: "Bindbee",
    description:
      "Opportunity to covert Transak for your product Galaxe Quest, for community onboarding.",
    linkedin: "https://linkedin.com/in/jamesbill",
    website: "https://jamesbill.com",
    companySize: "1-50",
    country: "Portugal",
    estimatedArr: "$1M - $10M",
  },
  {
    name: "Stephini Leyman",
    title: "Finance Analyst",
    company: "Dao4",
    description:
      "Opportunity to covert Transak for your product Galaxe Quest, for community onboarding.",
    linkedin: "https://linkedin.com/in/jamesbill",
    website: "https://jamesbill.com",
    companySize: "1-50",
    country: "Portugal",
    estimatedArr: "$1M - $10M",
  },
  {
    name: "Paul Jacobs",
    title: "Product Manager",
    company: "Telescope",
    description:
      "Opportunity to covert Transak for your product Galaxe Quest, for community onboarding.",
    linkedin: "https://linkedin.com/in/jamesbill",
    website: "https://jamesbill.com",
    companySize: "1-50",
    country: "Portugal",
    estimatedArr: "$1M - $10M",
  },
];

export default function PeopleAccordion() {
  return (
    <div className="w-full h-fit flex flex-col gap-2">
      <h1>Top 20 Potential Leads</h1>
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
                  {person.title} @{person.company} | {person.country}
                </span>

                <span className="mx-2 text-[#666666]">|</span>
                <div className="flex items-center text-sm text-blue-500">
                  {person.companySize && (
                    <>
                      <span className="text-gray-600">
                        Company Size: {person.companySize} | Estimated ARR:{" "}
                        {person.estimatedArr}
                      </span>
                    </>
                  )}
                  <span className="mx-2 text-[#666666]">|</span>

                  {person.linkedin && (
                    <a href={person.linkedin} className="mr-2 hover:underline">
                      LinkedIn
                    </a>
                  )}
                  <span className="mr-2 text-[#666666]">|</span>
                  {person.website && (
                    <>
                      <a href={person.website} className="mr-2 hover:underline">
                        Website
                      </a>
                    </>
                  )}
                </div>
              </div>
            }
            className="mb-2 rounded-lg border border-gray-200 bg-white overflow-hidden"
          >
            {person.description && (
              <p className="text-gray-700 mb-2 px-6">{person.description}</p>
            )}
          </Panel>
        ))}
      </Collapse>
    </div>
  );
}
