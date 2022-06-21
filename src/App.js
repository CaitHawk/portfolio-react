import { HeaderFull, HeaderCollapsed } from './components/Header';
import HomeSection from './components/Home';
import SkillsSection from './components/Skills';
import ProjectsSection from './components/Projects';
import AboutSection from './components/About';
import ContactSection from './components/Contact';
import Footer from './components/Footer';
import './styles/App.css';
import './styles/Header.css';

function App() {
  return (
    <div className="app">
      <HeaderFull />
      <HeaderCollapsed />
      <HomeSection />
      <SkillsSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
