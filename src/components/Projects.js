import { Link } from 'react-router-dom';
import { projectsData } from '../projectsData';
import '../styles/Projects.css';


function ProjectsDesktop() {
    return (
        <main className="projectsDesktopMain" id="projectsDesktop">
            <h1 className="projectsDesktopTitle">Projects Desktop</h1>
            <ul className="projectsDesktopUl">
                {projectsData.map((project) => (
                    <Link to={project.path} className="projectsDesktopLi">
                        <li key={project.key}>
                            <h3 className="projectsDesktopLiH3">{project.information.title}</h3>
                            <img src={project.image}
                                alt={project.information.title}
                                className="projectsDesktopLiImg" />
                            <p className="projectsDesktopLiP">{project.information.description}</p>
                            <a className="projectsDesktopAnchor" href={project.link}>View</a>
                        </li>
                    </Link>
                ))}
            </ul>
        </main>
    );
}

function ProjectsMobile() {
    return (
        <main id="projectsMobile">
            <h1>Projects Mobile</h1>
            <ul className="projectsMobileUl">
                {projectsData.map((project) => (
                    <li key={project.key + 1} className="projectsMobileLi">
                        <h3 className="projectMobileLiH3">{project.title}</h3>
                        <img src={project.image}
                            alt={project.title}
                            className="projectsMobileLiImg" />
                        <p className="projectsMobileLiP">{project.description}</p>
                        <a className="projectsMobileAnchor" href={project.link}>View</a>
                    </li>
                ))}
            </ul>
        </main>
    );
}

export { ProjectsDesktop, ProjectsMobile };