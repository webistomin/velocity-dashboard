import { IDriverInterfaceDB } from 'common/types/driver/driver-schema';
import { IReminder } from 'common/types/reminders/reminder';
import { ITripInterfaceDB } from 'common/types/trip/trip-schema';

export interface IPageHome {
  operating: {
    score: number;
    tripsCount: number;
  };
  tripsComparison: {
    today: {
      x: number;
      y: number;
    }[];
    yesterday: {
      x: number;
      y: number;
    }[];
  };
  vehiclesOnTrack: {
    todayCount: number;
    yesterdayCount: number;
  };
  distanceDriver: {
    todayCount: number;
    yesterdayCount: number;
  };
  topDrivers: {
    drivers: IDriverInterfaceDB[];
  };
  tripsTypeStatistics: {
    labels: string[];
    data: number[][];
  };
  reminders: {
    todos: IReminder[];
  };
  trips: {
    onTrack: ITripInterfaceDB[];
  };
}

export interface IPageHomeResponse {
  success: boolean;
  content?: IPageHome;
  message?: string;
}
