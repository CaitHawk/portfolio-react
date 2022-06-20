import '../styles/Home.css';

function Home() {
    return (
        <section className="homeMain" id="homeDesktop">
            <div className="homeWrapper">
                <div className="homeTitleDiv">
                    <p className="homeTitle">Caitlin</p>
                    <p className="homeTitle">Neathawk</p>
                    <p className="homeInfo">She/Her | Engineer | Developer</p>
                </div>
                <div className="homeDescriptionDiv">
                    <p className="homeDescription homeDescriptionGreeting">Hello!</p>
                    <p className="homeDescription">Together we can build tools for the future.</p>
                    <p className="homeDescription">Tools that will change the world. Join Me.</p>
                </div>
            </div>
        </section>
    );
}


export default Home;