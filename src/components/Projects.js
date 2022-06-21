import { Link } from 'react-router-dom';
import { projectsData } from '../projectsData';
import { v4 as uuidv4 } from 'uuid';
import '../styles/Projects.css';


function ProjectsSection() {
    return (
        <main className="projectsMain" id="projectsSection">
            <div className="projectsTitleDiv">
                <p>F</p>
                <p>E</p>
                <p>A</p>
                <p>T</p>
                <p>U</p>
                <p>R</p>
                <p>E</p>
                <p>D</p>
            </div>
            <ul className="projectsUl">
                {projectsData.map((project) => (
                    <Link to={project.path}
                        key={uuidv4()}
                        className={projectsData.indexOf(project) % 2 === 0 ?
                            "projectsLiLeft" :
                            "projectsLiRight"}>
                        <li
                            style={{
                                backgroundImage: `url(${project.image})`,
                                width: "100%",
                                height: "700px"
                            }}>
                            <h3 className="projectsLiH3">{project.information.title}</h3>
                            <p className="projectsLiP">{project.information.cardDescription}</p>
                        </li>
                    </Link>
                ))}
            </ul>
        </main>
    );
}


export default ProjectsSection;