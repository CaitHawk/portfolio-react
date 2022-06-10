import '../styles/Projects.css';

const projectsData = [
    {
        title: "project 1",
        description: "project 1 description",
        image: "project 1",
        link: "project 1 link",
        key: "001"
    },
    {
        title: "project 2",
        description: "project 2 description",
        image: "project 2",
        link: "project 2 link",
        key: "002"
    },
    {
        title: "project 1",
        description: "project 1 description",
        image: "project 1",
        link: "project 1 link",
        key: "003"
    },
]

function ProjectsDesktop () {
    return (
        <main>
            <h1>Projects Desktop</h1>
            <ul className="projectsDesktopUl">
                { projectsData.map( (project) => (
                    <li key={ project.key } className="projectsDesktopLi">
                        <h3 className="projectsDesktopLiH3">{ project.title }</h3>
                        <img src={ project.image }
                            alt={ project.title }
                            className="projectsDesktopLiImg" />
                        <p className="projectsDesktopLiP">{ project.description }</p>
                        <a className="projectsDesktopAnchor" href={ project.link }>View</a>
                    </li>
                ))}
            </ul>
        </main>
    );
}

function ProjectsMobile () {
    return (
        <main>
            <h1>Projects Mobile</h1>
            <ul className="projectsMobileUl">
                { projectsData.map( (project) => (
                    <li key={ project.key + 1 } className="projectsMobileLi">
                        <h3 className="projectMobileLiH3">{ project.title }</h3>
                        <img src={ project.image }
                            alt={ project.title }
                            className="projectsMobileLiImg" />
                        <p className="projectsMobileLiP">{ project.description }</p>
                        <a className="projectsMobileAnchor" href={ project.link }>View</a>
                    </li>
                ))}
            </ul>
        </main>
    );
}

export { ProjectsDesktop, ProjectsMobile };