import { Col } from "react-bootstrap";
import './steps.css'
function StepDetails(props)
{
    return(
        <>
            <li className="stepsList">
                <div className="stepDescription">
                    <span>{props.number}</span>
                    <div className="titleName">
                        <h5>{props.title}</h5>
                        <div className="titleImage">
                            <img src={`../images/steps/image${props.image}.png`} width="100%"/>
                        </div>
                    </div>
                    <div className="titleDescription">{props.description}</div>
                </div>
            </li>
        </>
    )
}
export default StepDetails