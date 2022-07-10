import { useEventsValue } from '@states/events/eventsAtomHooks';
import { useFilterValue } from '@states/events/filterAtomHooks';

import Event from '../Event';
import Filter from '../Filter';

import { Scroll } from './EventList';

const LENGTH_DATE_FORMAT = 10;

function EventList () {
   const events = useEventsValue();
   const filter = useFilterValue();

   const eventsUsingFilter = events.filter(event => {
      if (!filter.date) {
         return true;
      }
      const isSameDay = filter.date.toISOString().slice(0, LENGTH_DATE_FORMAT) === event.startedAt.toISOString().slice(0, LENGTH_DATE_FORMAT);
      return isSameDay;
   });

   return (
      <section>
         <Filter />
         <Scroll>
            {
               eventsUsingFilter.map(event => (
                  <Event event={event} key={event.id} />
               ))
            }
         </Scroll>
      </section>
   );
}

export default EventList;
