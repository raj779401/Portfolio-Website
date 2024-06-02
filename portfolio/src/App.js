// import logo from './logo.svg';
// import './App.css';
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import SocialIcon from "./components/SocilaIcons";



function App() {
  return (
   <div>
     <NavBar/>
    <Home/>
    <SocialIcon/>
    <About/>
    <Portfolio/>
    <Experience/>
    <Contact/>
   </div>
  );
}

export default App;
