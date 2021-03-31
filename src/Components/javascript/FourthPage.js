import { Col,Row, Container } from "react-bootstrap";
import '../css/FourthPage.css'
import FourthPage_subpart from "./FourthPage_subpart";
function FourthPage()
{
    return(
       <>
       <section className="FourthPage">
           <Container>
               <Row>
                   <Col lg={12}>
                   <h2 className="universal_heading">Compete with other sports fans and 
                   <span style={{color:"red"}}> Win</span></h2>
                   </Col>
               </Row>
               <Row>
                   <Col md={6} lg={6} className="fourth_part_div1">
                       <img src="../images/get_app_banner.webp" width="100%"/>
                   </Col>
                   <Col md={6} lg={6} className="fourth_part_div2">
                       <div className="app_text">
                           <ul className="app_text_ul">
                              <FourthPage_subpart img="../images/win_crore_1.webp" text="Play with over 10 Crore Dream11 users in public 
                              contests or create your own private contest"/>
                              <FourthPage_subpart img="../images/win_crore_2.webp" text="Chat with friends on Groups and challenge them to contests"/>
                              <FourthPage_subpart img="../images/win_crore_3.webp" text="Invite others and earn Rs.100 Cash Bonus for each friend that joins"/>
                           </ul>
                       </div>
                       <div className="app_button">
                           <div>
                                <img src="../images/d11_playstore.webp" width="156px" className="first_image"/>
                                <img src="../images/d11_appstore.webp" width="150px"/>
                           </div>
                       </div>
                       <div className="app_code">
                                <img src="../images/download_qr.webp" width="92px" className="first_image"/>
                                <p>Scan the QR Code to download the app</p>
                       </div>
                   </Col>
               </Row>
           </Container>
       </section>
       </>
    )
}
export default FourthPage