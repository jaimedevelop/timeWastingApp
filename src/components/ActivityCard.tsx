import React from 'react';
import { Clock, Trash2 } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { Activity } from '../types';

interface ActivityCardProps {
  activity: Activity;
  onDelete: (id: string) => void;
}

export function ActivityCard({ activity, onDelete }: ActivityCardProps) {
  const hours = Math.floor(activity.duration / 3600);
  const minutes = Math.floor((activity.duration % 3600) / 60);

  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{activity.name}</h3>
          <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
            {activity.category}
          </span>
        </div>
        <button
          onClick={() => onDelete(activity.id)}
          className="text-gray-400 hover:text-red-500 transition-colors"
        >
          <Trash2 size={18} />
        </button>
      </div>
      <div className="flex items-center gap-2 text-gray-600">
        <Clock size={16} />
        <span className="text-sm">
          {hours > 0 ? `${hours}h ` : ''}{minutes}m wasted
        </span>
      </div>
      <div className="text-xs text-gray-400 mt-2">
        Added {formatDistanceToNow(activity.timestamp)} ago
      </div>
    </div>
  );
}