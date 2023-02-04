import React from 'react';
import ReactDOM from 'react-dom/client';
import './sass/Main.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
/* import NotFoundPage from "./pages/notfoundpage";
import About from './pages/About'; */
import CardView from './pages/CardView';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/pokemon/" element={<CardView />} />
        <Route path="*" element={<CardView />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);