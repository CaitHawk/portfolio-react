import { HeaderFull } from './components/Header';
import Home from './components/Home';
import { SkillsDesktop } from './components/Skills';
import { ProjectsDesktop } from './components/Projects';
import { AboutDesktop } from './components/About';
import { ContactDesktop } from './components/Contact';
import Footer from './components/Footer';
import './styles/App.css';


export default function Desktop () {
    return (
        <main className="desktop">
            <HeaderFull />
            <Home />
            <SkillsDesktop />
            <ProjectsDesktop />
            <AboutDesktop />
            <ContactDesktop />
            <Footer />
        </main>
    );
}
