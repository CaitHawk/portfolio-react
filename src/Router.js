import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import App from './App';
import JackOfAllFades from './routes/jack-of-all-fades';
import GrafLaw from './routes/graf-law';
import PortfolioPage from './routes/portfolio-page';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/jack-of-all-fades" element={<JackOfAllFades />} />
                <Route path="/graf-law" element={<GrafLaw />} />
                <Route path='/portfolio-page' element={<PortfolioPage />} />
            </Routes>
        </BrowserRouter>
    )
}