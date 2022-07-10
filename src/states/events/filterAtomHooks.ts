import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { filterEventsState } from './atom';

export function useFilter () {
   return useRecoilState(filterEventsState);
}

export function useFilterValue () {
   return useRecoilValue(filterEventsState);
}

export function useSetFilter () {
   return useSetRecoilState(filterEventsState);
}
