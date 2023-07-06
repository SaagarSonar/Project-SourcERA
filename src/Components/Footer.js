import { Component } from "react";
import { LinkContainer } from "react-router-bootstrap";
import './Footer.css';

export class Footer extends Component{
    render(){
        return(
            <>   
            <footer>
             <div>
              <h4>Follow us</h4>
              <div style={{display:"flex",gap:"10px","marginTop":"20px"}}>
                <img id="facebook"className="social-media" src="facebook.png"/>
                <img id="instagram" className="social-media" src="instagram.png"/>
                <img id="Linkedin" className="social-media" src="linkedin.png"/>
                <img id="whatsapp" className="social-media" src="whatsapp.png"/>
              </div>
              <img src="location.png" className="social-media"/>
              <span style={{"fontSize":"20px"}}>Location :</span>
              <p>Office No. 14, Meenal Arcade Premises Co. Op. Society Ltd.,2nd Floor, Viman Nagar, Pune. 411 004.
                Maharashtra, India</p>
              <img src="phone.png" className="social-media"/>
              <span>8108182747 / 9096863441 / 9423893109</span>
              <br></br>
              <img src="mail.png" className="social-media"/>
              <span>training@sourcera.org</span>
                
             </div>
             <div>
              <h4>Courses</h4>
              <ul>
                
                  <li>
                    <LinkContainer to={'/civil-autocad'}>
                      <a>AutoCAD Civil</a>
                    </LinkContainer>
                  </li>
                  <li>
                    <LinkContainer to={'/mech-autocad'}>
                    <a>AutoCAD Mechanical</a>
                    </LinkContainer>
                  </li>
                  <li>
                  <LinkContainer to={'/electrical-autocad'}>
                    <a>AutoCAD Electrical</a>
                    </LinkContainer>
                  </li>
                  <li>
                  <LinkContainer to={'/mech-catia'}>
                    <a>CATIA</a>
                    </LinkContainer>
                  </li>
                
                
                  <li>
                  <LinkContainer to={'/it-ccna'}>
                    <a>CCNA</a>
                    </LinkContainer>
                  </li>
                
                
                  <li>
                    <LinkContainer to={'/civil-etabs'}>
                    <a>ETABS</a>
                    </LinkContainer>
                  </li>
                
                
                  <li>
                  <LinkContainer to={'/electrical-nxcad'}>
                    <a>NX CAD</a>
                    </LinkContainer>
                    </li>
                
                
                  <li>
                  <LinkContainer to={'/it-testing'}>
                    <a>Software Testing</a>
                    </LinkContainer>
                  </li>
                
              </ul>
            </div>
             <div  style={{"marginLeft":"20px"}}>
              <h4>Quick Links</h4>
              <img src="logo.jpg" style={{float:"right",width:"50%",height:"50%"}}/>
              <ul>
                  <li>
                  <LinkContainer to={'/instructor'}>
                    <a>Be an Instructor</a>
                    </LinkContainer>
                    </li>
                  <li>
                  <LinkContainer to={'/about-us'}>
                    <a>About Us</a>
                    </LinkContainer>
                  </li>
              </ul>
              <LinkContainer to={'/'}>
                    <a id="logo-name">SourcERA</a>
                  </LinkContainer> 
             </div>
            </footer>
            </> 
            );
    }
}
