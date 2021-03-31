import FAQ from "./FAQ";
import FAQ_Main from "./FAQ_Main";
import Firstpage from "./Firstpage";
import Footer from "./Footer";
import FourthPage from "./FourthPage";
import Secondpage from "./Secondpage";
import ThirdPage from "./ThirdPage";

function Homepage()
{
    return(
        <div>
            <Firstpage/>
            <Secondpage/>
            <div>
                <ThirdPage/>
                <FourthPage/>
                <FAQ/>
                <Footer/>
            </div>
        </div>
    )
}
export default Homepage