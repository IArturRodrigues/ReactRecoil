import styled, { StyledComponent } from 'styled-components';

type IApp = StyledComponent<'div', any, {}, never> & {
   Column: StyledComponent<'div', any, {}, never>;
}

const App = styled.div`
   background: rgb(238,174,202);
   background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
   height: 100vh;
   box-sizing: border-box;
   overflow: hidden;
   display: grid; 
   grid-template-columns: 1fr 2.5fr; 
   grid-template-rows: 1fr; 
   grid-template-areas: ". ."; 
   padding: 1.25rem;
   row-gap: 3rem;
   column-gap: 3rem;

   ::-webkit-scrollbar {
      width: .375rem;
      background-color: #F5F5F5;
      border-radius: 1rem;

   }

   ::-webkit-scrollbar-thumb {
      background-color: #000000;
      border-radius: 1rem;
   }
` as IApp;

App.Column = styled.div``;

export { App };
