import './banner.css'
import {Col, Container, Row } from "react-bootstrap";
let style={
    backgroundImage: "url('../images/mobile_banne.png')",
    width:"100%"
}
function Banner()
{
    return(
        <div>
         <section  className="Mainpage">
             <Container style ={style} className="Main_container">
                 <Row>
                     <Col lg={12} className="plr-0 ptb-0">
                       <img src="../images/download.webp" className="logo"/>
                       <div className="mobile_logo_box">
                           <img src="../images/logo_mobile.png" width="100%"/>
                       </div>
                     </Col>
                 </Row>    
                 <Row className="Main_row w-100">
                     <Col md={6} lg={6}>
                         <div className="left-part">
                         </div> 
                     </Col>
                     <Col className="w-100 pr-0 pl-0"  md={6} lg={6}>
                         <div className="right-part">
                                <div className="internal-details">
                                    <p>Download the official Dream11 app</p>
                                    <div className="forminput">
                                        <input type="text" placeholder="Enter Mobile Number"/>
                                        <button className="formbutton">Get App Link</button>
                                    </div>
                                </div>
                                <button class="download-btn">Download App</button>
                         </div>
                     </Col>
                 </Row>
             </Container>
         </section>
         <section>
             <Row className="col1">
                 <Col xs={6} md={6}  lg={6} className="username_right">
                     <div className="userbox_inner_desktop">
                        <div>10 Crore+</div>
                        <p>USERS</p>
                     </div>
                     <div className="userbox_inner_mobile">
                        <div>10&nbsp;Cr+</div>
                        <p>Users</p>
                     </div>
                 </Col>
                 <Col xs={6} md={6} lg={6} className="username_left">
                 <div class="userbox_inner_desktop">
                        <div>25&nbsp;Crore+</div>
                        <p>USERS</p>
                 </div>
                 <div class="userbox_inner_mobile">
                        <div>25&nbsp;Cr+</div>
                        <p>Winnings</p>
                     </div>
                 </Col>
             </Row>
         </section>
        </div>
    )
}
export default Banner