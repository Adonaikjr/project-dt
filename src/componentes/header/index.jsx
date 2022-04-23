import React from 'react';
import Logoimg from '../../assents/Logo.svg';
import { Container }from '.././header/styled';
import { Filho } from '.././header/styled';

const Header = () => {
 return(
  <Container>
    <Filho>
    <img src={Logoimg}/>
    <button type="button">
      Nova transação 
    </button>
    </Filho>
  </Container>
  )
};

  export default Header;