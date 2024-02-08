import "./index.css";
import Login from "./pages/login/Login";
import Main from "./pages/main/Main"
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={ <Login />} />
        <Route path="/main" element={ <Main />} />
      </Routes>
    </Router>

    </div>
  );
}

export default App;
