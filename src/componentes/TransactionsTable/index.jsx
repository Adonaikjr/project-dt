import {Container} from './styled';

function TransictionsTable(){

//rota
//useEffect(() => {
// fetch('https://localhost:3000/api/transactions')
// .then(response => response.json())
// .then(data => console.log(data))
//}, []);

//fim-rota
  return(
    <Container>
        <table >
          <thead>
            <tr>
              <th>Titulo </th>
              <th>Valor</th>
              <th>Categoria</th>
              <th>Data</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className='Title'>Desenvolvimento de Website</td>
              <td className='valorgreen'>R$ 10.000,00</td>
              <td>Venda</td>
              <td>01/01/2022</td>
            </tr>
            <tr>
              <td className='Title'>Festas</td>
              <td className='Valor'>- R$ 500,00</td>
              <td>Entretenimento</td>
              <td>20/05/2022</td>
            </tr>
            <tr>
              <td className='Title'>Hamburguer</td>
              <td className='Valor'>- R$ 500,00</td>
              <td>Alimentação</td>
              <td>17/04/2022</td>
            </tr>
            <tr>
              <td className='Title'>Batata</td>
              <td className='valorgreen'>R$ 5.000,00</td>
              <td>Venda</td>
              <td>20/01/2022</td>
            </tr>
          </tbody>

        </table>

    </Container>  

  );

}

export default TransictionsTable;