import Navbar from '@/components/Navbar';
import ParticleCanvas from '@/components/ParticleCanvas';
import Hero from '@/components/Hero';
import Divider from '@/components/Divider';
import About from '@/components/About';
import Parts from '@/components/Parts';
import Events from '@/components/Events';
import Apply from '@/components/Apply';
import Footer from '@/components/Footer';

const RECRUITING = true;

export default function Home() {
  return (
    <>
      <ParticleCanvas />
      <Navbar />
      <Hero recruiting={RECRUITING} />
      <Divider label="01 — ABOUT" />
      <About />
      <Divider label="02 — PARTS" />
      <Parts />
      <Divider label="03 — EVENTS" />
      <Events />
      <Apply recruiting={RECRUITING} />
      <Footer />
    </>
  );
}
