import { useEffect,useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import PlayerInformation from './playerInformation';
import './players.scss';
function Players()
{
    let [items, setData] = useState(null);
    useEffect(() => {
        fetch('/players')
        .then(res =>res.json())
        .then(data=>setData(data))
      },[]);
    return(
        <>
            <section className="players">
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
                                <PlayerInformation playerImage={value[0]} playerName={value[1]}
                                                   playerTeam={value[2]}
                                                   playerPrice={value[3]}
                                                   playerDescription={value[4]}/>
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
export default Players