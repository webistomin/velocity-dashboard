import { ITripInterfaceDB } from '../trip/trip-schema';

export interface IPageAnalytics {
  revenue: {
    labels: string[];
    data: { x: number; y: number }[][];
  };
  vehiclesOnTrack: {
    todayCount: number;
    yesterdayCount?: number;
  };
  distanceDriven: {
    todayCount: number;
    yesterdayCount?: number;
  };
  energyConsumed: {
    todayCount: number;
    yesterdayCount?: number;
  };
  totalDriveTime: {
    todayCount: number;
    yesterdayCount?: number;
  };
  latestTrips: {
    trips: ITripInterfaceDB[];
  };
  tripsByWeekday: {
    datasets: number[][];
  };
}

export interface IPageAnalyticsResponse {
  success: boolean;
  content?: IPageAnalytics;
  message?: string;
}
