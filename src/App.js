import { Footer, FooterBar, Navbar } from "./components";
import { Homepage, Paket, Signup } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Promo from "./pages/Promo";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/paket" component={Paket} />
          <Route path="/promo" component={Promo} />
          <Route path="/daftar" component={Signup} />
        </Switch>
        <Footer />
        <FooterBar />
      </Router>
    </div>
  );
}

export default App;
