import React,{Component} from 'react';
import './App.css';
class About extends Component{
    render(){
        return(
            <div  className='about'>
             <h2>{this.props.name}</h2>
            <div className='abou'> 
             <p>
             {this.props.discuss} 
             </p>
             <img src={this.props.imgg} alt="image" />
            </div></div>
        )
    }
}
export default About;