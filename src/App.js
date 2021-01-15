import { FooterBar, Navbar } from "./components";
import { Homepage, Paket, Signup } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/daftar" component={Signup} />
          <Route path="/paket" component={Paket} />
        </Switch>
        <FooterBar />
      </Router>
    </div>
  );
}

export default App;
