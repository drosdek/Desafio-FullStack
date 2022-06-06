import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DesenvolvedoresPage from "./pages/desenvolvedores.page";
import MainPage from "./pages/main.page";
import NiveisPage from "./pages/niveis.page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/desenvolvedores" element={<DesenvolvedoresPage />} />
        <Route path="/niveis" element={<NiveisPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
