import './banner.css'
import {Col, Container, Row } from "react-bootstrap";
let style={
    backgroundImage: "url('../images/banner/mobile_banne.png')",
    width:"100%"
}
function Banner()
{
    return(
        <div>
         <section  className="banner">
             <Container  style ={style}>
                 <Row>
                     <Col lg={12} className="plr-0 ptb-0">
                       <img src="../images/banner/download.webp" className="logo"/>
                       <div className="mobileLogoBox">
                           <img src="../images/banner/logo_mobile.png" width="100%"/>
                       </div>
                     </Col>
                 </Row>    
                 <Row className="mainRow w-100">
                     <Col md={6} lg={6}>
                         <div className="bannerImage">
                         </div> 
                     </Col>
                     <Col className="w-100 pr-0 pl-0"  md={6} lg={6}>
                         <div className="bannerDescription">
                                <div className="bannerDetails">
                                    <p>Download the official Dream11 app</p>
                                    <div className="formInput">
                                        <input type="text" placeholder="Enter Mobile Number"/>
                                        <button className="formButton">Get App Link</button>
                                    </div>
                                </div>
                                <button className="downloadBtn">Download App</button>
                         </div>
                     </Col>
                 </Row>
             </Container>
         </section>
         <section>
             <Row className="usersTotal">
                 <Col xs={6} md={6}  lg={6} className="usersTotalRight">
                     <div className="usersInnerDesktop">
                        <div>10 Crore+</div>
                        <p>USERS</p>
                     </div>
                     <div className="usersInnerMobile">
                        <div>10&nbsp;Cr+</div>
                        <p>Users</p>
                     </div>
                 </Col>
                 <Col xs={6} md={6} lg={6} className="usersTotalLeft">
                 <div className="usersInnerDesktop">
                        <div>25&nbsp;Crore+</div>
                        <p>USERS</p>
                 </div>
                 <div className="usersInnerMobile">
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