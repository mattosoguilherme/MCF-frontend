import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Cadastro from "./pages/cadastro";
import List from "./pages/list";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/" element={<Login />} />
        <Route path="/list" element={<List />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
