import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBalanceScale, 
    faScissors, 
    faUser, 
    faMobileScreenButton, 
    faDice, 
    faCalculator, 
    faHouse,
    faCalendar} from '@fortawesome/free-solid-svg-icons';
import { projectsData } from '../projectsData';
import '../styles/Projects.css';

const icons = [faHouse, faCalendar, faBalanceScale, faScissors, faUser, faMobileScreenButton, faDice, faCalculator,];
const featuredArray = ['F', 'E', 'A', 'T', 'U', 'R', 'E', 'D'];


function ProjectsSection() {
    return (
        <main className="projectsMain" id="projectsSection">
            <ul className="projectsTitleUl">
                { featuredArray.map( (letter, idx) => (
                    <li 
                        className={ idx % 2 === 0 ? '' : 'projectsAlternateLetter'}
                        key={`featuredArray${idx}`}>
                            { letter }
                    </li>
                ))}
            </ul>
            <ul className="projectsUl">
                {projectsData.map((project, idx) => (
                    <Link to={project.path}
                        key={uuidv4()}
                        className={idx % 2 === 0 ?
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