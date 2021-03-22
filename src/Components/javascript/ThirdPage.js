import '../css/Thirdpage.css'
import { Col, Container, Row } from "react-bootstrap";
import Thirdpage_subpart from './Thirdpage_subpart';
function ThirdPage()
{
    return(
        <>
            <section className="thirdpage">
              <Container>
                  <Row>
                      <Col lg={12}>
                          <h3 className="universal_heading">Reviews & <span style={{color:"red"}}>Rating</span></h3>
                      </Col>
                  </Row>
                  <Row>
                      <Col lg={12}>
                          <div className="image_div">
                          <img src="../images/d11_rating.webp" width="100%"></img>
                          </div>
                      </Col>
                  </Row>
                  <Row className="d-flex justify-content-center">
                      <div className="scrolling-wrapper">            
                          <Thirdpage_subpart/>
                          <Thirdpage_subpart/>
                          <Thirdpage_subpart/>
                      </div>
                  </Row>
              </Container>
            </section>
        </>
    )
}
export default ThirdPage