import ProjectRoute from '../components/ProjectRoute';
import { grafLaw } from '../projectsData';

export default function GrafLaw() {
    return (
        <ProjectRoute
            title={ grafLaw.information.title }
            pageDescription={ grafLaw.information.pageDescription }
            problems={ grafLaw.information.problems } 
            solutions={ grafLaw.information.solutions }
            stack={ grafLaw.stack }
            repo={ grafLaw.repo }
            link={ grafLaw.link }
            keys={ grafLaw.key }
        />
    );
}