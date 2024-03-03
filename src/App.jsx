/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "MAH E UROOJ",
  title: "JUNIOR ELEMENTARY SCHOOL TEACHER",
  email: "mahe.urooj@studentambassadors.com",
  gitHub: "https://www.github.com/MahEUrooj",
  instagram: "",
  linkedIn: "https://www.linkedin.com/in/maheurooj-15a4081ab",
  twitter: "https://www.twitter.com/urooj_mah",
  youTube: "https://www.youtube.com/channel/UC_G8hXu5fmse7WbJsx14ySA",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
