import { HeaderCollapsed } from './components/Header';
import Home from './components/Home';
import { AboutMobile } from './components/About';
import { ProjectsMobile } from './components/Projects';
import { ContactMobile } from './components/Contact';
import Footer from './components/Footer';
import './styles/App.css';

export default function Mobile () {
    return (
        <main className="mobile">
            <HeaderCollapsed />
            <Home />
            <AboutMobile />
            <ProjectsMobile />
            <ContactMobile />
            <Footer />
        </main>
    );
}