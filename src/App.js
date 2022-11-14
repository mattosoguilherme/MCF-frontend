import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/inicial" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
