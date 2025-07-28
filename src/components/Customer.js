import React,{Component} from "react";
import './App.css';

class Customer extends Component{
    render(){
        return(
            <div id="clients" className="customer">
                <h3>Some of our clients</h3>
                 <div class="tag-list">
            <div className="inner">
              <div className="tag"><img src="catgroup-lbox-320x160-FFFFFF.webp" /></div>
              <div className="tag"><img src="Nesma_Partners_Logo_RGB.png" /></div>
              <div className="tag"><img src="KJO-logo.webp" /></div>
              <div className="tag"><img src="Bin_Quraya_Logo.png" /></div>
              <div className="tag"><img src="CPP-logo-lbox-320x160-FFFFFF.webp" /></div>
              <div className="tag"><img src="Tamer_Logo_FMTI_AR_RGB.png" /></div>

              <div className="fade"></div>
            </div>
          </div>
            </div>
        );
    }
}
export default Customer;