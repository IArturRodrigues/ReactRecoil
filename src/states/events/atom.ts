import { atom } from 'recoil';

import { IEvent } from '@interfaces/Events';

export const eventListState = atom<IEvent[]>({
   key: 'eventListState',
   default: [
      {
         description: 'Estudar React',
         startedAt: new Date('2022-07-15T09:00'),
         finishedAt: new Date('2022-07-15T13:00'),
         completed: false,
         id: 123
      },
      {
         description: 'Estudar Recoil',
         startedAt: new Date('2022-07-16T09:00'),
         finishedAt: new Date('2022-07-16T13:00'),
         completed: false,
         id: 31231239216
      }
   ]
});
