import React,{Component} from "react";
import About from "./About";
import './App.css';

class Services extends Component{



    render(){

        return(
            <div id="services" className="services">
           <h2>OUR-SERVICES</h2>
           <h3>ICT SOLUTIONS AND SERVICES</h3> 
           <About 
           name="CCTV Solutions"
           discuss="As your trusted ICT partner, MOZON offers Hikvision's industry -leading video surveillance
                    products to meet all your security needs.
                    From hybrid DVRs and NVRs to IP cameras and speed domes, Hikvision's comprehensive
                    portfolio provides unparalleled flexibility and performance for analog, digital, or hybrid
                    video deployments. Trust MOZON to design, implement, and maintain a tailored Hikvision
                    surveillance system that elevates your security, deters criminal activity, and gives you complete
                    peace of mind "
           imgg="ip-cam.png"
           /> 
             <About 
           name="Video INTERCOM"
           discuss=" Enhance security and communication at your facility with MOZON's Hikvision video intercom
                    solutions. Hikvision's diverse product portfolio offers flexible IP, analog, and 2 -wire systems
                    to seamlessly integrate with your unique requirements. Trust MOZON to design and deploy
                    a high -performance Hikvision video intercom system that elevates access control, visitor
                    management, and tenant -to -visitor communications at your residential, commercial, or
                    industrial site."
           imgg="ip-cam.png"
           />  
            <About 
           name="SECURITY SYSTEMS"
           discuss=" MOZON is proud to offer advanced security solutions from Ajax Systems, the leading security
                    systems manufacturer in Europe. we provide access to Ajax's comprehensive suite of smart
                    home security products, including a wide range of reliable intrusion, fire, and leak detectors.
                    With cutting-edge hardware, intuitive software, and modern aesthetics, the Ajax security
                    system from MOZON delivers unparalleled protection and customization to keep your
                    home or business safe. "
           imgg="ajax3.jpeg"
           /> 
             <About 
           name="IP-COM COMMERICAL NETWORKING"
           discuss=" Equip your business with the networking power of IPCOM from MOZON. As a global leader
                    in commercial networking solutions, IP-COM delivers high-speed, secure, and user-friendly
                    connectivity to enterprises of all sizes. Leveraging cutting-edge technology, IPCOM's innovative
                    devices seamlessly unite your workforce, optimize workflows, and keep your business
                    competitive in the digital age. "
           imgg="ip-com.jpeg"
           />  
            <About 
           name="SMART HOME SECURITY"
           discuss="Safeguard your home with the next-generation security of EZVIZ from MOZON.
                    As a global leader in smart home technology, EZVIZ harnesses the power of cloud -connected
                    devices to deliver comprehensive, user
                    friendly protection. Monitor your property in real time, receive instant alerts, and manage
                    your home's safety from anywhere all through EZVIZ's intuitive platform.
                    Leveraging cutting edge sensors and intelligent software, MOZON's EZVIZ provides the
                    peace of mind and advanced capabilities you need to secure your most valuable asset.  "
           imgg="SMART-HOME.jpeg"
           /> 
               <About 
           name="ACCESS CONTROL AND TIME ATTENDANCE"
           discuss="Safeguard your organization's most critical assets with the ZKT ECO biometric platform
                    from MOZON.
                    Powered by an unparalleled patent portfolio, ZKT ECO delivers the industry's most advanced
                    fingerprint, iris, facial, vein, and palm print recognition. Combined with MOZON's pioneering
                    computer vision innovations, ZKT ECO also enables sophisticated facial analysis, behavior
                    identification, X-ray object detection, and video analytics. As the biometrics leader with
                    the highest number of patents, MOZON provides the most reliable and comprehensive
                    identification solutions to keep your organization secure and compliant. "
           imgg="ATTENDANCE3.jpeg"
           />  
           <About 
           name="NETWORK SWICHES"
           discuss="Fortify your SMB's security and connectivity with UTEPO's comprehensive range of video
                    surveillance and network solutions, available exclusively through MOZON.
                    As a leading global provider, UTEPO empowers MOZON to deliver reliable PoE switches,
                    security devices, industrial equipment, and wireless technologies tailored to the needs of
                    small and medium enterprises. Partner with MOZON to access UTEPO's innovative products
                    and transform the way you protect and connect your business. "
           imgg="SWICHES.jpeg"
           /> 
            <About 
           name="WEBSITE DESIGN AND DEVELOPMENT"
           discuss="Amplify your SMB's digital footprint with
                    MOZON's comprehensive website development
                    solutions.
                    As an experienced digital agency, MOZON
                    delivers tailored, high-converting web platforms
                    that engage your customers and propel your
                    business forward. Partner with MOZON to build
                    a custom, user-friendly website that showcases
                    your brand and drives measurable online growth "
           imgg="WEB2.jpeg"
           /> 
            <About 
           name="MOBILE APP DEVELOPMENT"
           discuss=" Take your SMB's digital capabilities to new heights
                    with MOZON's cutting-edge mobile app development
                    services.
                    As an MOZON leverages the latest technologies
                    and best practices to create custom, high-performing
                    mobile apps that captivate your customers and
                    streamline your business operations.
                    Partner with MOZON to build a feature-rich,
                    userfriendly mobile platform that enhances your
                    brand engagement, improves customer experiences,
                    and drives measurable results - all while adhering
                    to your unique requirements and objectives.
                    Unlock the full potential of your mobile strategy
                    with MOZON's skilled team of app designers,
                    developers, and digital marketers "
           imgg="MOBILE1.jpeg"
           /> 
                     </div>
        );
    }
}
export default Services;