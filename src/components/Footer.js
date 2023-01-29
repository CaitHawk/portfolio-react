import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUserAstronaut, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import '../styles/Footer.css'

export default function Footer() {
    return (
        <section className="footerMain">
            <div className="footerTop">
                <div className="footerContactLinks">
                    <p className="footerLink"><FontAwesomeIcon icon={faEnvelope} /> caitlinneathawk.dev@gmail.com</p>
                    <p className="footerLink"><FontAwesomeIcon icon={faLocationDot} /> Las Vegas, NV</p>
                </div>
                <div className="footerIconDiv">
                    <FontAwesomeIcon className="footerIcon" icon={faUserAstronaut} />
                </div>
                <div className="footerSocialLinks">
                    <a
                        className="footerLink"
                        href="https://github.com/CaitHawk"
                        target="_blank"
                        rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} /> GitHub</a>
                    <a
                        className="footerLink"
                        href="https://twitter.com/CaitlinNeathawk"
                        target="_blank"
                        rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} /> Twitter</a>
                    <a
                        className="footerLink"
                        href="https://www.linkedin.com/in/caitlin-neathawk-56216a228/"
                        target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a>
                </div>
            </div>
            <div className="footerBottom">
                <p>Copyright <FontAwesomeIcon icon={faCopyright} /> 2022 Caitlin Neathawk</p>
            </div>
        </section>
    );
}