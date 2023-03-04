import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation';

function Hello() {
  return (
    <>
      <Navigation />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
