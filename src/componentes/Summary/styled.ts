import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-content: space-around;
  justify-content: space-around;
  margin-top:-10rem;
  flex-wrap: wrap;
  
  

 div{
   background: #fff;
   padding: 2.5rem 2rem;
   border-radius: 0.25rem;
   color: #363f5f;
   transition: filter 0.2s;
   cursor:pointer;

    &:hover {
    filter: brightness(0.9);
    }

   header{
     display: flex; 
     align-items: center;
     flex-wrap: wrap;
   }

  strong{
    margin: 1px;
    margin-top: 2rem;
    font-size: 2rem;
    font-weight: normal;
    line-height: 4rem;

  }

  p{
    margin-top: -5rem;
    font-size: large ;
  }

  img{
    margin-top:-5rem;
  }
   &.totalizador-background{
     color: white;
     background: #33CC95;
   }
   .saidas-color{
     color: var(--red);
   }

 }
`
