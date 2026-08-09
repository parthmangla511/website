import './App.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Achievement from './components/achievement';
import Timeline from './components/timeline';
import Card from './components/card';
import Fame from './components/fame';
import Gallery from './components/gallery';
import Footer from './components/footer';
import InteractiveBackground from './components/InteractiveBackground';

function App() {
  return (
    <div className="app-shell">
      <InteractiveBackground />
      <Navbar />
      <main>
        <Hero />
        <Achievement />
        <Timeline />
        <Card />
        <Fame />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;
