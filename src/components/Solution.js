import React,{Component} from "react";
import Card from "./Card";
import './App.css';
import Customer from "./Customer";
import Why from "./Why";

class Solution extends Component{
    render(){
        return(
            <div id="solutions" className="solDep">
            <div className="solution">
                <h1>Industrial Solutions</h1>
                <Card 
                name="01. TELECOMMUNICATION SECTOR"
                discuss="Increasing customer usage on networks
                        with solutions like Real-time Analytics
                        and Data Monetization."
                />
                  <Card 
                name="02. GOVERNMENT SECTOR"
                discuss="Providing secure payment solutions
                        ike Prepaid systems, QR payments, and
                        Smart POS."
                />
                  <Card 
                name="03. COMMERCIAL SECTOR "
                discuss="Increasing customer usage on networks
                        with solutions like Real-time Analytics
                        and Data Monetization."
                />
                  <Card 
                name="04. BANKING SECTOR"
                discuss="Focusing on Marketing, Quality,
                        and Compliance with solutions like Digital
                        Marketing and Risk Scoring. "
                />
                </div>
                <Customer />
                <Why />

            </div>
        );
    }
}
export default Solution;