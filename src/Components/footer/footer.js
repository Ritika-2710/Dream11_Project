import { Col, Container, Row } from "react-bootstrap"
import './footer.css'
function Footer()
{
    return(
        <>
        <section className="footer">
        <Container>
            <Row className=" footerFirst">
                <Col xs={4} md={4} lg={4}>
                    <div className="app_icon_image">
                       <img src="../images/footer/download.webp" width="132px" height="32px"/>
                    </div>
                    <div className="socialIcons mt-4">
                        <span><i className="fa fa-facebook"></i> </span>
                        <span><i className="fa fa-twitter" aria-hidden="true"></i></span>
                        <span><i className="fa fa-linkedin" aria-hidden="true"></i></span>
                        <span><i className="fa fa-youtube-play" aria-hidden="true"></i></span>
                        <span><i className="fa fa-instagram" aria-hidden="true"></i></span>
                        <span><i className="fa fa-telegram"></i></span>
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
                    <div className="firstLogo">
                        <p>FOUNDING MEMBER</p>
                        <img src="../images/footer/fifsFooter.webp"/>
                    </div>
                    <div className="secondLogo mb-0">
                        <p>PLAY RESPONSIBLY</p>
                        <img src="../images/footer/fp-logo.png"/>
                    </div>
                </Col>
            </Row>
            <Row className="footerFirstMobile ">
                <Col xs={6} md={6} lg={6} className="footerCol">
                    <div className="app_icon_image">
                       <img src="../images/footer/download.webp" width="132px" height="32px"/>
                    </div>
                    <div className="socialIcons mt-4">
                        <span><i className="fa fa-facebook"></i> </span>
                        <span><i className="fa fa-twitter" aria-hidden="true"></i></span>
                        <span><i className="fa fa-linkedin" aria-hidden="true"></i></span>
                        <span><i className="fa fa-youtube-play" aria-hidden="true"></i></span>
                        <span><i className="fa fa-instagram" aria-hidden="true"></i></span>
                        <span><i className="fa fa-telegram"></i></span>
                    </div>
                </Col>
                <Col xs={3} md={3} lg={3} className="footerCol">
                    <p>Download App</p>
                    <p>How to Play</p>
                    <p>Invite Friends</p>
                    <p>Fantasy Cricket</p>
                    <p>Fantasy Football</p>
                </Col>
                <Col xs={3} md={3} lg={3} className="footerCol">
                    <p>About Us</p>
                    <p>Jobs</p>
                    <p>Helpdesk</p>
                    <p>Community Guidelines</p>
                </Col>
                
            </Row>
            <Row className="footerRowMobile">
                <Col xs={6} md={6} lg={6}>
                        <div className="firstLogo">
                            <p>FOUNDING MEMBER</p>
                            <img src="../images/footer/fifsFooter.webp"/>
                        </div>
                </Col>
                <Col xs={6} md={6} lg={6}>
                        <div className="secondLogo mb-0">
                            <p>PLAY RESPONSIBLY</p>
                            <img src="../images/footer/fp-logo.png"/>
                        </div>
                    </Col>
            </Row>
            <Row className="">
                <Col lg={12} className="footerSecond">
                    <h4>CORPORATE OFFICE</h4>
                    <p>Unit No.1802, 18th Floor, Tower B, Peninsula Business Park, 
                        Off Senapati Bapat Marg, Lower Parel, Mumbai 400013</p>
                </Col>
            </Row>
        </Container>
        </section>
        <section className="policies">
            <Container>
            <Row>
                <Col xs={6} md={6} lg={6} className="policyOne">
                  <p>Privacy Policy</p>
                </Col>
                <Col xs={6} md={6} lg={6} className="policyTwo">
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