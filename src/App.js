import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { store } from './utils/mockAPI';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    store();
  }, []);

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
