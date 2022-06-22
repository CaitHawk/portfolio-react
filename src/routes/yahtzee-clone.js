import ProjectRoute from '../components/ProjectRoute';
import { yahtzeeClone } from '../projectsData';

export default function YahtzeeClone() {
    return (
        <ProjectRoute
            title={ yahtzeeClone.information.title }
            pageDescription={ yahtzeeClone.information.pageDescription }
            problems={ yahtzeeClone.information.problems } 
            solutions={ yahtzeeClone.information.solutions }
            stack={ yahtzeeClone.stack }
            repo={ yahtzeeClone.repo }
            link={ yahtzeeClone.link }
            keys={ yahtzeeClone.key }
        />
    );
}