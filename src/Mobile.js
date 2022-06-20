import { HeaderCollapsed } from './components/Header';
import Home from './components/Home';
import { SkillsMobile } from './components/Skills';
import { ProjectsMobile } from './components/Projects';
import { AboutMobile } from './components/About';
import { ContactMobile } from './components/Contact';
import Footer from './components/Footer';
import './styles/App.css';

export default function Mobile () {
    return (
        <main className="mobile">
            <HeaderCollapsed />
            <Home />
            <SkillsMobile />
            <ProjectsMobile />
            <AboutMobile />
            <ContactMobile />
            <Footer />
        </main>
    );
}