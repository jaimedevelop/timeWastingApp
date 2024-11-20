import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { format } from 'date-fns';
import Sidebar from './components/Sidebar';

interface Activity {
  id: number;
  duration: number;
  timestamp: number;
}

const App = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [duration, setDuration] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newActivity = {
      id: Date.now(),
      duration,
      timestamp: Date.now()
    };
    setActivities(prev => [newActivity, ...prev]);
    setDuration(0);
  };

  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="ml-64 p-6 flex-1">
          <Routes>
            <Route path="/" element={
              <div>
                <h1 className="text-2xl font-bold mb-4">Time Wasted Tracker</h1>
                <form onSubmit={handleSubmit} className="mb-8">
                  <div className="flex gap-4">
                    <input
                      type="number"
                      value={duration}
                      onChange={(e) => setDuration(Number(e.target.value))}
                      placeholder="Minutes wasted"
                      className="border p-2 rounded"
                    />
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                      Log Time
                    </button>
                  </div>
                </form>
                <div>
                  <h2 className="text-xl font-semibold mb-4">Recent Time Wasted</h2>
                  <ul className="space-y-2">
                    {activities.map((activity) => (
                      <li key={activity.id} className="border p-4 rounded">
                        <p>Minutes: {activity.duration}</p>
                        <p className="text-gray-500">
                          {format(activity.timestamp, 'MMM d, yyyy HH:mm')}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            } />
            <Route path="/statistics" element={
              <div>
                <h1 className="text-2xl font-bold mb-4">Statistics</h1>
                <p>Total time wasted: {activities.reduce((acc, curr) => acc + curr.duration, 0)} minutes</p>
              </div>
            } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
