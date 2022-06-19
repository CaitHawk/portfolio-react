import { HeaderCollapsed } from './components/Header';
import { HomeMobile } from './components/Home';
import { AboutMobile } from './components/About';
import { ProjectsMobile } from './components/Projects';
import { ContactMobile } from './components/Contact';
import Footer from './components/Footer';
import './styles/App.css';

export default function Mobile () {
    return (
        <main className="mobile">
            <HeaderCollapsed />
            <HomeMobile />
            <AboutMobile />
            <ProjectsMobile />
            <ContactMobile />
            <Footer />
        </main>
    );
}