import React, { useState, useEffect } from "react";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Brands from "./components/Brands/Brands";
// 1. Import HashRouter instead of BrowserRouter
// 2. Import Redirect for fallback
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom"; 
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ScrollToTop from "./components/ScrollToTop";
import Contact from "./components/Contact/Contact";

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {load ? (
        <Preloader load={load} />
      ) : (
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <Navbar />
          <ScrollToTop />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/project" component={Projects} />
            <Route path="/about" component={About} />
            <Route path="/brands" component={Brands} />
            <Route path="/contact" component={Contact} />
            {/* 3. Fallback: If page not found, go back Home */}
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;