import '../css/Firstpage.css'
import {Col, Container, Row } from "react-bootstrap";
function Firstpage()
{
    const style={
        backgroundImage: "url('../images/mobile_banne.png')",
        backgroundSize:"591px",
        backgroundRepeat:"no-repeat",
    }
    return(
        <div>
         <section  className="Mainpage">
             <Container style ={style} className="Main_container">
                 <Row>
                     <Col lg={12} className="plr-0 ptb-0"s>
                       <img src="../images/download.webp" className="logo"/>
                     </Col>
                 </Row>    
                 <Row className="Main_row">
                     <Col md={6} lg={6}>
                         <div className="left-part">
                         </div> 
                     </Col>
                     <Col md={6} lg={6}>
                         <div className="right-part">
                                <div className="internal-details">
                                    <p>Download the official Dream11 app</p>
                                    <div className="forminput">
                                        <input type="text" placeholder="Enter Mobile Number"/>
                                        <button className="formbutton">Get App Link</button>
                                    </div>
                                </div>
                                <button class="download-btn">Download</button>
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
export default Firstpage