import { EventsCalendar } from '@pages';
import { Suspense } from 'react';
import { RecoilRoot } from 'recoil';

function App () {
   return (
      <RecoilRoot>
         <Suspense fallback="Está carregando">
            <EventsCalendar />
         </Suspense>
      </RecoilRoot>
   );
}

export default App;
