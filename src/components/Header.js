import { Component } from 'react';
import { Link } from 'react-router-dom';
import "../styles/Header.css";

//header full

function HeaderFull() {
    return (
        <nav className="headerFullNav">
            <a href="#homeDesktop">Home</a>
            <a href="#skillsDesktop">Skills</a>
            <a href="#projectsDesktop">Projects</a>
            <a href="#aboutDesktop">About</a>
            <a href="#contactDesktop">Contact</a>
        </nav>
    );
}


//header collapsed

// const openNav = (id) => {
//     document.getElementById(id).classList.add("headerCollapsedShow")
//     document.getElementById(id).classList.remove("headerCollapsedHide")
//     return;
// }
// const closeNav = (id) => {
//     document.getElementById(id).classList.add("headerCollapsedHide")
//     document.getElementById(id).classList.remove("headerCollapsedShow")
//     return;
// }

class HeaderCollapsed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true
        };
        this.handleClick = this.handleClick.bind(this);
        this.toggleState = this.toggleState.bind(this);
    }
    toggleState() {
        this.setState(st => {
            return {
                isOpen: !st.isOpen
            }
        })
    }

    handleClick(e) {
        this.toggleState();
    }
    render() {
        return (
            <div className="headerCollapsed" >
                <p className="headerCollapsedLogo">Logo</p>
                <button
                    className="headerCollapsedBtnOpen"
                    onClick={this.handleClick}>
                    Click
                </button>
                <nav
                    className={this.state.isOpen ? "headerCollapsedShow" : 'headerCollapsedHide'}
                >
                    <div className="headerCollapsedNavHeader">
                        <button
                            className="headerCollapsedBtnClose"
                            onClick={this.handleClick}>
                            Close
                        </button>
                    </div>
                    <a className="headerCollapsedNavLink">Home</a>
                    <a className="headerCollapsedNavLink">About</a>
                    <a className="headerCollapsedNavLink">Contact</a>
                </nav>
            </div>
        )
    }
}

// function HeaderCollapsed() {
//     return (
//         <div className="headerCollapsed">
//             <p className="headerCollapsedLogo">Logo</p>
//             <button className="headerCollapsedBtnOpen">Click</button>
//             <nav className="headerCollapsedShowNav" id="headerCollapsedNav">
//                 <div className="headerCollapsedNavHeader">
//                     <button className="headerCollapsedBtnClose" onClick={() => closeNav("headerCollapsedNav")}>Close</button>
//                 </div>
//                 <a className="headerCollapsedNavLink">Home</a>
//                 <a className="headerCollapsedNavLink">About</a>
//                 <a className="headerCollapsedNavLink">Contact</a>
//             </nav>
//         </div>
//     );
// }

export { HeaderFull, HeaderCollapsed };