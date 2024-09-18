import React, { useState } from 'react'
// import { cn } from "@/lib/utils"
import { cn } from '../lib/utils'

const events = [
  { date: 'Dec', month: 'Dec', day: '07', name: 'DevCon 2024', duration: '3 Months' },
  { date: 'Nov', month: 'Nov', day: '11', name: 'Web Summit 2024', duration: '2 Months' },
  { date: 'Aug', month: 'Aug', day: '24', name: 'SaaSCon 2024', duration: '3 Days ago' },
]

export default function Timeline() {
  const [activeEvent, setActiveEvent] = useState(events[1])

  return (
    <div className="w-full max-w-md mx-auto p-6 space-y-4">
      {events.map((event, index) => (
        <div
          key={index}
          className={cn(
            "flex items-center p-4 rounded-lg cursor-pointer transition-all duration-200 ease-in-out",
            activeEvent === event
              ? "bg-purple-100 relative"
              : "hover:bg-gray-100"
          )}
          onClick={() => setActiveEvent(event)}
        >
          <div className="flex-shrink-0 w-16 text-left">
            <div className={cn(
              "text-sm font-medium",
              activeEvent === event ? "text-purple-600" : "text-gray-500"
            )}>
              {event.date}
            </div>
            <div className={cn(
              "text-3xl font-bold",
              activeEvent === event ? "text-purple-800" : "text-gray-800"
            )}>
              {event.day}
            </div>
          </div>
          <div className="ml-4 flex-grow">
            <div className="text-lg font-semibold text-gray-800">{event.name}</div>
            <div className="text-sm text-gray-500">{event.duration}</div>
          </div>
          {activeEvent === event && (
            <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-l-[16px] border-l-purple-100"></div>
          )}
        </div>
      ))}
    </div>
  )
}