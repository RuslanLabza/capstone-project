import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main';
import Footer from './components/Footer/Footer';
import MainDescription from './components/MainDescription/MainDescription';
import SpecialsSection from './components/SpecialsSection/SpecialsSection';
import TestimonialsSection from './components/TestimonialsSection/TestimonialsSection';
import AdditionalInfo from './components/AdditionalInfo/AdditionalInfo';

function App() {
  return (
    <>
      <Header />
      <Main>
        <MainDescription />
        <SpecialsSection />
        <TestimonialsSection />
        <AdditionalInfo />
      </Main>
      <Footer />
    </>
  );
}

export default App;
