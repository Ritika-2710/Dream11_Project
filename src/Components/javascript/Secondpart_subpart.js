import { Col } from "react-bootstrap";
import '../css/Secondpage.css'
function Secondpart_subpart(props)
{
    return(
        <>
            <li className="steps_list">
                <div className="divpart">
                    <span>{props.number}</span>
                    <div className="title_name">
                        <h5>{props.title}</h5>
                        <div class="title_image">
                            <img src={"../images/info/image"+props.image+".png"} width="100%"/>
                        </div>
                    </div>
                    <div className="title_description">{props.description}</div>
                </div>
            </li>
        </>
    )
}
export default Secondpart_subpart