"use client"

import { useState } from 'react'
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight, Linkedin } from 'lucide-react'
import { CaretRightOutlined } from "@ant-design/icons";

import { Breadcrumb, Collapse } from 'antd'

const { Panel } = Collapse;

// Mock data
const attendees = [
  {
    name: "James Bill",
    title: "Community Manager",
    company: "Transak",
    opportunity: "Opportunity to covert Transak for your product Galaxe Quest, for community onboarding. | Get warm intro from Jack Bill & Ani William. |",
    linkedin: "https://linkedin.com/in/jamesbill",
    website: "https://transak.com",
    companySize: "Small (10-50pp)"
  },
  {
    name: "Aditya Gurjar",
    title: "AI Engineer",
    company: "Bindbee"
  },
  {
    name: "Stephini Leyman",
    title: "Finance Analyst",
    company: "Dao4"
  },
  {
    name: "Paul Jacobs",
    title: "Product Manager",
    company: "Telescope"
  },
  {
    name: "Yashraaj Balaga",
    title: "Co-founder",
    company: "CloudBees"
  },
  {
    name: "Andrew Huston",
    title: "Associate Manager",
    company: "Polygon"
  },
  {
    name: "Laureen Smith",
    title: "DevOps Engineer",
    company: "Dune"
  },
  {
    name: "Jessica Gates",
    title: "DevOps Manager",
    company: "Affirm"
  },
  {
    name: "John Doe",
    title: "Software Engineer",
    company: "Acme Corp"
  },
  {
    name: "Jane Doe",
    title: "Product Designer",
    company: "Acme Corp"
  },
  {
    name: "Jack Smith",
    title: "Marketing Manager",
    company: "Acme Corp"
  },
  {
    name: "Jill Smith",
    title: "HR Manager",
    company: "Acme Corp"
  }
]

export default function Component() {
  const [expandedIndex, setExpandedIndex] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [visibleAttendees, setVisibleAttendees] = useState(attendees.slice(0, 8)) // Assuming 8 attendees per page

  const totalPages = Math.ceil(attendees.length / 8)

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage)
    setVisibleAttendees(attendees.slice((newPage - 1) * 8, newPage * 8))
  }

  return (
    <div className="h-[90vh] w-full bg-white  overflow-auto py-4">
      <Breadcrumb
        className="!text-black px-6 cursor-pointer"
        items={[
          {
            title: "Analytics",
            href: "/analytics",
          },
          {
            title: "Detailed analytics",
          },
        ]}
      />      <div className="w-full h-full mx-auto bg-white">
        <div className="p-6">
          <h2 className="text-3xl font-light mb-4">Attendees that match your goal and target audience</h2>
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-500">
              {currentPage} - {totalPages} pages
            </span>
            <div className="flex space-x-2">
              <button
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                className="p-1 rounded-full hover:!bg-hover hover:!text-primary hover:!border-primary border"
                disabled={currentPage === 1}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                className="p-1 rounded-full hover:!bg-hover hover:!text-primary hover:!border-primary border"
                disabled={currentPage === totalPages}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          <Collapse
            bordered={false}
            expandIcon={({ isActive }) => (
              <CaretRightOutlined rotate={isActive ? 90 : 0} />
            )}
            className="bg-white w-full"
          >
            {visibleAttendees.map((attendee, index) => (
              <Panel
                key={index}
                header={
                  <div className="flex items-center">
                    <span className="font-semibold">{attendee.name}</span>
                    <span className="mx-2">|</span>
                    <span className="text-gray-600">
                      {attendee.title} @{attendee.company} | {attendee.country}
                    </span>

                    <span className="mx-2 text-[#666666]">|</span>
                    <div className="flex items-center text-sm text-blue-500">
                      {attendee.companySize && (
                        <>
                          <span className="text-gray-600">
                            Company Size: {attendee.companySize} | Estimated ARR:{" "}
                            {attendee.estimatedArr}
                          </span>
                        </>
                      )}
                      <span className="mx-2 text-[#666666]">|</span>

                      {attendee.linkedin && (
                        <a href={attendee.linkedin} className="mr-2 hover:underline">
                          LinkedIn
                        </a>
                      )}
                      <span className="mr-2 text-[#666666]">|</span>
                      {attendee.website && (
                        <>
                          <a href={attendee.website} className="mr-2 hover:underline">
                            Website
                          </a>
                        </>
                      )}
                    </div>
                  </div>
                }
                className="mb-2 rounded-lg border border-gray-200 bg-white overflow-hidden"
              >
                {attendee.opportunity && (
                  <p className="text-gray-700 mb-2 px-6">{attendee.opportunity}</p>
                )}
              </Panel>
            ))}
          </Collapse>
          
        </div>
      </div>
    </div>
  )
}