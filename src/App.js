// import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
