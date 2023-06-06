import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import {Routes, Route} from 'react-router-dom'
import Summary from './pages/Summary';
import { MovieProvider } from './pages/MovieContext';

function App() {
  return (
    <>
      <MovieProvider>
      <div className='body'>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/summary/:id' element={<Summary/>}/>
      </Routes>
      </div>
      </MovieProvider>
      
      
      
    </>
  );
}

export default App;
