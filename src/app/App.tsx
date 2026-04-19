import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Story } from './components/Story';
import { Menu } from './components/Menu';
import { Loyalty } from './components/Loyalty';
import { Payment } from './components/Payment';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Story />
      <Menu />
      <Loyalty />
      <Payment />
      <Contact />
      <Footer />
    </div>
  );
}