import React, { useState, useEffect } from 'react';
import { Activity } from './types';
import { ActivityCard } from './components/ActivityCard';
import { AddActivityForm } from './components/AddActivityForm';
import { Stats } from './components/Stats';
import { Clock } from 'lucide-react';

function App() {
  const [activities, setActivities] = useState<Activity[]>(() => {
    const saved = localStorage.getItem('timeWasterActivities');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('timeWasterActivities', JSON.stringify(activities));
  }, [activities]);

  const handleAddActivity = (name: string, category: string, duration: number) => {
    const newActivity: Activity = {
      id: crypto.randomUUID(),
      name,
      category,
      duration,
      timestamp: Date.now(),
    };
    setActivities(prev => [newActivity, ...prev]);
  };

  const handleDeleteActivity = (id: string) => {
    setActivities(prev => prev.filter(activity => activity.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-6">
        <header className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Clock size={32} className="text-blue-500" />
            <h1 className="text-3xl font-bold text-gray-800">Time Waster Tracker</h1>
          </div>
          <p className="text-gray-600">Track and analyze your time-wasting activities</p>
        </header>

        <Stats activities={activities} />
        <AddActivityForm onAdd={handleAddActivity} />

        <div className="space-y-4">
          {activities.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              No activities logged yet. Start tracking your time-wasting activities!
            </div>
          ) : (
            activities.map(activity => (
              <ActivityCard
                key={activity.id}
                activity={activity}
                onDelete={handleDeleteActivity}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;