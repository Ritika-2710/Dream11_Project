function Thirdpage_subpart(props)
{
    return(
            <div className="slide">
                <div className="top_part_slide">
                    <div class="user_image">
                        <img src={"../images/userimages/userimage"+props.imageval+".png"} width="100%"/>
                    </div>
                    <div className="user_name">{props.name}</div>
                </div>
                <div className="middle_part_slide">
                    <div className="user_text_left">
                        <div className="main_text">Mega Contest Winner</div>
                        <div className="sub_text">{props.team}</div>
                    </div>
                    <div className="user_text_right">
                        <div className="main_text">{props.price}</div>
                        <div className="sub_text">Winner</div>
                    </div>
                </div>
                <div className="bottom_part_slide">
                    <textarea className="textarea">
                    {props.description}
                    </textarea>
                </div>
            </div>
    )
}
export default Thirdpage_subpart