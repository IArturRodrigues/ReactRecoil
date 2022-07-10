import { useEventsValue } from '@states/events/atomHooks';

import Event from '../Event';
import Filter from '../Filter';

import style from './ListaDeEventos.module.scss';

interface EventListProps {
   afterStatusChange: (id: number) => void;
   afterApplyFilter: (date: Date | null) => void;
}

function EventList ({ afterApplyFilter, afterStatusChange }: EventListProps) {
   const events = useEventsValue();

   return (
      <section>
         <Filter afterApplyFilter={afterApplyFilter} />
         <div className={style.Scroll}>
            {
               events.map(event => (
                  <Event afterStatusChange={afterStatusChange} event={event} key={event.id} />
               ))
            }
         </div>
      </section>
   );
}

export default EventList;
