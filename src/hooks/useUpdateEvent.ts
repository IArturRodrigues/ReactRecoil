import { IEvent } from '@interfaces/Events';
import { useSetEvents } from '@states/events/eventsAtomHooks';

export function useUpdateEvent () {
   const setEventList = useSetEvents();
   return (event: IEvent) => {
      setEventList(prevList => {
         const index = prevList.findIndex(evt => evt.id === event.id);
         return [...prevList.slice(0, index), event, ...prevList.slice(index + 1)];
      });
   };
}
