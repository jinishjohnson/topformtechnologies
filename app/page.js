import Hero from '../components/home/hero';
import HeroB from '../components/home/heroB';
import HeroA from '@/components/home/heroA';
// import HeroNew from '@/components/home/heroNew';
import About from '../components/home/about';
import Service from '../components/home/service';
import MService from '../components/home/mService';
import Showcase from '../components/home/showcase';
import Clients from '../components/home/clients';
import Certify from '../components/home/certify';
import Contact from '../components/home/contact';
import Map from '../components/home/map';
import TestimonialSection from '@/components/home/testimonials';

export default function Home() {

  return (
    <div className="flex flex-col min-h-screen -mt-20">
      <Hero />
      <HeroB />
      {/* <HeroNew /> */}
      <HeroA />
      <About />
      <Service />
      <MService />
      <Showcase />
      <Clients />
      <Certify />
      <Map />
      <TestimonialSection />
      <Contact />
    </div>
  );
}
