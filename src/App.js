import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CardItem from './pages/registry-sro/card-item/card-item';
import { MainPage } from './components/main-page/main-page';
// import { Poisk } from "./components/poisk/poisk";
import { RegistryRSO } from './pages/registry-sro/registry-sro';
// import { Registry2 } from './pages/registry2/registry2';
// import CardItem2 from './pages/registry2/card-item/card-item2';
// import { Registry3 } from './pages/registry3/registry3';
// import CardItem3 from './pages/registry3/card-item/card-item3';
// import { Registry4 } from './pages/registry4/registry4';
// import CardItem4 from './pages/registry4/card-item/card-item4';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />}>
                    <Route
                        index
                        element={<RegistryRSO listType={'registry1'} />}
                    />
                    <Route path="/view/:id" element={<CardItem />} />
                    <Route
                        path="/spisok2"
                        element={<RegistryRSO listType={'registry2'} />}
                    />
                    <Route
                        path="/spisok3"
                        element={<RegistryRSO listType="registry3" />}
                    />
                    <Route
                        path="/spisok4"
                        element={<RegistryRSO listType="registry4" />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
