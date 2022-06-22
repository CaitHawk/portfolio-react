import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDisplay, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import '../styles/ProjectRoute.css';
import '../styles/Header.css';
import '../styles/Footer.css';


function ProjectRoute(props) {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    return (
        <div className="projectRoutePage">
            <header className="projectRouteHeader">
                <Link to="/" className="projectRouteBackButton">
                    <FontAwesomeIcon className="projectRouteHeaderIcon" icon={faChevronLeft} />
                    BACK
                </Link>

            </header>
            <main className="projectRouteMain">
                <section className="projectRouteTitleDiv">
                    <h1 className="projectRouteTitle">{props.title}</h1>
                    <p className="projectRouteSubtitle">Front End Development</p>
                    <div>
                        <a
                            href={props.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="projectRouteTitleLink">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a
                            href={props.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="projectRouteTitleLink">
                            <FontAwesomeIcon icon={faDisplay} />
                        </a>
                    </div>
                </section>
                <section className="projectRouteInfoTop">
                    <div className="projectRouteDescriptionDiv">
                        <p className="projectRouteDescription">
                            <span className="projectRouteDescriptionSpan">{props.title}</span>
                            {props.pageDescription}
                        </p>
                    </div>
                    <div className="projectRouteChallengeDiv">
                        <h2>Challenges</h2>
                        <p>{props.problems}</p>
                    </div>
                </section>
                <section className="projectRouteInfoBottom">
                    <div className="projectRouteStackLinkDiv">
                        <div className="projectRouteStackDiv">
                            <h3>Stack</h3>
                            <ul className="projectRouteStackUl">
                                {props.stack.map(s => (
                                    <li key={uuidv4()}>
                                        {s}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="projectRouteLinkDiv">
                            <a
                                href={props.repo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="projectRouteLink">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a
                                href={props.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="projectRouteLink">
                                <FontAwesomeIcon icon={faDisplay} />
                            </a>
                        </div>
                    </div>
                    <div className="projectRouteSolutionDiv">
                        <h2>Solution</h2>
                        <p>{props.solutions}</p>
                    </div>
                </section>
                <Footer />
            </main>
        </div>
    );
}

export default ProjectRoute;

// I was tasked with demonstrating my understanding of API usage and state management by creating a trivia app using the Open Trivia API. The app needed to provide users with some level of choice on how they structure their trivia game, retrieve trivia questions and answers from the Open Trivia API, and give users an opportunity to answer trivia questions and get feedback on whether or not they answered them correctly.