import Calendar from '@components/Calendar';
import Card from '@components/Card';
import EventList from '@components/EventList';
import Form from '@components/Form';

// import { useEvents } from '@states/events/atomHooks';

// import { IEvent } from '@interfaces/Events';

import { App } from './EventsCalendar';

function EventsCalendar () {
   return (
      <App>
         <App.Column>
            <Card>
               <Form />
            </Card>
            <hr />
            <Card>
               <EventList />
            </Card>
         </App.Column>
         <App.Column>
            <Calendar />
         </App.Column>
      </App>
   );
}

export default EventsCalendar;
