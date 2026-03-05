import Hero from '../components/home/hero';
import About from '../components/home/about';
import Service from '../components/home/service';
import MService from '../components/home/mService';
import Showcase from '../components/home/showcase';
import Clients from '../components/home/clients';
import Contact from '../components/home/contact';
import Map from '../components/home/map';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <Service />
      <MService />
      <Showcase />
      <Clients />
      <Contact />
      <Map />
    </div>
  );
}
