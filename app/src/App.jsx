import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/main.page";
import DesenvolvedoresPageContainer from "./container/desenvolvedoresPage.container";
import NiveisPageContainer from "./container/niveisPage.container";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/desenvolvedores" element={<DesenvolvedoresPageContainer />} />
        <Route path="/niveis" element={<NiveisPageContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
