import portfolioPicture from '../portfolioPicture.JPG';
import '../styles/About.css';



function About() {
    return (
        <section className="aboutMain" id="aboutDesktop">
            <div className="aboutWrapper">
                <div className="aboutInfoDiv">
                    {/* <h2 className="aboutDesktopInfoTitle">About me</h2> */}
                    <h3 className="aboutInfoSubtitle">Career</h3>
                    <p className="aboutInfoParagraph">Self-motivated self-starter. Nucamp Alumn. Myspace aboutme section pioneer. I've been coding as a hobby since 2019 and changed my career in 2020 after falling in love with all things web development. I currently work on the front-end as my asperations toward server side continues to grow. </p>
                    <h3 className="aboutInfoSubtitle">Personal Life</h3>
                    <p className="aboutInfoParagraph">Wife, mother, nature lover, activist, cat owner, island girl. Oahu native with a perfect work-life balance. I'm a puzzle master and logic guru who literally codes for fun. Nothing gets me more than a good book, a good laugh, and good food.</p>
                    <a href="https://docs.google.com/document/d/1TP0hzK1nOVQASSmwH-zebmyYEt7YB7XKJWe1hTn2WjQ/edit?usp=sharing"
                        className="aboutInfoButton">VIEW MY RESUME</a>
                </div>
                <img alt="Caitlin Neathawk" src={portfolioPicture} className="aboutImg" />
            </div>
        </section>
    );
}


export default About;