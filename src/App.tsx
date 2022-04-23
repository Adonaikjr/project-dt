 import Header from'./componentes/header/index.jsx';
import Dashboard from'./componentes/Dashboard/index.jsx';
import GlobalStyle from './componentes/global';

import Footer from './componentes/foolter';


const App: React.FC = () => ( 
    <>
    <GlobalStyle/>
    <Header/>
    <Dashboard/>
    <Footer/>
    </>
); 

export default App;
     