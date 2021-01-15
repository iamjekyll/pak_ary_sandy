import { Navbar } from "./components";
import { Homepage, Signup } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/daftar" component={Signup} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
