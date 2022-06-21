import ProjectRoute from "../components/ProjectRoute";
import { jackOfAllFades } from "../projectsData";


export default function JackOfAllFades() {
    return (
        <ProjectRoute
            title={ jackOfAllFades.information.title }
            pageDescription={ jackOfAllFades.information.pageDescription }
            problems={ jackOfAllFades.information.problems }
            solutions={ jackOfAllFades.information.solutions }
            stack={ jackOfAllFades.stack }
            repo={ jackOfAllFades.repo }
            link={ jackOfAllFades.link }
            keys={ jackOfAllFades.key }
        />
    );
}