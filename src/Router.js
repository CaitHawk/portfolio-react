import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { projectsData } from './projectsData';
import App from './App';
import ProjectRoute from './components/ProjectRoute';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                {projectsData.map(project => (
                    <Route path={project.path}
                        key={uuidv4()}
                        element={
                            <ProjectRoute
                                title={project.information.title}
                                pageDescription={project.information.pageDescription}
                                problems={project.information.problems}
                                solutions={project.information.solutions}
                                stack={project.stack}
                                repo={project.repo}
                                link={project.link}
                            />
                        }
                    />
                ))}
            </Routes>
        </BrowserRouter>
    );
}