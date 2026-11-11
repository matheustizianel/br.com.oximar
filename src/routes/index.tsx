import {BrowserRouter, Routes, Route} from 'react-router-dom'

import {AppLayout} from "../layout/app-layout.tsx"

import {HomePage} from "../pages/home.tsx"
import {BusinessPage} from "../pages/business.tsx"
import {ProductsPage} from "../pages/products.tsx"
import {QuotePage} from "../pages/quote.tsx"

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/empresa" element={<BusinessPage />} />
                    <Route path="/produtos" element={<ProductsPage />} />
                    <Route path="/orcamento" element={<QuotePage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
