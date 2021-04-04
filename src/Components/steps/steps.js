import { useEffect,useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import './steps.css'
import StepDetails from "./stepDetails";
function Steps()
{
    let [items, setData] = useState(null);
    useEffect(() => {
        fetch('/info')
        .then(res =>res.json())
        .then(data=>setData(data))
      },[]);
    return(
        <>
            <section className="steps">
                <Container>
                    <Row>
                        <Col lg={12} className="stepsHeading pl-4">
                          <h2 className="universal_heading">It's easy to start playing on <span style={{color:"red"}}>Dream11</span></h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <ul className="stepsUl">
                            {
                                !items ? null :items.map((value, index) => {
                                    return (
                                        <StepDetails key={index} title={value[1]}
                                                     number={value[0]}
                                                     description={value[2]}
                                                     image={value[0]}/>
                                    )
                                })
                            }
                            
                            </ul>
                        </Col>
                    </Row>
                </Container> 
            </section>
        </>
    )
}
export default Steps