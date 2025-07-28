import React,{Component} from "react";
import './App.css';

class Card extends Component{
    render(){
        return(
            <div className="scard">
                <h4 >{this.props.name}</h4>
                <div className="container container--3 ">
                    <p >{this.props.discuss}</p>
                </div>
            </div>
        )
    }
}
export default Card;