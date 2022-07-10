import { useState } from 'react';
import { RecoilRoot } from 'recoil';

import Calendar from '@components/Calendar';
import Card from '@components/Card';
import EventList from '@components/EventList';
import Form from '@components/Form';

import { useEvents } from '@states/events/atomHooks';

// import { IEvent } from '@interfaces/Events';

import { App } from './EventsCalendar';

function EventsCalendar () {
   const [filter, setFilter] = useState<Date | null>();
   const [events, setEvents] = useEvents();

   // function addEvent (event: IEvent) {
   //    event.id = Math.round((new Date()).getTime() / 1000);
   //    events.push(event);
   //    setEvents([...events]);
   // }

   function alterEventStatus (id: number) {
      const event = events.find(event => event.id === id);
      if (event) {
         event.completed = !event.completed;
      }
      setEvents([...events]);
   }

   // function deleteEvent (id: number) {
   //    setEvents([...events.filter(event => event.id !== id)]);
   // }

   function applyFilter (date: Date | null) {
      setFilter(date);
   }

   // const filtered = !filter
   //    ? events
   //    : events.filter((event) =>
   //       filter!.toISOString().slice(0, 10) === event.startedAt.toISOString().slice(0, 10)
   //    );

   return (
      <RecoilRoot>
         <App>
            <App.Column>
               <Card>
                  <Form />
               </Card>
               <hr />
               <Card>
                  <EventList
                     afterApplyFilter={applyFilter}
                     afterStatusChange={alterEventStatus}
                  />
               </Card>
            </App.Column>
            <App.Column>
               <Calendar />
            </App.Column>
         </App>
      </RecoilRoot>
   );
}

export default EventsCalendar;
