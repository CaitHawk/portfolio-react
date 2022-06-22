import ProjectRoute from '../components/ProjectRoute';
import { wordleClone } from '../projectsData';

export default function WordleClone() {
    return (
        <ProjectRoute
            title={ wordleClone.information.title }
            pageDescription={ wordleClone.information.pageDescription }
            problems={ wordleClone.information.problems } 
            solutions={ wordleClone.information.solutions }
            stack={ wordleClone.stack }
            repo={ wordleClone.repo }
            link={ wordleClone.link }
            keys={ wordleClone.key }
        />
    );
}