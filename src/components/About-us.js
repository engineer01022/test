import React,{Component} from "react";
import './App.css';
import About from "./About";

class AboutUs extends Component{
    render(){
        return(
            <div id="about">
            <About 
            name="About Us"
        discuss="    MOZON Technology is a leading provider of ICT solutions in Saudi Arabia, serving
                      clients across the Kingdom. The company has accumulated extensive industry
                      experience over the years, positioning it as a contributor to shaping future technology
                      standards in the region .           Staffed by a team of experienced and qualified ICT professionals, MOZON delivers
        customized services and solutions tailored to the unique requirements of its clients,
        catering to organizations of all sizes across various sectors, including the corporate,
        public, and education verticals, and demonstrating its ability to understand and
        address the specific needs of diverse organizations. Committed to building long
        -term partnerships, MOZON collaborates with renowned international partners to
        provide comprehensive and innovative solutions to its customers, underpinned by
        core values of trust, integrity, and teamwork, with the company's growth and success
        reflecting its unwavering focus on customer satisfaction and the delivery of
        exceptional service quality."
        imgg="about-us.webp" 
            />
       </div> )
    }
}
export default AboutUs;