import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navigation from "../components/Navigation";

function Layout({ component: Component }) {
  return <>
    <Header />
    <Navigation />
    <Component />
    <Footer />
  </>;
}

export default Layout;
