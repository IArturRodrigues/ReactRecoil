import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { eventListState } from './atom';
import { IEvent } from '@interfaces/Events';

export function useEventsValue () {
   return useRecoilValue<IEvent[]>(eventListState);
}

export function useSetEvents () {
   return useSetRecoilState<IEvent[]>(eventListState);
}

export function useEvents () {
   return useRecoilState<IEvent[]>(eventListState);
}
