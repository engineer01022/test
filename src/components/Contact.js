import React,{Component} from "react";
import './App.css';
import  { FaWhatsapp, FaPhone, FaEnvelope, FaFacebookF, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';

class Contact extends Component{
    render(){
        return(
            <div id="contact" className="contact">
  <div>
                <h2>Mozon company</h2>
                </div>
          
            <div class="info">
              
                <div>
              
                <a href="https://maps.app.goo.gl/XaeKQS5ypBCivPb2A" >
        <FaMapMarkerAlt className="icon location"/>
      </a>    
                  </div>

              <div>
             
                 <a href="mailto:example@email.com">
        <FaEnvelope className="icon email" />
      </a> 
              </div>
              <div>
              
               <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
        <FaFacebookF className="icon facebook" />
      </a> 
              </div>

              <div>
            
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp className="icon whatsapp" />
      </a>  
              </div>
                </div>
                
      <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3571.376712190361!2d50.033775999999996!3d26.475813000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDI4JzMyLjkiTiA1MMKwMDInMDEuNiJF!5e0!3m2!1sar!2ssa!4v1742411115837!5m2!1sar!2ssa" width="100%" height="450"></iframe>    </div>   
                </div>
        );
    }
}
export default Contact;