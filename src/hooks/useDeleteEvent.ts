import { IEvent } from '@interfaces/Events';
import { useSetEvents } from '@states/events/atomHooks';

export function useDeleteEvent () {
   const setEventList = useSetEvents();
   return (event: IEvent) => {
      setEventList(prevList => [...prevList.filter(evt => evt.id !== event.id)]);
   };
}
