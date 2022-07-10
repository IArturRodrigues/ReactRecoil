import { IEvent } from '@interfaces/Events';
import { useSetEvents } from '@states/events/eventsAtomHooks';

export function useDeleteEvent () {
   const setEventList = useSetEvents();
   return (event: IEvent) => {
      setEventList(prevList => [...prevList.filter(evt => evt.id !== event.id)]);
   };
}
