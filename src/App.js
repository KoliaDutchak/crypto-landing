import Header from './components/elements/Header/Header.jsx'
import Clients from './components/elements/Clients/Clients.jsx';
import Section1 from './components/elements/Section1/Section1.jsx';
import Section2 from './components/elements/Section2/Section2.jsx';
import Section3 from './components/elements/Section3/Section3.jsx';
import Section4 from './components/elements/Section4/Section4.jsx';
import Section5 from './components/elements/Section5/Section5.jsx';
import Section6 from './components/elements/Section6/Section6.jsx';
import Section7 from './components/elements/Section7/Section7.jsx';
import FooterLinks from './components/elements/FooterLinks/FooterLinks.jsx';
import Footer from './components/elements/Footer/Footer.jsx'
import './App.css';

function App() {
  alert(true)

  return (
    <div className="container">
      <Header />
      <Clients />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <FooterLinks />
      <Footer />
    </div>
  );
}

export default App;
