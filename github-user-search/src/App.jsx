import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./components/Search";

function App() {
  return (
    <Router>
      <div className="container">
        <h1>GitHub User Search</h1>
        <Search />

      </div>
    </Router>
  );
}

export default App;
