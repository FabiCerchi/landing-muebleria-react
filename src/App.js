import './App.css';
import Header from './components/HeaderComponent/Header'
import Footer from './components/FooterComponent/Footer'
import Main from './components/MainComponent/Main'
import { useState } from 'react';

function App() {
  return (
    <div className=''>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
