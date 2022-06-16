import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import '../styles/Footer.css'

export default function Footer() {
    return (
        <section className="footerMain">
            <div className="footerTop">
                <div className="footerContactLinks">
                    <p className="footerLink"><FontAwesomeIcon icon={faEnvelope} /> neathawkcaitlin@gmail.com</p>
                    <a className="footerLink" href="tel:+16197210446"><FontAwesomeIcon icon={faPhone} /> (619) 721-0446</a>
                </div>
                <div className="footerIconDiv">
                    <FontAwesomeIcon className="footerIcon" icon={faUserAstronaut} />
                </div>
                <div className="footerSocialLinks">
                    <a className="footerLink" href="https://github.com/CaitHawk"><FontAwesomeIcon icon={faGithub} /> GitHub</a>
                    <a className="footerLink" href="https://twitter.com/CaitlinNeathawk"><FontAwesomeIcon icon={faTwitter} /> Twitter</a>
                    <a className="footerLink" href="https://www.linkedin.com/in/caitlin-neathawk-56216a228/"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a>
                </div>
            </div>
            <div className="footerBottom">
                <p>Copyright <FontAwesomeIcon icon={faCopyright} /> 2022 Caitlin Neathawk</p>
            </div>
        </section>
    );
}