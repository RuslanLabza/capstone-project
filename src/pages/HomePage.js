import MainDescription from '../components/MainDescription/MainDescription';
import SpecialsSection from '../components/SpecialsSection/SpecialsSection';
import TestimonialsSection from '../components/TestimonialsSection/TestimonialsSection';
import AdditionalInfo from '../components/AdditionalInfo/AdditionalInfo';

export default function HomePage() {
  return (
    <>
      <MainDescription />
      <SpecialsSection />
      <TestimonialsSection />
      <AdditionalInfo />
    </>
  );
}
