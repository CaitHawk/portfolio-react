import { HeaderCollapsed } from './pages/Header';
import { HomeMobile } from './pages/Home';
import { AboutMobile } from './pages/About';
import { ContactMobile } from './pages/Contact';
import Footer from './pages/Footer';

export default function Mobile () {
    return (
        <main>
            <HeaderCollapsed />
            <HomeMobile />
            <AboutMobile />
            <ContactMobile />
            <Footer />
        </main>
    );
}