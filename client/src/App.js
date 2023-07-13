import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Page Imports
import Home from './pages/Home';
import About from './pages/About';
import NoMatch from './pages/NoMatch';
import DuplicateCheck from './pages/DuplicateCheck';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/duplicate"
          element={<DuplicateCheck />}
        />
        <Route
          path="*"
          element={<NoMatch />}
        />
      </Routes>
    </Router>
  );
}

export default App;
