import { useEffect } from 'react';
import Header from '../components/home/Header';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import PainPoints from '../components/home/PainPoints';
import Solutions from '../components/home/Solutions';
import Industries from '../components/home/Industries';
import Strengths from '../components/home/Strengths';
import Cases from '../components/home/Cases';
import Process from '../components/home/Process';
import Contact from '../components/home/Contact';
import Footer from '../components/home/Footer';

export default function Home() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href^="#"]');
      if (link) {
        e.preventDefault();
        const href = link.getAttribute('href');
        if (href) {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <Hero />
        <About />
        <PainPoints />
        <Solutions />
        <Industries />
        <Strengths />
        <Cases />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
