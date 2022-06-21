import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import "../styles/Header.css";

//header full

function HeaderFull() {
    return (
        <div className="headerFullDiv">
            <div className="headerFullLogoDiv">
                <Link to="/">
                    <FontAwesomeIcon icon={faUserAstronaut} className="headerFullLogo" />
                </Link>
            </div>
            <nav className="headerFullNav">
                <a href="#skillsSection">SKILLS</a>
                <a href="#projectsSection">PROJECTS</a>
                <a href="#aboutSection">ABOUT</a>
                <a href="#contactSection">CONTACT</a>
            </nav>
        </div>
    );
}


//header collapsed

function HeaderCollapsed() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    return (
        <div className="headerCollapsedDiv">
            <Link to="/">
                <FontAwesomeIcon icon={faUserAstronaut} className="headerCollapsedLogo" />
            </Link>
            <nav className={isOpen ? 'headerCollapsedShow' : 'headerCollapsedHide'}>
                <a href="#skillsSection" onClick={toggleMenu}>SKILLS</a>
                <a href="#projectsSection" onClick={toggleMenu}>PROJECTS</a>
                <a href="#aboutSection" onClick={toggleMenu}>ABOUT</a>
                <a href="#contactSection" onClick={toggleMenu}>CONTACT</a>
            </nav>
            <button onClick={toggleMenu} className="headerCollapsedBtnOpen">
                <FontAwesomeIcon icon={faBars} />
            </button>
        </div>
    )
}



export { HeaderFull, HeaderCollapsed };