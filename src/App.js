import './App.css';
import Header from "./Header.js"
import Home from "./Home.js"
import { BrowserRouter as Router,Outlet,  Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
