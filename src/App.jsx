import './App.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Achievement from './components/achievement';
import Timeline from './components/timeline';
import Card from './components/card';
import Fame from './components/fame';
import Gallery from './components/gallery';

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <Hero />
      <Achievement />
      <Timeline />
      <Card />
      <Fame />
      <Gallery />
      <footer>
<div>
End with a motivational section that encourages users to take action and make a positive impact in their lives.
<br />
[Join Geek Room]
</div>
</footer>
    </div>
  );
}

export default App;
