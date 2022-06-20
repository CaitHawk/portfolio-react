import { HeaderFull, HeaderCollapsed } from './Header';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDisplay } from '@fortawesome/free-solid-svg-icons';
import '../styles/ProjectRoute.css';
import '../styles/Header.css';
import '../styles/Footer.css';


const routeStack = ['HTML5', 'CSS3', 'React.js']

function ProjectRoute() {
    return (
        <div className="projectRoutePage">
            <HeaderFull />
            <HeaderCollapsed />
            <main className="projectRouteMain">
                <section className="projectRouteTitleDiv">
                    <h1 className="projectRouteTitle">Project title here</h1>
                    <p className="projectRouteSubtitle">Front End Development</p>
                    <div>
                        <a href="#" className="projectRouteTitleLink">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href="#" className="projectRouteTitleLink">
                            <FontAwesomeIcon icon={faDisplay} />
                        </a>
                    </div>
                </section>
                <section className="projectRouteInfoTop">
                    <div className="projectRouteDescriptionDiv">
                        <p className="projectRouteDescription">
                        <span className="projectRouteDescriptionSpan">Lorem ipsum</span> dolor sit amet consectetur adipisicing elit. Ad vero amet voluptatem explicabo aliquam!
                        </p>
                    </div>
                    <div className="projectRouteChallengeDiv">
                        <h2>Challenge</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad vero amet voluptatem explicabo aliquam! Eius cumque eligendi laborum perferendis, tenetur, error delectus consequuntur ea, accusantium eveniet nulla porro vitae fugiat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad vero amet voluptatem explicabo aliquam! Eius cumque eligendi laborum perferendis, tenetur, error delectus consequuntur ea, accusantium eveniet nulla porro vitae fugiat.</p>
                    </div>
                </section>
                <section className="projectRouteInfoBottom">
                    <div className="projectRouteStackLinkDiv">
                        <div className="projectRouteStackDiv">
                            <h3>Stack</h3>
                            <ul className="projectRouteStackUl">
                                {routeStack.map( stack => (
                                    <li key={`${routeStack.indexOf(stack)}stack`}>
                                        {stack}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="projectRouteLinkDiv">
                            <a href="#" className="projectRouteLink">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a href="#" className="projectRouteLink">
                                <FontAwesomeIcon icon={faDisplay} />
                            </a>
                        </div>
                    </div>
                    <div className="projectRouteSolutionDiv">
                        <h2>Solution</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad vero amet voluptatem explicabo aliquam! Eius cumque eligendi laborum perferendis, tenetur, error delectus consequuntur ea, accusantium eveniet nulla porro vitae fugiat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad vero amet voluptatem explicabo aliquam! Eius cumque eligendi laborum perferendis, tenetur, error delectus consequuntur ea, accusantium eveniet nulla porro vitae fugiat.</p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default ProjectRoute;

// I was tasked with demonstrating my understanding of API usage and state management by creating a trivia app using the Open Trivia API. The app needed to provide users with some level of choice on how they structure their trivia game, retrieve trivia questions and answers from the Open Trivia API, and give users an opportunity to answer trivia questions and get feedback on whether or not they answered them correctly.