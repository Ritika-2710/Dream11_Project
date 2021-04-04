function GuidelineDetails(props)
{
    return(
        <>
        <li className="app_text_li">
            <div className="app_get_icon">
                <img src={props.img}/>
            </div>
            <div className="app_get_text">{props.text}</div>
        </li>
        </>
    )
}
export default GuidelineDetails