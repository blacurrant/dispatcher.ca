"use client"

import { useState } from 'react'
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight, Linkedin } from 'lucide-react'

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
  }
]

export default function Component() {
  const [expandedIndex, setExpandedIndex] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(attendees.length / 5)

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <div className="h-[90vh] w-full bg-gray-100  overflow-auto">
      <div className="w-full h-full mx-auto bg-white">
        <div className="p-6">
          <h2 className="text-3xl font-light mb-4">Attendees Expected that match your goal and target audience</h2>
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-500">
              {currentPage} - {totalPages} pages
            </span>
            <div className="flex space-x-2">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                className="p-1 rounded-full hover:!bg-hover hover:!text-primary hover:!border-primary border"
                disabled={currentPage === 1}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                className="p-1 rounded-full hover:!bg-hover hover:!text-primary hover:!border-primary border"
                disabled={currentPage === totalPages}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          {attendees.map((attendee, index) => (
            <div key={index} className="bg-opacity-5 bg-primary border border-primary border-opacity-10 rounded-xl my-2">
              <div
                className="py-4 px-2 flex justify-between items-center cursor-pointer "
                onClick={() => toggleExpand(index)}
              >
                <div>
                  <h3 className="font-semibold">{attendee.name} | {attendee.title} @{attendee.company}</h3>
                </div>
                {expandedIndex === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </div>
              {expandedIndex === index && (
                <div className="px-2 pb-4">
                  <p className="text-sm text-gray-600 mb-2">{attendee.opportunity}</p>
                  <div className="flex items-center space-x-4 text-sm">
                    <a href={attendee.linkedin} className="text-blue-600 hover:underline">LinkedIn</a>
                    <a href={attendee.website} className="text-blue-600 hover:underline">Website</a>
                    <span>Company Size: {attendee.companySize}</span>
                  </div>
                  <div className="mt-2">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                      <Linkedin className="w-4 h-4 mr-1" />
                      LinkedIn
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}