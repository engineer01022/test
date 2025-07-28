import React,{Component} from "react";
import './App.css';
import './mozon.png'
class Header extends Component{
    render(){
        return(
            <div className="header fixed-top">
         
         <div className="logo float-left">
             <img src="mozon.png" alt="image" />
            
          </div>
    <nav className="nav">
  
        <li className="active"><a href="#header">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#services">Our Services</a></li>
        <li><a href="#faq">Solutions</a></li>
          <li><a href="#team">Our Clients</a></li>
        <li><a href="#contact">Contact Us</a></li>
       
          
    </nav>
            </div>
        );
    }
}
export default Header;