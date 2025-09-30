import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/Home"
import { ContactPage } from "./pages/Contact"
import { FeaturesPage } from "./pages/Features"

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/contato" element={<ContactPage />} />
                    <Route path="/funcionalidade" element={<FeaturesPage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App