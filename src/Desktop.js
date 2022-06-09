import { HeaderFull } from './pages/Header';
import { HomeDesktop } from './pages/Home';
import { AboutDesktop } from './pages/About';
import { ContactDesktop } from './pages/Contact';
import Footer from './pages/Footer';
import './styles/App.css';


export default function Desktop () {
    return (
        <main className="desktop">
            <HeaderFull />
            <HomeDesktop />
            <AboutDesktop />
            <ContactDesktop />
            <Footer />
        </main>
    );
}
