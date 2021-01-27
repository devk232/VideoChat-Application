import logo from "./logo.svg";
import { Redirect, Route, Switch, BrowserRouter } from "react-router-dom";
import CreateRoom from "./components/createRoom";
import Room from "./components/Room";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/join" component={CreateRoom} />
          <Redirect from="/" to="/join" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
