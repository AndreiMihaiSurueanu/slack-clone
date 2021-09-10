// Styles
import "./App.css";
// Components
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
// React Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    // BEM naming convention
    // app instead of App for class name
    <div className="app">
      <Router>
        <Header />
        <div className="app__body">
          <Sidebar />
          <Switch>
            <Route path="/">
              <h1>Welcome</h1>
            </Route>
            <Route path="/room/:roomId">
              <h1>Chat screen</h1>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
