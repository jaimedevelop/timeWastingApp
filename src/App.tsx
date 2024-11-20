import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { format } from 'date-fns';
import Sidebar from './components/Sidebar';
import { Stats } from './components/Stats';
import { AddActivityForm } from './components/AddActivityForm';
import { ActivityCard } from './components/ActivityCard';
import { Activity } from './types';

const App = () => {
  const [activities, setActivities] = useState<Activity[]>([]);

  const handleAddActivity = (name: string, category: string, duration: number) => {
    const newActivity = {
      id: Date.now().toString(),
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
    <Router>
      <div className="flex min-h-screen bg-gray-900 text-gray-100">
        <Sidebar />
        <main className="flex-1 ml-64 p-8">
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <h1 className="text-3xl font-bold mb-8">Time Waster Tracker</h1>
                  <Stats activities={activities} />
                  <AddActivityForm onAdd={handleAddActivity} />
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {activities.map((activity) => (
                      <ActivityCard
                        key={activity.id}
                        activity={activity}
                        onDelete={handleDeleteActivity}
                      />
                    ))}
                  </div>
                </div>
              }
            />
            <Route
              path="/statistics"
              element={
                <div>
                  <h1 className="text-3xl font-bold mb-8">Statistics</h1>
                  <Stats activities={activities} />
                  <div className="bg-gray-800 rounded-lg shadow-md p-6 border border-gray-700">
                    <h2 className="text-xl font-semibold mb-4">Detailed Statistics</h2>
                    <p className="text-gray-300">
                      Total activities logged: {activities.length}
                    </p>
                    <p className="text-gray-300">
                      Total time wasted:{' '}
                      {Math.floor(
                        activities.reduce((acc, curr) => acc + curr.duration, 0) / 3600
                      )}{' '}
                      hours
                    </p>
                  </div>
                </div>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;