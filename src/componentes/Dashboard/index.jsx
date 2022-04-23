import React from 'react';
import { Container }from './styled';
import Summary from'../Summary/index.jsx';
import TransactionsTable from '../TransactionsTable';



 const Dashboard = () => {
  return(
    
     <Container>
      <Summary>
      </Summary>
      <TransactionsTable></TransactionsTable>
      </Container>
  )
};

export default Dashboard;