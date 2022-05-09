import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CardItem from './pages/registry-sds/card-item/card-item';
import { MainPage } from './components/main-page/main-page';
import { RegistryRSO } from './pages/registry-sds/registry-sds';
import { RegistryCertificationExperts } from './pages/registry-certificate-expert/registryCertificateExperts';
import { TableWrapper } from './components/tableWrapper/tableWrapper';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />}>
                    <Route index element={<RegistryRSO />} />
                    <Route
                        path="/standard-certification/view/:id"
                        element={<CardItem />}
                    />
                    <Route
                        path="/organ-certifications/list"
                        element={<RegistryRSO />}
                    />
                    <Route
                        path="/organ-certification/view/:id"
                        element={<CardItem />}
                    />
                    <Route element={<TableWrapper />}>
                        <Route
                            path="/organ-certification-experts/list"
                            element={<RegistryCertificationExperts />}
                        />
                    </Route>

                    <Route
                        path="/organ-certification-expert/view/:id"
                        element={<CardItem />}
                    />
                    <Route
                        path="/certificates/list"
                        element={<RegistryRSO />}
                    />
                    <Route
                        path="/certificate/view/:id"
                        element={<CardItem />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
