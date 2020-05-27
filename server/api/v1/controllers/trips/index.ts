import addTripController from './add';
import startTripController from './start';
import endTripController from './end';
import todayTripController from './today';

export const tripsControllers = {
  add: addTripController,
  start: startTripController,
  end: endTripController,
  today: todayTripController,
};
