import { selector } from 'recoil';
import { eventListState, filterEventsState } from './atom';

const LENGTH_DATE_FORMAT = 10;

export const filteredEventsState = selector({
   key: 'filteredEventsState',
   get: ({ get }) => {
      const filter = get(filterEventsState);
      const events = get(eventListState);
      const filteredEvents = events.filter(event => {
         if (!filter.date) {
            return true;
         }
         const isSameDay = filter.date.toISOString().slice(0, LENGTH_DATE_FORMAT) === event.startedAt.toISOString().slice(0, LENGTH_DATE_FORMAT);
         return isSameDay;
      });
      return filteredEvents;
   }
});
