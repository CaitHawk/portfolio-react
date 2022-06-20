import portfolioPicture from '../portfolioPicture.JPG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../styles/About.css';



function AboutDesktop() {
    return (
        <section className="aboutMain" id="aboutDesktop">
            <div className="aboutWrapper">
                <div className="aboutInfoDiv">
                    <h3 className="aboutInfoSubtitle">Career</h3>
                    <p className="aboutInfoParagraph">Self-motivated self-starter. Nucamp Alumn. Myspace "about me" section pioneer. I've been coding as a hobby since 2019 and changed my career in 2020 after falling in love with all things web development. I currently work on the front-end as my asperations toward server side continues to grow. </p>
                    <h3 className="aboutInfoSubtitle">Personal Life</h3>
                    <p className="aboutInfoParagraph">Wife, mother, nature lover, activist, cat owner, island girl. Oahu native with a perfect work-life balance. I'm a puzzle master and logic guru who literally codes for fun. Nothing gets me more than a good book, a good laugh, and good food.</p>
                    <a href="https://docs.google.com/document/d/1TP0hzK1nOVQASSmwH-zebmyYEt7YB7XKJWe1hTn2WjQ/edit?usp=sharing"
                        className="aboutInfoButton">VIEW MY RESUME</a>
                </div>
                <div className="aboutImgSocialDiv">
                    <img alt="Caitlin Neathawk" src={portfolioPicture} className="aboutImg" />
                    <div className="aboutSocialLinksDiv">
                        <a href="https://github.com/CaitHawk" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                        <a href="https://twitter.com/CaitlinNeathawk" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href="https://www.linkedin.com/in/caitlin-neathawk-56216a228/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                    </div>
                </div>
            </div>
        </section>
    );
}

function AboutMobile() {
    return (
        <section className="aboutMain" id="aboutMobile">
            <div className="aboutWrapper">
                <div className="aboutInfoDiv">
                    <h3 className="aboutInfoSubtitle">Career</h3>
                    <p className="aboutInfoParagraph">Self-motivated self-starter. Nucamp Alumn. Myspace "about me" section pioneer. I've been coding as a hobby since 2019 and changed my career in 2020 after falling in love with all things web development. I currently work on the front-end as my asperations toward server side continues to grow. </p>
                    <h3 className="aboutInfoSubtitle">Personal Life</h3>
                    <p className="aboutInfoParagraph">Wife, mother, nature lover, activist, cat owner, island girl. Oahu native with a perfect work-life balance. I'm a puzzle master and logic guru who literally codes for fun. Nothing gets me more than a good book, a good laugh, and good food.</p>
                    <a href="https://docs.google.com/document/d/1TP0hzK1nOVQASSmwH-zebmyYEt7YB7XKJWe1hTn2WjQ/edit?usp=sharing"
                        className="aboutInfoButton">VIEW MY RESUME</a>
                </div>
                <div className="aboutImgSocialDiv">
                    <img alt="Caitlin Neathawk" src={portfolioPicture} className="aboutImg" />
                    <div className="aboutSocialLinksDiv">
                        <a href="https://github.com/CaitHawk" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                        <a href="https://twitter.com/CaitlinNeathawk" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href="https://www.linkedin.com/in/caitlin-neathawk-56216a228/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                    </div>
                </div>
            </div>
        </section>
    );
}


export { AboutDesktop, AboutMobile};