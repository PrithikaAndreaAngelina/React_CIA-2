import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Red from "./pages/Red";
import { Yellow, Orange, Lime, Gold } from "./pages/Yellow";
import Black from "./pages/Black";
import Green from "./pages/overview/Green";
import Blue from "./pages/overview/Blue";

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path="/overview" exact component={Red} />
        <Route path="/overview/users" exact component={Green} />
        <Route path="/overview/revenue" exact component={Blue} />
        <Route path="/reports" exact component={Yellow} />
        <Route path="/reports/reports1" exact component={Orange} />
        <Route path="/reports/reports2" exact component={Lime} />
        <Route path="/reports/reports3" exact component={Gold} />
       <Route path="/team" exact component={Black} />
      </Switch>
    </Router>
  );
}

export default App;
