function FourthPage_subpart(props)
{
    return(
        <>
        <li className="app_text_li">
            <div class="app_get_icon">
                <img src={props.img}/>
            </div>
            <div className="app_get_text">{props.text}</div>
        </li>
        </>
    )
}
export default FourthPage_subpart