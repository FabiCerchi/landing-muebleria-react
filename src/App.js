import './App.css';
import Header from './components/HeaderComponent/Header'
import Footer from './components/FooterComponent/Footer'
import Main from './components/MainComponent/Main'
import WhatsApp from './components/WhatsAppComponent/WhatsAppComponent';

function App() {
  return (
    <div className=''>
      <Header/>
      <Main/>
      <WhatsApp/>
      <Footer/>
    </div>
  );
}

export default App;
