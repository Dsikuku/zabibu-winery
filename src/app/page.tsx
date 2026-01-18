import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Reservations from '@/components/sections/Reservations';
import Story from '@/components/sections/Story';
import WineGrid from '@/components/sections/WineGrid';

export default function Home() {
  return (
    <>
      <Hero />
      <Story />
      <WineGrid />
      <Reservations />
    </>
  );
}