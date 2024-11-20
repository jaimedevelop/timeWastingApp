export interface Activity {
  id: string;
  name: string;
  category: string;
  duration: number;
  timestamp: number;
}

export interface TimeEntry {
  id: string;
  activityId: string;
  startTime: number;
  endTime: number | null;
}