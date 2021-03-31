import { Col,Row, Container } from "react-bootstrap";
import '../css/FAQ.css'
import $ from 'jquery';
function Slider(e){
    $('.answer',e.currentTarget).slideToggle();
    $('.fachev1',e.currentTarget).toggleClass('fa-chevron-down');
}
function FAQ_Main(props)
{
    return(
        <>
                <div className="question-parent" onClick={((e) => Slider(e))}>
                    <div className="question-child">
                        <p className="question mb-0">{props.question}</p>
                        <span className="fa fa-chevron-up fa-chevron-down fachev1"></span>
                    </div>
                    <div className="answer">{props.answer}
                    </div>
                </div>
        </>
    )
}
export default FAQ_Main