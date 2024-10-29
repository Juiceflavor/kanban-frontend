'use client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/navBar';
import Home from './views/home';
import MyBoards from './views/myBoards';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/my-boards" element={<MyBoards />} />
      </Routes>
    </Router>
  );
}

export default App;