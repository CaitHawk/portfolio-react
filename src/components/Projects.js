import { Link } from 'react-router-dom';
import { projectsData } from '../projectsData';
import { v4 as uuidv4 } from 'uuid';
import '../styles/Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBalanceScale } from '@fortawesome/free-solid-svg-icons';
import { faScissors } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';
import { faDice } from '@fortawesome/free-solid-svg-icons';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';

const icons = [faBalanceScale, faScissors, faUser, faMobileScreenButton, faDice, faCalculator];


function ProjectsSection() {
    return (
        <main className="projectsMain" id="projectsSection">
            <div className="projectsTitleDiv">
                <p>F</p>
                <p className="projectsAlternateP">E</p>
                <p>A</p>
                <p className="projectsAlternateP">T</p>
                <p>U</p>
                <p className="projectsAlternateP">R</p>
                <p>E</p>
                <p className="projectsAlternateP">D</p>
            </div>
            <ul className="projectsUl">
                {projectsData.map((project) => (
                    <Link to={project.path}
                        key={uuidv4()}
                        className={projectsData.indexOf(project) % 2 === 0 ?
                            "projectsLiLeft" :
                            "projectsLiRight"}>
                        <li className="projectsCard">
                            <h3 className="projectsCardH3">{project.information.title}</h3>
                            <FontAwesomeIcon 
                                icon={icons[projectsData.indexOf(project)]}
                                className="projectsIcon" />
                            <ul className="projectsCardUl">
                                {project.stack.map( s => (
                                    <li key={uuidv4()}
                                        className="projectsCardLi">
                                            {s}
                                        </li>
                                ))}
                            </ul>
                            <p className="projectsCardP">{project.information.cardDescription}</p>
                        </li>
                    </Link>
                ))}
            </ul>
        </main>
    );
}


export default ProjectsSection;