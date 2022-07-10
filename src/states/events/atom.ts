import { atom } from 'recoil';

import { IEvent, IFilterEvents } from '@interfaces/Events';
import { asyncSelector } from './selector';

export const eventListState = atom<IEvent[]>({
   key: 'eventListState',
   default: asyncSelector
});

export const filterEventsState = atom<IFilterEvents>({
   key: 'filterEventsState',
   default: {}
});
