import React from 'react';
import './App.css';
import Footer from "./Footer";
import TopMenu from "./TopMenu";
import MainContent from "./MainContent";

function App() {
  return (
    <div>
      <TopMenu/>
      <MainContent/>
      <Footer/>
    </div>
  );
}

export default App;
