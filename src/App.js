import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CardItem from './pages/registry-sro/card-item/card-item';
import { MainPage } from './components/main-page/main-page';
// import { Poisk } from "./components/poisk/poisk";
import { RegistryRSO } from './pages/registry-sro/registry-sro';
import { Registry2 } from './pages/registry2/registry2';
import CardItem2 from './pages/registry2/card-item/card-item2';
import { Registry3 } from './pages/registry3/registry3';
import CardItem3 from './pages/registry3/card-item/card-item3';
import { Registry4 } from './pages/registry4/registry4';
import CardItem4 from './pages/registry4/card-item/card-item4';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />}>
                    <Route index element={<RegistryRSO />} />

                    <Route path="view/:id" element={<CardItem />} />

                    <Route path="spisok2" element={<Registry2 />} />
                    <Route path="spisok2/:id" element={<CardItem2 />} />
                    <Route path="spisok3" element={<Registry3 />} />
                    <Route path="spisok3/:id" element={<CardItem3 />} />
                    <Route path="spisok4" element={<Registry4 />} />
                    <Route path="spisok4/:id" element={<CardItem4 />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
