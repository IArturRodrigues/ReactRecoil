import { IEvent } from '@interfaces/Events';

interface EventCheckboxProps {
   event: IEvent;
   afterStatusChange: (id: number) => void;
}

function EventCheckbox ({ event, afterStatusChange }: EventCheckboxProps) {
   const estilos = [
      'far',
      'fa-2x',
      event.completed ? 'fa-check-square' : 'fa-square'
   ];

   return (
      <i className={estilos.join(' ')} onClick={() => afterStatusChange(event.id!)}></i>
   );
}

export default EventCheckbox;
