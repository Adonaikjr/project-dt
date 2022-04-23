import { Container }from './styled';
import IconEntradas from '../../assents/Entradas.svg';
import IconSaida from '../../assents/Saidas.svg';
import IconTotal from '../../assents/Total.svg';

const Summary = () => {
  return(
  <Container>
    <div>
      <header>
        <p>Entradas</p>
          <strong>R$ 15.000,00</strong>
          <img src={IconEntradas} alt='Entradas'/>
      </header>
    </div>

    <div>
      <header>
        <p>Saidas</p>
          <strong className='saidas-color'>- R$ 1.000,00</strong>
          <img src={IconSaida} alt='Saidas'/>
      </header>
    </div>

    <div className='totalizador-background'>
      <header>
        <p>Total</p>
          <strong >R$ 14.000,00</strong>
          <img src={IconTotal} alt='Total'/>
      </header>
    </div>
  </Container>
  )
};
export default Summary;