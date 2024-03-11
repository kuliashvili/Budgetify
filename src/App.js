import "./index.css";
import Login from "./pages/login/Login";
import Main from "./pages/main/Main"
import Subscriptions from "./pages/subscriptions/Subscriptions";
import Obligatory from "./pages/obligatory/Obligatory"
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={ <Login />} />
        <Route path="/main" element={ <Main />} />
        <Route path="/categories" element={ <Main />} />
        <Route path="/subscriptions" element={ <Subscriptions />} />
        <Route path="/obligatory" element={ <Obligatory />} />
      </Routes>
    </Router>

    </div>
  );
}

export default App;
