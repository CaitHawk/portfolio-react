import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3 } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faSass } from '@fortawesome/free-brands-svg-icons';
import { faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/About.css';

// const skillsArr = [
//     "HTML 5",
//     "CSS",
//     "JavaScript",
//     "React",
//     "Next JS",
//     "Node.js",
//     "Sass/Scss",
//     "jQuery",
//     "Bootstrap"
// ]
function SkillsIcons () {
    return (
        <div className="skillsIconsDiv">
            <FontAwesomeIcon icon={faHtml5} />
            <FontAwesomeIcon icon={faCss3} />
            <FontAwesomeIcon icon={faJs}/>
            <FontAwesomeIcon icon={faReact} />
            <FontAwesomeIcon icon={faNodeJs} />
            <FontAwesomeIcon icon={faSass} />
            <FontAwesomeIcon icon={faBootstrap} />
        </div>
    )
}

function AboutDesktop () {
    return (
        <section className="aboutDesktopMain" id="aboutDesktop">
            <h1>About Desktop</h1>
            <SkillsIcons />
        </section>
    );
}

function AboutMobile () {
    return (
        <main className="aboutMobileMain" id="aboutMobile">
            <SkillsIcons />
            <h1>About Mobile</h1>
        </main>
    );
}

export { AboutDesktop, AboutMobile };