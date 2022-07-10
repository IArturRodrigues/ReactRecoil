import { IEvent } from '@interfaces/Events';
import { useSetEvents } from '@states/events/atomHooks';
import { getId } from '@utils/getId';

export function useAddEvent () {
   const setEventList = useSetEvents();
   return (event: IEvent) => {
      const today = new Date();
      if (event.startedAt < today) {
         throw new Error('Eventos nao podem ser adicionados com a data menor do que a atual.');
      }
      event.id = getId();
      return setEventList(prevList => [...prevList, event]);
   };
}
