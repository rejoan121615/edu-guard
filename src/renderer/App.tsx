import { MemoryRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation';
import Header from './Components/Header/Header';
import Content from './Components/Content/Content';
// pages 
import Home from './Pages/Home';
import ClassNotices from './Pages/Class-&-notices';
import Connects from './Pages/connects';
import ShareCenter from './Pages/share-center';
import Profile from './Pages/Profile';
import Setting from './Pages/setting';
import Logout from './Pages/logout';

function Structure () {
  return (
    <>
      <Navigation />
      <Header />
      <Content />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Structure />}>
          <Route index element={<Navigate to='home' />} />
          <Route path="home" element={<Home />} />
          <Route path="class-&-notices" element={<ClassNotices />} />
          <Route path="connects" element={<Connects />} />
          <Route path="share-center" element={<ShareCenter />} />
          <Route path="profile" element={<Profile />} />
          <Route path="setting" element={<Setting />} />
          <Route path="logout" element={<Logout />} />
        </Route>
      </Routes>
    </Router>
  );
}
