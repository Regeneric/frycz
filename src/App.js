import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import "./assets/normalize.css";
import "./assets/root.css";
import "./assets/header.css";
import "./assets/main.css";
import "./assets/footer.css";
import "./assets/media.css";
// import "./assets/footer.css";

import Header from "./components/Header.component";
import MainPage from "./components/MainPage.component";
import Footer from "./components/Footer.component";

import Subpage from "./components/Subpage.component";

function MainView() {
  return(
      <Router>
          <Header />

          <Routes>
            <Route exact path="/" element={<MainPage/>} />

            <Route path="/oferta" element={<Subpage/>} />
            <Route path="/cennik" element={<Subpage/>} />
            <Route path="/galeria" element={<Subpage/>} />
            <Route path="/kontakt" element={<Subpage/>} />
          </Routes>

          <Footer />
      </Router>
  );
}; export default MainView;
