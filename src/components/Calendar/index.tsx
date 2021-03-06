import Kalend, { CalendarEvent, CalendarView, OnEventDragFinish } from 'kalend';

import { useEventsValue } from '@states/events/eventsAtomHooks';

import ptBR from './locale/ptBR.json';

import 'kalend/dist/styles/index.css';
import { Container } from './Calendar';
import { useUpdateEvent } from '@hooks/useUpdateEvent';

interface IKalendEvent {
   id?: number
   startAt: string
   endAt: string
   summary: string
   color: string
}

function Calendar () {
   const kalendEvents = new Map<string, IKalendEvent[]>();
   const eventList = useEventsValue();
   const updateEvent = useUpdateEvent();

   eventList.forEach(event => {
      const key = event.startedAt.toISOString().slice(0, 10);
      if (!kalendEvents.has(key)) {
         kalendEvents.set(key, []);
      }
      kalendEvents.get(key)?.push({
         id: event.id,
         startAt: event.startedAt.toISOString(),
         endAt: event.finishedAt.toISOString(),
         summary: event.description,
         color: 'blue'
      });
   });
   
   const onEventDragFinish: OnEventDragFinish = (
      unchangedKalendEvent: CalendarEvent,
      updatedKalendEvent: CalendarEvent
   ) => {
      const event = eventList.find(event => event.description === updatedKalendEvent.summary);
      if (event) {
         const updatedEvent = {
            ...event,
            startedAt: new Date(updatedKalendEvent.startAt),
            finishedAt: new Date(updatedKalendEvent.endAt)
         };

         updateEvent(updatedEvent);
      }
   };

   return (
      <Container>
         <Kalend
            events={Object.fromEntries(kalendEvents)}
            initialDate={new Date().toISOString()}
            hourHeight={60}
            initialView={CalendarView.WEEK}
            timeFormat={'24'}
            weekDayStart={'Monday'}
            calendarIDsHidden={['work']}
            language={'customLanguage'}
            customLanguage={ptBR}
            onEventDragFinish={onEventDragFinish}
         />
      </Container>
      // <div></div>
   );
};

export default Calendar;
