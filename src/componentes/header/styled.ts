import styled from 'styled-components';


export const Container = styled.header `
  background: #5429cc;

`;





export const Filho = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0rem 3rem 10rem;
  height: 8rem;
  display:flex;
  justify-content: space-between;
  align-items: center;

  button{
    font-size: 1rem;
    color: #fff;
    background-color: #6933ff ;
    border:0;
    padding: 0 3rem;
    margin: 0 3rem;
    border-radius: 0.25rem;
    height: 3rem;
    
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
      //filter: blur(3px);
    }
  }
`;