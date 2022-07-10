import { IEvent } from '@interfaces/Events';
import { useSetEvents } from '@states/events/atomHooks';

export function useUpdateEvent () {
   const setEventList = useSetEvents();
   return (event: IEvent) => {
      setEventList(currList => {
         const index = currList.findIndex(evt => evt.id === event.id);
         return [...currList.slice(0, index), event, ...currList.slice(index + 1)];
      });
   };
}
