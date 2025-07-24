import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Projects from './pages/Projects/Projects';
import Events from './pages/Events/Events';
import Blogs from './pages/Blog/Blogs';
import Agenoversity from './pages/Agenoversity/Agenoversity';

import AboutUs from './pages/About/AboutUs';
import OurJourney from './pages/About/OurJourney';
import OurTeam from './pages/About/OurTeam';
import Footer from './components/Footer';

function App() {
  return (
    <div className='space-y-10'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/events" element={<Events />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/agenoversity" element={<Agenoversity />} /> 
        {/* About subpages */}
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/our-journey" element={<OurJourney />} />
        <Route path="/our-team" element={<OurTeam />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

