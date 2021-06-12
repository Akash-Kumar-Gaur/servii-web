import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../src/components/Header/Header";
import Home from "../src/components/Home/Home";
import About from "../src/components/About/About";
import ContactUs from "../src/components/ContactUs/ContactUs";
import Services from "../src/components/Services/Services";
import Footer from "../src/components/Footer/Footer";

function App() {
  return (
    <>
      <Router>
        <div className="main-container">
          <Header />
          <div className="pages">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/services" component={Services} />
              <Route exact path="/contactUs" component={ContactUs} />
            </Switch>
          </div>

          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
