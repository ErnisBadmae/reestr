import Search from "antd/lib/transfer/search";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardItem from "./components/card-item/card-item";
import { MainPage } from "./components/main-page/main-page";
// import { Poisk } from "./components/poisk/poisk";
import { RegistryRSO } from "./pages/registry-sro/registry-sro";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route index element={<RegistryRSO />} />
          <Route path="/entry/:id" element={<CardItem />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
