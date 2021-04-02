import { Col, Container, Row } from "react-bootstrap"
import './footer.css'
function Footer()
{
    return(
        <>
        <section className="Footer">
        <Container>
            <Row className=" footer_first">
                <Col xs={4} md={4} lg={4}>
                    <div className="app_icon_image">
                       <img src="../images/download.webp" width="132px" height="32px"/>
                    </div>
                    <div className="social_icons mt-4">
                        <span><i class="fa fa-facebook"></i> </span>
                        <span><i class="fa fa-twitter" aria-hidden="true"></i></span>
                        <span><i class="fa fa-linkedin" aria-hidden="true"></i></span>
                        <span><i class="fa fa-youtube-play" aria-hidden="true"></i></span>
                        <span><i class="fa fa-instagram" aria-hidden="true"></i></span>
                        <span><i class="fa fa-telegram"></i></span>
                    </div>
                </Col>
                <Col xs={2} md={2} lg={2}>
                    <p>Download App</p>
                    <p>How to Play</p>
                    <p>Invite Friends</p>
                    <p>Fantasy Cricket</p>
                    <p>Fantasy Football</p>
                </Col>
                <Col xs={2} md={2} lg={2}>
                    <p>About Us</p>
                    <p>Jobs</p>
                    <p>Helpdesk</p>
                    <p>Community Guidelines</p>
                </Col>
                <Col xs={3} md={3} lg={3} style={{borderLeft:"1px solid #828282",height:"fit-content"}}>
                    <div className="logo_first">
                        <p>FOUNDING MEMBER</p>
                        <img src="../images/fifs_footer.webp"/>
                    </div>
                    <div className="logo_second mb-0">
                        <p>PLAY RESPONSIBLY</p>
                        <img src="../images/fp-logo.png"/>
                    </div>
                </Col>
            </Row>
            <Row className="footer_first_mobile ">
                <Col xs={6} md={6} lg={6} className="footer_col">
                    <div className="app_icon_image">
                       <img src="../images/download.webp" width="132px" height="32px"/>
                    </div>
                    <div className="social_icons mt-4">
                        <span><i class="fa fa-facebook"></i> </span>
                        <span><i class="fa fa-twitter" aria-hidden="true"></i></span>
                        <span><i class="fa fa-linkedin" aria-hidden="true"></i></span>
                        <span><i class="fa fa-youtube-play" aria-hidden="true"></i></span>
                        <span><i class="fa fa-instagram" aria-hidden="true"></i></span>
                        <span><i class="fa fa-telegram"></i></span>
                    </div>
                </Col>
                <Col xs={3} md={3} lg={3} className="footer_col">
                    <p>Download App</p>
                    <p>How to Play</p>
                    <p>Invite Friends</p>
                    <p>Fantasy Cricket</p>
                    <p>Fantasy Football</p>
                </Col>
                <Col xs={3} md={3} lg={3} className="footer_col">
                    <p>About Us</p>
                    <p>Jobs</p>
                    <p>Helpdesk</p>
                    <p>Community Guidelines</p>
                </Col>
                
            </Row>
            <Row className="footer_row_mobile ">
                <Col xs={6} md={6} lg={6}>
                        <div className="logo_first">
                            <p>FOUNDING MEMBER</p>
                            <img src="../images/fifs_footer.webp"/>
                        </div>
                </Col>
                <Col xs={6} md={6} lg={6}>
                        <div className="logo_second mb-0">
                            <p>PLAY RESPONSIBLY</p>
                            <img src="../images/fp-logo.png"/>
                        </div>
                    </Col>
            </Row>
            <Row className="">
                <Col lg={12} className="footer_second">
                    <h4>CORPORATE OFFICE</h4>
                    <p>Unit No.1802, 18th Floor, Tower B, Peninsula Business Park, 
                        Off Senapati Bapat Marg, Lower Parel, Mumbai 400013</p>
                </Col>
            </Row>
        </Container>
        </section>
        <section className="policies_row">
            <Container>
            <Row>
                <Col xs={6} md={6} lg={6} className="footer_secondpart1">
                  <p>Privacy Policy</p>
                </Col>
                <Col xs={6} md={6} lg={6} className="footer_secondpart2">
                  <p>Terms and Conditions</p>
                </Col>
            </Row>
            </Container>
        </section>
        <div className="sticky">
            <a href="" className="sticky_down">Download App</a>
        </div>
    </>
    )
}
export default Footer