import {Outlet} from "react-router-dom"

import {Header} from "../components/Header.tsx"
import {Footer} from "../components/Footer.tsx"

export function AppLayout() {
    return (
        <div className="min-h-screen flex flex-col bg-oximar-surface">
            <Header />

            <div className="flex-1">
                <Outlet />
            </div>

            <Footer />
        </div>
    )
}