import styled, { css } from 'styled-components';

interface StyledEventProps {
   completed: boolean;
}

const Description = styled.div`
   text-decoration: none;
`;

const Event = styled.div<StyledEventProps>`
   display: grid;
   grid-template-columns: auto 1fr auto;
   align-items: center;
   gap: .9375rem;
   padding: .625rem 1.25rem;
   border-bottom: 1px solid #bbbdc750;
   i {
      cursor: pointer;
   }
   ${props => props.completed && css`
      background: #b7ddf33d;
      ${Description} {
         text-decoration: line-through;
      }
   `}
`;

export { Event, Description };
