import './App.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Achievement from './components/achievement';
import Timeline from './components/timeline';

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <Hero />
      <Achievement />
      <Timeline />
    </div>
  )
}

export default App;