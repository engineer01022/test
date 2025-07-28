import React,{Component} from 'react';
import Header from './Header';
import Home from './Home';
import About from './About';
import Work from './Work';
import Services from './Services';
import './App.css';
import Solution from './Solution';
import Contact from './Contact';
import Footer from './Footer';
import Service from './Service';
import Navbar from './navbar';
import AboutUs from './About-us';
class App extends Component{
  render(){
    return (
      <div>
<Navbar/>

    <Home />
 <AboutUs />
    <Work />
    <Service />
    <Solution />
    <Contact />
    <Footer />
    </div>);
  }
}
export default App;
