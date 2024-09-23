import React, { useState } from 'react';
import { Tabs, Select, Card, Button, Divider } from 'antd';
import { RightOutlined, CalendarOutlined, PlusOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;
const { Option } = Select;

const trips = [
  {
    id: 1,
    date: '10',
    month: 'Jan',
    retreatName: 'Retreat with Design Team',
    duration: '7 Days, 6 Nights',
    hotelName: 'PM Fiasco 2025',
    description: 'Relish a unique blend of relaxation and luxury on this exotic vacation at the Standard Huruvalhi, Maldives.',
    dateRange: 'Fri, 11 Jan 2024 - Sat, 15 Jan 2024',
    image: '/placeholder.svg?height=200&width=300',
  },
  {
    id: 2,
    date: '15',
    month: 'Feb',
    retreatName: 'Marketing Team Offsite',
    duration: '5 Days, 4 Nights',
    hotelName: 'Webdev Summit 2024',
    description: 'Immerse yourself in nature and team building activities at this sustainable eco-resort in Bali.',
    dateRange: 'Mon, 15 Feb 2024 - Fri, 19 Feb 2024',
    image: '/placeholder.svg?height=200&width=300',
  },
    {
    id: 3,
    date: '17',
    month: 'Feb',
    retreatName: 'Marketing Team Offsite',
    duration: '5 Days, 4 Nights',
    hotelName: 'Webdev Summit 2024',
    description: 'Immerse yourself in nature and team building activities at this sustainable eco-resort in Bali.',
    dateRange: 'Mon, 15 Feb 2024 - Fri, 19 Feb 2024',
    image: '/placeholder.svg?height=200&width=300',
  },
];

export default function MyEvents() {
  const [activeTab, setActiveTab] = useState('upcoming');

  const renderTrip = (trip) => (
    <Card key={trip.id} className="w-full shadow-md">
      <div className="w-full flex flex-col md:flex-row">
        <div className="md:w-1/4 flex items-center justify-evenly md:mb-0">
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-700">{trip.date}</div>
            <div className="text-xl text-gray-500">{trip.month}</div>
          </div>
          <Divider type="vertical" solid className="border-2 h-16 text-center border-primary border-opacity-25 rounded-full" />
        </div>
        <div className="md:w-3/4 flex flex-col md:flex-row">
          <div className="md:w-2/3 pr-4 flex flex-col gap-2">
            <h3 className="text-xl font-semibold ">{trip.retreatName}</h3>
            <p className="text-gray-500 ">{trip.duration}</p>
            <h4 className="text-lg font-semibold ">{trip.hotelName}</h4>
            <p className="text-gray-600 ">{trip.description}</p>
            <p className="text-gray-500 text-sm">
              <CalendarOutlined className="mr-2" />
              {trip.dateRange}
            </p>
          </div>
          <div className="md:w-1/3 flex flex-col gap-3 md:mt-0">
            <img src={trip.image} alt={trip.hotelName} className="w-full h-40 object-cover rounded-lg border border-primary" />
            <Button type="default" className=" w-full flex items-center justify-center" icon={<RightOutlined />}>
              Analytics
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );

  return (
    <div className="w-full max-h-[90vh] mx-auto p-6 bg-white overflow-auto">
      <div className="w-full flex justify-between items-center pb-6">
        <h1 className="text-3xl font-bold">My Events</h1>
        <Button
          size="large"
          type="primary"
          icon={<PlusOutlined />}
          className="w-fit bg-primary hover:bg-purple-700 border-none rounded-2xl px-12"
        >
          Add New Event
        </Button>      </div>
      <Tabs 
        activeKey={activeTab} 
        onChange={setActiveTab}
        className="custom-tabs"

      >
        <TabPane className='flex flex-col gap-5' tab="Upcoming Events" key="upcoming">
          {trips.map(renderTrip)}
        </TabPane>
        <TabPane className='flex flex-col gap-5' tab="Past Events" key="past">
          {trips.map(renderTrip)}
        </TabPane>
      </Tabs>
    </div>
  );
}
