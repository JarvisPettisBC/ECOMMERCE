import {Container} from 'react-bootstrap'

import Header from "./components/Header";
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header/>
      <main className='py-3'>
        <Container fluid className='mb-5'>
          <Routes>
            <Route path={"/"} element={<HomeScreen/>} exact/>
            <Route path={"product/:id"} element={<ProductScreen/>}/>
          </Routes>
          
        </Container>
        
      </main>
      <Footer/>
    </Router>
  );
      
}

export default App;