import styled, { StyledComponent } from 'styled-components';

type IFilter = StyledComponent<'form', any, {}, never> & {
   Title: StyledComponent<'h3', any, {}, never>;
   Input: StyledComponent<'input', any, {}, never>;
   Button: StyledComponent<'button', any, {}, never>;
}

const Filter = styled.form`
   display: flex;
   align-items: stretch;
   justify-content: center;
   flex-direction: column;
   padding: 1rem;
   width: 100%;
   box-sizing: border-box;
` as IFilter;

Filter.Title = styled.h3`
   margin-top: 0;
`;

Filter.Input = styled.input`
   margin: .5rem 0;
   box-shadow: inset 0 0.0625em 0.125em rgb(10 10 10 / 5%);
   background-color: #fff;
   border-color: #dbdbdb;
   border-radius: 0.375em;
   color: #363636;
   -moz-appearance: none;
   -webkit-appearance: none;
   align-items: center;
   border: 1px solid transparent;
   border-radius: 0.375em;
   box-shadow: none;
   display: inline-flex;
   font-size: 1rem;
   height: 2.5em;
   justify-content: flex-start;
   line-height: 1.5;
   padding-bottom: calc(0.5em - 1px);
   padding-left: calc(0.75em - 1px);
   padding-right: calc(0.75em - 1px);
   padding-top: calc(0.5em - 1px);
   position: relative;
   vertical-align: top;
`;

Filter.Button = styled.button`
   padding: .75rem 1.5rem;
   background: #95bae8;
   border-radius: 2rem;
   font-size: 1rem;
   border: 1px solid #e4bbff8f;
   margin: .5rem 0;
   cursor: pointer;
   :hover {
      background: #e4bbff8f;
      border-color: #95bae8;
   }
`;

export { Filter };
