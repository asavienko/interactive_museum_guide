import React from 'react';
import Footer from "./Footer";
import TopMenu from "./TopMenu";
import MainContent from "./MainContent";
import 'antd/dist/antd.css';

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
