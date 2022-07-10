import { useEventsValue } from '@states/events/atomHooks';

import Event from '../Event';
import Filter from '../Filter';

import { Scroll } from './EventList';

interface EventListProps {
   afterApplyFilter: (date: Date | null) => void;
}

function EventList ({ afterApplyFilter }: EventListProps) {
   const events = useEventsValue();

   return (
      <section>
         <Filter afterApplyFilter={afterApplyFilter} />
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
