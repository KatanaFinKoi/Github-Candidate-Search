
import Nav from './components/Nav';
import { Routes, Route } from 'react-router-dom';
import CandidateSearch from './pages/CandidateSearch';
import SavedCandidates from './pages/SavedCandidates';

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route index element={<CandidateSearch />} />
        <Route path="/SavedCandidates" element={<SavedCandidates />} />
      </Routes>
    </div>
  );
}

export default App;
