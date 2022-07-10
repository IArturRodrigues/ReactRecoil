import { IFilterEvents } from '@interfaces/Events';
import { useSetFilter } from '@states/events/filterAtomHooks';
import { useState } from 'react';
import { Filter as SFilter } from './Filter';

function Filter () {
   const [date, setDate] = useState('');
   const setFilter = useSetFilter();

   function submitForm (event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
      const filter: IFilterEvents = { date: null };
      if (date) {
         filter.date = new Date(date);
      }
      setFilter(filter);
   }

   return (
      <SFilter onSubmit={submitForm}>
         <SFilter.Title>Filtrar por data</SFilter.Title>
         <SFilter.Input
            type="date"
            name="data"
            onChange={event => setDate(event.target.value)}
            placeholder="Por data"
            value={date}
         />

         <SFilter.Button>
            Filtrar
         </SFilter.Button>

      </SFilter>
   );
}

export default Filter;
