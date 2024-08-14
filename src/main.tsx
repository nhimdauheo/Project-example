import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import SceneTwo from './pages/SceneTwo.tsx';

const root = createRoot(document.getElementById('root')!);

root.render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/scene-two" element={<SceneTwo />} />
      </Routes>
    </Router>
  </StrictMode>,
);
