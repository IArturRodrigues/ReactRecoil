import { useEventsValue } from '@states/events/eventsAtomHooks';

import Event from '../Event';
import Filter from '../Filter';

import { Scroll } from './EventList';

function EventList () {
   const events = useEventsValue();

   return (
      <section>
         <Filter />
         <Scroll>
            {
               events.map(event => (
                  <Event event={event} key={event.id} />
               ))
            }
         </Scroll>
      </section>
   );
}

export default EventList;
