import "../styles/Header.css";

//header full

function HeaderFull() {
    return (
        <h1>Header full</h1>
    );
}


//header collapsed

const openNav = (id) => {
    document.getElementById(id).classlist.add("headerCollapsedShow")
    document.getElementById(id).classlist.remove("headerCollapsedHide")
    return;
}
const closeNav = (id) => {
    document.getElementById(id).classlist.add("headerCollapsedHide")
    document.getElementById(id).classlist.remove("headerCollapsedShow")
    return;
}

function HeaderCollapsed() {
    return (
        <div className="headerCollapsed">
            <p className="headerCollapsedLogo">Logo</p>
            <button className="headerCollapsedBtnOpen">Click</button>
            <nav className="headerCollapsedShowNav">
                <div className="headerCollapsedNavHeader">
                    <button className="headerCollapsedBtnClose">Close</button>
                </div>
                <a className="headerCollapsedNavLink">Home</a>
                <a className="headerCollapsedNavLink">About</a>
                <a className="headerCollapsedNavLink">Contact</a>
            </nav>
        </div>
    );
}

export { HeaderFull, HeaderCollapsed };