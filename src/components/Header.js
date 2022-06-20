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
                <a href="#skillsDesktop">SKILLS</a>
                <a href="#projectsDesktop">PROJECTS</a>
                <a href="#aboutDesktop">ABOUT</a>
                <a href="#contactDesktop">CONTACT</a>
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
                <a href="#skillsMobile" onClick={toggleMenu}>SKILLS</a>
                <a href="#projectsMobile" onClick={toggleMenu}>PROJECTS</a>
                <a href="#aboutMobile" onClick={toggleMenu}>ABOUT</a>
                <a href="#contactMobile" onClick={toggleMenu}>CONTACT</a>
            </nav>
            <button onClick={toggleMenu} className="headerCollapsedBtnOpen">
                <FontAwesomeIcon icon={faBars} />
            </button>
        </div>
    )
}

export { HeaderFull, HeaderCollapsed };