import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.scss";
import Header from "./components/Header/Header";
import LandingPage from "./pages/LandingPage/LandingPage";
import SearchStores from "./pages/SearchStores/SearchStores";
import AddStore from "./pages/AddStore/AddStore";
import Background from "./components/Background/Background";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Background>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/stores" element={<SearchStores />} />
              <Route path="/add" element={<AddStore />} />
            </Routes>
          </Background>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
