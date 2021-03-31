import { useEffect,useState } from "react";
import { Col,Row, Container } from "react-bootstrap";
import '../css/FAQ.css'
import FAQ_Main from "./FAQ_Main";
function FAQ()
{
    let [items, setData] = useState(null);
    useEffect(() => {
        fetch('/faq')
        .then(res =>res.json())
        .then(data=>setData(data))
      },[]);

    return(
        <section className="FAQ">
            <Container>
                <Row>
                    <Col lg={12} className="text-center">
                       <h2 className="universal_heading">Fantasy Cricket <span style={{color:"red"}}>FAQ</span></h2>
                    </Col>
                </Row>
                <Row className="mt-3">
            <Col md={6} lg={6} className="mx-auto">
            {
                !items ? null :items.map((value, index) => {
                    return (
                        <FAQ_Main question={value[1]} answer={value[2]}/>
                    )
                })
            }
            </Col>
                </Row>
            </Container>
        </section>
    );
}
export default FAQ