import { Col,Row, Container } from "react-bootstrap";
import './guidelines.css'
import GuidelineDetails from "./guidelineDetails";
function Guidelines()
{
    return(
       <>
       <section className="guidelines">
           <Container>
               <Row>
                   <Col lg={12}>
                   <h2 className="universal_heading">Compete with other sports fans and 
                   <span style={{color:"red"}}> Win</span></h2>
                   </Col>
               </Row>
               <Row>
                   <Col md={6} lg={6} className="guidelinesImage">
                       <img src="../images/guidelines/get_app_banner.webp" width="100%"/>
                   </Col>
                   <Col md={6} lg={6} className="guidelinesInformation">
                       <div className="appText">
                           <ul className="app_text_ul">
                              <GuidelineDetails img="../images/guidelines/win_crore_1.webp" text="Play with over 10 Crore Dream11 users in public
                              contests or create your own private contest"/>
                              <GuidelineDetails img="../images/guidelines/win_crore_2.webp" text="Chat with friends on Groups and challenge them to contests"/>
                              <GuidelineDetails img="../images/guidelines/win_crore_3.webp" text="Invite others and earn Rs.100 Cash Bonus for each friend that joins"/>
                           </ul>
                       </div>
                       <div className="appButton">
                           <div>
                                <img src="../images/guidelines/d11_playstore.webp" width="156px" className="firstImage"/>
                                <img src="../images/guidelines/d11_appstore.webp" width="150px"/>
                           </div>
                       </div>
                       <div className="appCode">
                                <img src="../images/guidelines/download_qr.webp" width="92px" className="firstImage"/>
                                <p>Scan the QR Code to download the app</p>
                       </div>
                   </Col>
               </Row>
           </Container>
       </section>
       </>
    )
}
export default Guidelines