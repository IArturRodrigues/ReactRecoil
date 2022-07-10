import { useState } from 'react';
import { Filter as SFilter } from './Filter';

interface FilterProps {
   afterApplyFilter: (date: Date | null) => void;
}

function Filter ({ afterApplyFilter }: FilterProps) {
   const [date, setDate] = useState('');

   function submitForm (event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
      if (!date) {
         afterApplyFilter(null);
         return;
      }
      afterApplyFilter(new Date(date));
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
