import React from 'react';
import { Clock, TrendingUp, AlertCircle } from 'lucide-react';
import { Activity } from '../types';

interface StatsProps {
  activities: Activity[];
}

export function Stats({ activities }: StatsProps) {
  const totalTime = activities.reduce((acc, curr) => acc + curr.duration, 0);
  const totalHours = Math.floor(totalTime / 3600);
  const totalMinutes = Math.floor((totalTime % 3600) / 60);

  const mostWastedCategory = activities.reduce((acc, curr) => {
    acc[curr.category] = (acc[curr.category] || 0) + curr.duration;
    return acc;
  }, {} as Record<string, number>);

  const topCategory = Object.entries(mostWastedCategory).sort((a, b) => b[1] - a[1])[0];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex items-center gap-2 text-blue-500 mb-2">
          <Clock size={20} />
          <h3 className="font-semibold">Total Time Wasted</h3>
        </div>
        <p className="text-2xl font-bold text-gray-800">
          {totalHours}h {totalMinutes}m
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex items-center gap-2 text-green-500 mb-2">
          <TrendingUp size={20} />
          <h3 className="font-semibold">Most Time-Wasting Activity</h3>
        </div>
        <p className="text-2xl font-bold text-gray-800">
          {topCategory ? topCategory[0] : 'No data'}
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex items-center gap-2 text-yellow-500 mb-2">
          <AlertCircle size={20} />
          <h3 className="font-semibold">Activities Logged</h3>
        </div>
        <p className="text-2xl font-bold text-gray-800">
          {activities.length}
        </p>
      </div>
    </div>
  );
}