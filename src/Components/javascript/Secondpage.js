import { Col, Container, Row } from "react-bootstrap";
import '../css/Secondpage.css'
import Secondpart_subpart from "./Secondpart_subpart";
function Secondpage()
{
    return(
        <div>
            <section className="Secondpage">
                <Container>
                    <Row>
                        <Col lg={12} className="secondpage_heading pl-4">
                          <h2 className="universal_heading">It's easy to start playing on <span style={{color:"red"}}>Dream11</span></h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <ul className="steps_ul">
                            <Secondpart_subpart title="Select a Match" 
                            number="1" 
                            description="Choose an upcoming match that you want to play" 
                            image="../images/image1.png"/>
                            <Secondpart_subpart
                            title="Create Team" 
                            number="2" 
                            description="Use your skills to pick the right players" 
                            image="../images/image1.png"/>
                            <Secondpart_subpart
                            title="Join Contests" 
                            number="3" 
                            description="Choose between different contests and win money" 
                            image="../images/image1.png"/>
                            </ul>
                        </Col>
                    </Row>
                </Container> 
            </section>
        </div>
    )
}
export default Secondpage