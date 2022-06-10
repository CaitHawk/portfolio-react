import { HeaderCollapsed } from './pages/Header';
import { HomeMobile } from './pages/Home';
import { AboutMobile } from './pages/About';
import { ProjectsMobile } from './pages/Projects';
import { ContactMobile } from './pages/Contact';
import Footer from './pages/Footer';
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