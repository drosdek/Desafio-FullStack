import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/main.page";
import NiveisPage from "./pages/niveis.page";
import DesenvolvedoresPageContainer from "./container/desenvolvedoresPage.container";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/desenvolvedores" element={<DesenvolvedoresPageContainer />} />
        <Route path="/niveis" element={<NiveisPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
