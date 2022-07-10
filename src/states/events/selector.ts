import { IEvent } from '@interfaces/Events';
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

export const asyncSelector = selector({
   key: 'asyncSelector',
   get: async () => {
      const response = await fetch('http://localhost:8080/events');
      const events: IEvent[] = await response.json();
      return events.map(event => ({
         ...event,
         startedAt: new Date(event.startedAt),
         finishedAt: new Date(event.finishedAt)
      }));
   }
});
