import '../styles/Skills.css'

const skillsArray = [
    'HTML5',
    'CSS3',
    'Javascript',
    'Sass/Scss',
    'React',
    'Next JS',
    'Tailwind CSS',
    'Bootstrap',
    'Material UI',
    'Gatsby',
    'Node.js',
    'Git',
    'jQuery',
    'Chakra UI'
];

function SkillsDesktop() {
    return (
        <section className="skillsDesktopMain" id="skillsDesktop">
            <div className="skillsDesktopDesignDiv1"></div>
            <div className="skillsDesktopDesignDiv2"></div>
            <div className="skillsDesktopDiv">
                <h2 className="skillsDesktopTitle">Tech Stack</h2>
                <p className="skillsDesktopParagraph">Using the following languages & libraries, my passion has driven me to create beautiful, user friendly, responsive and accessible web applications</p>
                <ul className="skillsDesktopUl">
                    {skillsArray.map(skill => (
                        <li className="skillsDesktopSkill" key={`${skillsArray.indexOf(skill)}skill`}>{skill}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

function SkillsMobile() {
    return (
        <section className="skillsMobileMain" id="skillsMobile">
            <h1>Skills Mobile</h1>
        </section>
    );
}

export { SkillsDesktop, SkillsMobile };