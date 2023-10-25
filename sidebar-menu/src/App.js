import "./App.css";
import SideBar from "./components/sidebar/SideBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CadastrarAdnin from "./pages/CadastrarAdnin";
function App() {
  return (
    <Router>
      <SideBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/cadastrar/admin" element={<CadastrarAdnin />} />
      </Routes>
    </Router>
  );
}

export default App;
