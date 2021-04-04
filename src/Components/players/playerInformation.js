function PlayerInformation(props)
{
    return(
            <div className="slide">
                <div className="top_part_slide">
                    <div className="user_image">
                        <img src={`../images/players/userimage${props.playerImage}.png`} width="100%"/>
                    </div>
                    <div className="user_name">{props.playerName}</div>
                </div>
                <div className="middle_part_slide">
                    <div className="user_text_left">
                        <div className="main_text">Mega Contest Winner</div>
                        <div className="sub_text">{props.playerTeam}</div>
                    </div>
                    <div className="user_text_right">
                        <div className="main_text">{props.playerPrice}</div>
                        <div className="sub_text">Winner</div>
                    </div>
                </div>
                <div className="bottom_part_slide">
                    <textarea className="textarea" defaultValue={props.playerDescription}></textarea>
                </div>
            </div>
    )
}
export default PlayerInformation