// Styles
import "./App.css";
// Components
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Chat from "./components/Chat/Chat";
// React Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    // BEM naming convention
    // app instead of App for class name
    <div className="app">
      <Router>
        <Header />
        <div className="app__body">
          <Sidebar />
          <Routes>
            <Route path="/">
              <h1>Welcome</h1>
            </Route>
            <Route path="/room/:roomId">
              <Chat />
            </Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
