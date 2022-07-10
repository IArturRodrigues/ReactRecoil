import { useUpdateEvent } from '@hooks/useUpdateEvent';

import { IEvent } from '@interfaces/Events';
interface EventCheckboxProps {
   event: IEvent;
}

function EventCheckbox ({ event }: EventCheckboxProps) {
   const updateEvent = useUpdateEvent();

   function changeStatus () {
      const alteredEvent = {
         ...event,
         completed: !event.completed
      };

      updateEvent(alteredEvent);
   }

   const styles = [
      'far',
      'fa-2x',
      event.completed ? 'fa-check-square' : 'fa-square'
   ];

   return (
      <i className={styles.join(' ')} onClick={changeStatus}></i>
   );
}

export default EventCheckbox;
