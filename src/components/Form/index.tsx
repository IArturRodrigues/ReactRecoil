import { useState } from 'react';

import { useAddEvent } from '@hooks/useAddEvent';
import { getId } from '@utils/getId';

import { IEvent } from '@interfaces/Events';

import { Form as SForm } from './Form';

function Form () {
   const addEvent = useAddEvent();

   const [description, setDescription] = useState('');
   const [startDate, setStartDate] = useState('');
   const [startHour, setStartHour] = useState('');
   const [endDate, setEndDate] = useState('');
   const [endHour, setEndHour] = useState('');

   function mountDate (date: string, hour: string) {
      const dateString = date.slice(0, 10);
      return new Date(`${dateString}T${hour}`);
   }

   function submitForm (event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
      try {
         const calendarEvent: IEvent = {
            id: getId(),
            description,
            startedAt: mountDate(startDate, startHour),
            finishedAt: mountDate(endDate, endHour),
            completed: false
         };
         addEvent(calendarEvent);
         setDescription('');
         setStartDate('');
         setStartHour('');
         setEndDate('');
         setEndHour('');
      } catch (err) {
         alert(err);
      }
   }
   return (
      <SForm onSubmit={submitForm}>
         <SForm.Title>Novo evento</SForm.Title>

         <label>Descrição</label>
         <SForm.Input
            type="text"
            name="descricao"
            id="descricao"
            onChange={evento => setDescription(evento.target.value)}
            placeholder="Descrição" value={description}
            autoComplete="off"
            required
         />

         <label>Data de início</label>
         <SForm.InputContainer>
            <SForm.Input
               type="date"
               name="dataInicio"
               onChange={evento => setStartDate(evento.target.value)}
               value={startDate}
               required
            />
            <SForm.Input
               type="time"
               name="horaInicio"
               onChange={evento => setStartHour(evento.target.value)}
               value={startHour}
               required
            />
         </SForm.InputContainer>

         <label>Data de término</label>
         <SForm.InputContainer>
            <input
               type="date"
               name="dataFim"
               onChange={evento => setEndDate(evento.target.value)}
               value={endDate}
               required
            />
            <input
               type="time"
               name="horaFim"
               onChange={evento => setEndHour(evento.target.value)}
               value={endHour}
               required
            />
         </SForm.InputContainer>

         <SForm.Button>
            Salvar
         </SForm.Button>

      </SForm>
   );
}

export default Form;
