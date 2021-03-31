import { useEffect,useState } from "react";
import '../css/Thirdpage.css'
import { Col, Container, Row } from "react-bootstrap";
import Thirdpage_subpart from './Thirdpage_subpart';
function ThirdPage()
{
    let [items, setData] = useState(null);
    useEffect(() => {
        fetch('/players')
        .then(res =>res.json())
        .then(data=>setData(data))
      },[]);
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
                      {
                        !items ? null :items.map((value, index) => {
                            return (
                                <Thirdpage_subpart imageval={value[0]} name={value[1]}
                                team={value[2]}
                                price={value[3]}
                                description={value[4]}/>
                            )
                        })
                      }
                      </div>
                  </Row>
              </Container>
            </section>
        </>
    )
}
export default ThirdPage