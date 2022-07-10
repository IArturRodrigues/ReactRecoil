import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { eventListState } from './atom';
import { IEvent } from '@interfaces/Events';
import { filteredEventsState } from './selector';

export function useEventsValue () {
   return useRecoilValue<IEvent[]>(filteredEventsState);
}

export function useSetEvents () {
   return useSetRecoilState<IEvent[]>(eventListState);
}

export function useEvents () {
   return useRecoilState<IEvent[]>(eventListState);
}
