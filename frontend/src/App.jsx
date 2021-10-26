import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./styles/style.scss";

import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import SingleProductPage from './pages/SingleProductPage';
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import TermsPage from "./pages/TermsPage";
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import { ContextProvider } from "./contexts/Context";

function App() {

  return (
    <div className="App layout">
      <Router>
        <ContextProvider>
          <Header />
          <Navigation />
          <Route 
            path="/"
            exact
            component={HomePage}
          />
          <Route 
            path="/products"
            component={ProductsPage}
          />
          <Route 
            path="/single-product"
            component={SingleProductPage}
          />
          <Route 
            path="/about"
            component={AboutPage}
          />
          <Route 
            path="/contact"
            component={ContactPage}
          />
          <Route 
            path="/terms"
            component={TermsPage}
          />
          <Footer />
          </ContextProvider>
      </Router>
    </div>
  );
}

export default App;
