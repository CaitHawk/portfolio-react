import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import "../styles/Header.css";

//header full

function HeaderFull() {
    return (
        <div className="headerFullDiv">
            <div className="headerFullLogoDiv">
                <FontAwesomeIcon icon={faUserAstronaut} className="headerFullLogo" />
            </div>
            <nav className="headerFullNav">
                <a href="#skills">SKILLS</a>
                <a href="#projectsDesktop">PROJECTS</a>
                <a href="#about">ABOUT</a>
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
            <FontAwesomeIcon icon={faUserAstronaut} className="headerCollapsedLogo" />
            <nav className={isOpen ? 'headerCollapsedShow' : 'headerCollapsedHide'}>
                <a href="#skills" onClick={toggleMenu}>SKILLS</a>
                <a href="#projectsMobile" onClick={toggleMenu}>PROJECTS</a>
                <a href="#about" onClick={toggleMenu}>ABOUT</a>
                <a href="#contactMobile" onClick={toggleMenu}>CONTACT</a>
            </nav>
            <button onClick={toggleMenu} className="headerCollapsedBtnOpen">
                <FontAwesomeIcon icon={faBars} />
            </button>
        </div>
    )
}

export { HeaderFull, HeaderCollapsed };