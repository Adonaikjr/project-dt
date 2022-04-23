import{ Container } from './styled';
import Logoimg from '../../assents/Logo.svg';
import { Filho } from './styled';

export const Footer = () => {
  return(
    <Container>
      <footer>
      <Filho>
        
          <div>
           <img src={Logoimg} />
          </div>

        <div>
          <h2>Sobre nós</h2>
          <p>Informações da página</p>
          <p>Empresa</p>
          <p>Contato</p>
          <p>Blog</p>
        </div>

        <div>
          <h2>Contatos</h2>
          <p>E-mail: adonaikjr@gmail.com</p>
          <p>Telefone: 9237-xxx</p>
          <p>Linkedin</p>
        </div>
     
      </Filho>
      </footer>
    </Container>
  );
}
export default Footer;
