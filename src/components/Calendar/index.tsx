import Kalend, { CalendarView } from 'kalend';

import { useGetEvents } from '@states/events/atomHooks';

import ptBR from './locale/ptBR.json';

import { Container } from './Calendar';

interface IKalendEvento {
   id?: number
   startAt: string
   endAt: string
   summary: string
   color: string
}

const Calendar: React.FC = () => {
   const kalendEvents = new Map<string, IKalendEvento[]>();
   const events = useGetEvents();

   events.forEach(event => {
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
         />
      </Container>
   );
};

export default Calendar;
