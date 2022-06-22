import ProjectRoute from '../components/ProjectRoute';
import { javascriptCalculator } from '../projectsData';

export default function JavascriptCalculator() {
    return (
        <ProjectRoute
            title={ javascriptCalculator.information.title }
            pageDescription={ javascriptCalculator.information.pageDescription }
            problems={ javascriptCalculator.information.problems } 
            solutions={ javascriptCalculator.information.solutions }
            stack={ javascriptCalculator.stack }
            repo={ javascriptCalculator.repo }
            link={ javascriptCalculator.link }
            keys={ javascriptCalculator.key }
        />
    );
}