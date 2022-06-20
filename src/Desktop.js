import { HeaderFull } from './components/Header';
import Home from './components/Home';
import Skills from './components/Skills';
import { ProjectsDesktop } from './components/Projects';
import About from './components/About';
import { ContactDesktop } from './components/Contact';
import Footer from './components/Footer';
import './styles/App.css';


export default function Desktop () {
    return (
        <main className="desktop">
            <HeaderFull />
            <Home />
            <Skills />
            <ProjectsDesktop />
            <About />
            <ContactDesktop />
            <Footer />
        </main>
    );
}
