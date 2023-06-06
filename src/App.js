import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import Header from './components/Header';

function App() {
  return (
    <>
      <div className='body'>
      <Header/>
      <HomePage/>
      {/* <SearchBar/> */}
      </div>
    </>
  );
}

export default App;
