import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import HomePage from './pages/Homepage';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import ProjectsIndex from './pages/projects/Index';
import FrontendProject from './pages/projects/frontend';
import FrontendProjectDeatil from './pages/projects/frontend/frontend[id]';
import ContactPage from './pages/ContactPage';
import ResumePage from './pages/ResumePage';
import BackendProject from './pages/projects/backend';
import BackendProjectDeatil from './pages/projects/backend/backend[id]';
import CloudProject from './pages/projects/cloud';
import CloudProjectDeatil from './pages/projects/cloud/cloud[id]';
import DatabasesProject from './pages/projects/databases';
import DatabasesProjectDeatil from './pages/projects/databases/database[id]';
import AI_MLProject from './pages/projects/AI_ML';
import AI_MLProjectDeatil from './pages/projects/AI_ML/AI_ML[id]';
import MobileProject from './pages/projects/mobile';
import MobileProjectDeatil from './pages/projects/mobile/mobile[id]';
import NotFound from './pages/NotFoundPage';
import ScrollToTop from './utils/ScrolltoTop';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsIndex />} />

          <Route path="/projects/frontend" element={<FrontendProject />} />
          <Route path="/projects/frontend/:id" element={<FrontendProjectDeatil />} />

          <Route path="/projects/backend" element={<BackendProject />} />
          <Route path="/projects/backend/:id" element={<BackendProjectDeatil />} />

          <Route path="/projects/cloud" element={<CloudProject />} />
          <Route path="/projects/cloud/:id" element={<CloudProjectDeatil />} />

          <Route path="/projects/databases" element={<DatabasesProject />} />
          <Route path="/projects/databases/:id" element={<DatabasesProjectDeatil />} />

          <Route path="/projects/ai_ml" element={<AI_MLProject />} />
          <Route path="/projects/ai_ml/:id" element={<AI_MLProjectDeatil />} />

          <Route path="/projects/mobile" element={<MobileProject />} />
          <Route path="/projects/mobile/:id" element={<MobileProjectDeatil />} />

          <Route path="/contact" element={<ContactPage />} />
          <Route path="/resume" element={<ResumePage />} />

          {/* Not Found Page - Error 404 */}
          <Route path="*" element={<NotFound />} />

        </Routes>
      </Router>
    </>
  )
}

export default App
