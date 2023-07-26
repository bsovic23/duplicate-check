import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Page Imports
import Home from './pages/Home';
import About from './pages/About';
import NoMatch from './pages/NoMatch';
import DuplicateCheck from './pages/DuplicateCheck';

function App() {
  return (
    <section class='application'>
      <Router>
        <Routes>
          <Route
            path="/duplicate-check/"
            element={<Home />}
          />
          <Route
            path="/duplicate-check/about"
            element={<About />}
          />
          <Route
            path="/duplicate-check/duplicate"
            element={<DuplicateCheck />}
          />
          <Route
            path="*"
            element={<NoMatch />}
          />
        </Routes>
      </Router>
    </section>
  );
}

export default App;
