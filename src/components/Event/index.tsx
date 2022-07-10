import { useDeleteEvent } from '@hooks/useDeleteEvent';

import EventoCheckbox from './EventCheckbox';

import { IEvent } from '@interfaces/Events';

import { Event as SEvent, Description } from './Event';

interface EventProps {
   event: IEvent;
}

function Event ({ event }: EventProps) {
   const deleteEvent = useDeleteEvent();

   return (
      <SEvent completed={event.completed} >
         <EventoCheckbox event={event}/>
         <div className="cards-info">
            <Description>{event.description} - {event.startedAt.toLocaleDateString()}</Description>
         </div>
         <i className="far fa-times-circle fa-2x" onClick={() => deleteEvent(event)}></i>
      </SEvent>
   );
};

export default Event;
