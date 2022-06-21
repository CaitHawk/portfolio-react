import ProjectRoute from "../components/ProjectRoute";
import { portfolioSite } from "../projectsData";

export default function PortfolioPage() {
    return (
        <ProjectRoute
            title={ portfolioSite.information.title }
            pageDescription={ portfolioSite.information.pageDescription }
            problems={ portfolioSite.information.problems }
            solutions={ portfolioSite.information.solutions }
            stack={ portfolioSite.stack }
            repo={ portfolioSite.repo }
            link={ portfolioSite.link }
            keys={ portfolioSite.key }
        />
    );
}