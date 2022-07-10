import { useSetEvents } from '@states/events/atomHooks';

import { IEvent } from '@interfaces/Events';
interface EventCheckboxProps {
   event: IEvent;
}

function EventCheckbox ({ event }: EventCheckboxProps) {
   const setEventList = useSetEvents();

   function changeStatus () {
      const alteredEvent = {
         ...event,
         completed: !event.completed
      };

      setEventList(prevList => {
         const index = prevList.findIndex(evt => evt.id === event.id);
         return [...prevList.slice(0, index), alteredEvent, ...prevList.slice(index + 1)];
      });
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
