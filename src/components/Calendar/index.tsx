import Kalend, { CalendarView } from 'kalend';

import { useEventsValue } from '@states/events/atomHooks';

import ptBR from './locale/ptBR.json';

import 'kalend/dist/styles/index.css';
import { Container } from './Calendar';

interface IKalendEvent {
   id?: number
   startAt: string
   endAt: string
   summary: string
   color: string
}

function Calendar () {
   const kalendEvents = new Map<string, IKalendEvent[]>();
   const events = useEventsValue();

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
      // <div></div>
   );
};

export default Calendar;
