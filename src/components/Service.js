import React,{Component} from "react";
import About from "./About";
import './App.css';
import info from "./Info";
class Service extends Component{
constructor(){
    super();
    this.state = {
        info: info
    }
    const test=[];
}
mapping(x){
    const items= x.map(item =><About
           name={item.name}
           discuss={item.discuss}
           imgg={item.imgg}
               />);
   
      
       return items
   }


clickeventer(){
  
}
    render(){

        return(
            <div id="services" className="services">
           <h2>OUR-SERVICES</h2>
           <h3>ICT SOLUTIONS AND SERVICES</h3> 
         {this.mapping(this.state.info)}
                     </div>
        );
    }
}
export default Service;