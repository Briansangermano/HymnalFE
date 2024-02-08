import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SplashScreen from "./components/SplashScreen";
import HymnContainer from "./components/HymnContainer";
import Search from "./components/Search";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import FirstLetters from "./components/FirstLetters";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/himno/:numero" element={<HymnContainer />}></Route>
        <Route path="/himno-list" element={<Search />}></Route>
        <Route path="/notFound" element={<NotFound />}></Route>
        <Route path="/firstLetters" element={<FirstLetters />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
