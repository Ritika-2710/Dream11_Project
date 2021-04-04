import './App.css';
import Banner from "./Components/banner/banner";
import Steps from "./Components/steps/steps";
import Players from "./Components/players/players";
import Guidelines from "./Components/dream11Guidelines/guidelines";
import Faq from "./Components/faq/faq";
import Footer from "./Components/footer/footer";
import {Provider} from "react-redux";
import store from "./store";
function App() {
  return (
    <div className="App">
      <Banner/>
      <Steps/>
      <Provider store={store}>
          <div>
              <Players/>
              <Guidelines/>
              <Faq/>
              <Footer/>
          </div>
      </Provider>
    </div>
  );
}

export default App;
