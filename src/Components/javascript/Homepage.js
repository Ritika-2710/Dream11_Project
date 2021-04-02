import Faq from "../faq/faq";
import FaqQuestions from "../faq/faqQuestions";
import Banner from "../banner/banner";
import Footer from "../footer/footer";
import Guidelines from "../dream11Guidelines/guidelines";
import Steps from "../steps/steps";
import Players from "../players/players";

function Homepage()
{
    return(
        <div>
            <Banner/>
            <Steps/>
            <div>
                <Players/>
                <Guidelines/>
                <Faq/>
                <Footer/>
            </div>
        </div>
    )
}
export default Homepage