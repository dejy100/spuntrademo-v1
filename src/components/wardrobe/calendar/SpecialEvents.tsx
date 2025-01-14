import React from 'react';

interface SpecialDate {
  date: string;
  name: string;
  outfit: string;
}

interface SpecialEventsProps {
  events: SpecialDate[];
}

export default function SpecialEvents({ events }: SpecialEventsProps) {
  return (
    <div className="mt-6 space-y-2">
      <h4 className="font-medium">Upcoming Special Events</h4>
      {events.map(event => (
        <div
          key={event.date}
          className="flex items-center justify-between p-3 bg-purple-50 rounded-lg"
        >
          <div>
            <p className="font-medium text-purple-600">{event.name}</p>
            <p className="text-sm text-gray-600">{event.date}</p>
          </div>
          <p className="text-sm font-medium">{event.outfit}</p>
        </div>
      ))}
    </div>
  );
}