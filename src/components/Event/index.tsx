import EventoCheckbox from './EventCheckbox';

import { IEvent } from '@interfaces/Events';

import { Event as SEvent, Description } from './Event';
import { useSetEvents } from '@states/events/atomHooks';

interface EventProps {
   event: IEvent;
}

function Event ({ event }: EventProps) {
   const setEventList = useSetEvents();

   function deleteEvent () {
      setEventList(prevList => [...prevList.filter(eventInList => eventInList.id)]);
   }

   return (
      <SEvent completed={event.completed} >
         <EventoCheckbox event={event}/>
         <div className="cards-info">
            <Description>{event.description} - {event.startedAt.toLocaleDateString()}</Description>
         </div>
         <i className="far fa-times-circle fa-2x" onClick={deleteEvent}></i>
      </SEvent>
   );
};

export default Event;
