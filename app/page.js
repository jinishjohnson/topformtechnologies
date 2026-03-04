import Hero from '../components/home/hero';
import About from '../components/home/about';
import Service from '../components/home/service';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <Service />
    </div>
  );
}
