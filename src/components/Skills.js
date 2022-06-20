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
        <section className="skillsMain" id="skillsDesktop">
            <div className="skillsDesignDiv1"></div>
            <div className="skillsDesignDiv2"></div>
            <div className="skillsDiv">
                <h2 className="skillsTitle">Tech Stack</h2>
                <p className="skillsParagraph">Using the following languages & libraries, my passion has driven me to create beautiful, user friendly, responsive and accessible web applications</p>
                <ul className="skillsUl">
                    {skillsArray.map(skill => (
                        <li className="skillsSkill" key={`${skillsArray.indexOf(skill)}skill`}>{skill}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

function SkillsMobile() {
    return (
        <section className="skillsMain" id="skillsMobile">
            <div className="skillsDesignDiv1"></div>
            <div className="skillsDesignDiv2"></div>
            <div className="skillsDiv">
                <h2 className="skillsTitle">Tech Stack</h2>
                <p className="skillsParagraph">Using the following languages & libraries, my passion has driven me to create beautiful, user friendly, responsive and accessible web applications</p>
                <ul className="skillsUl">
                    {skillsArray.map(skill => (
                        <li className="skillsSkill" key={`${skillsArray.indexOf(skill)}skill`}>{skill}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
}


export { SkillsDesktop, SkillsMobile};