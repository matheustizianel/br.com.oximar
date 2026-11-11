import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import logo from "../assets/logo.svg"

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const getDesktopNavLinkClass = ({ isActive }: { isActive: boolean }) =>
        `text-sm font-semibold transition-colors px-3 py-1 rounded-md ${
            isActive
                ? 'text-oximar-green border-b-2 border-oximar-green'
                : 'text-slate-100 hover:text-oximar-green'
        }`;

    const getMobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
        `block py-3 px-4 text-base font-semibold rounded-lg transition-colors ${
            isActive
                ? 'bg-oximar-surface text-oximar-green border-l-4 border-oximar-green'
                : 'text-slate-100 hover:bg-slate-50 hover:text-oximar-green'
        }`;

    const closeMenu = () => setIsOpen(false);

    return (
        <header className="sticky top-0 z-50 bg-oximar-dark backdrop-blur-sm">
            <div className="max-w-360 mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">

                {/* --- DESKTOP VIEW (>= lg) --- */}
                {/* Links da Esquerda */}
                <nav className="hidden lg:flex items-center space-x-6">
                    <NavLink to="/" className={getDesktopNavLinkClass}>
                        Início
                    </NavLink>
                    <NavLink to="/empresa" className={getDesktopNavLinkClass}>
                        Empresa
                    </NavLink>
                </nav>

                {/* Logo Centralizada no Desktop */}
                <NavLink to="/" className="hidden lg:flex items-center">
                    <img
                        src={logo}
                        alt="Oximar"
                        className="h-10 w-auto object-contain"
                    />
                </NavLink>

                {/* Links da Direita */}
                <nav className="hidden lg:flex items-center space-x-6">
                    <NavLink to="/produtos" className={getDesktopNavLinkClass}>
                        Produtos
                    </NavLink>
                    <NavLink to="/orcamento" className={getDesktopNavLinkClass}>
                        Orçamento
                    </NavLink>
                </nav>

                {/* --- MOBILE VIEW (< lg) --- */}
                {/* Logo alinhada à esquerda no mobile */}
                <NavLink to="/" onClick={closeMenu} className="lg:hidden flex items-center">
                    <img
                        src={logo}
                        alt="Oximar"
                        className="h-8 w-auto object-contain"
                    />
                </NavLink>

                {/* Botão Hambúrguer / Fechar */}
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
                    className="lg:hidden text-oximar-lime p-2 hover:text-oximar-green focus:outline-none"
                >
                    {isOpen ? (
                        <svg
                            className="w-7 h-7"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            className="w-7 h-7"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </button>
            </div>

            {/* Dropdown Menu Mobile */}
            {isOpen && (
                <div className="lg:hidden bg-oximar-dark px-4 pt-2 pb-6 shadow-lg animate-fadeIn">
                    <nav className="flex flex-col space-y-1">
                        <NavLink to="/" onClick={closeMenu} className={getMobileNavLinkClass}>
                            Início
                        </NavLink>
                        <NavLink to="/empresa" onClick={closeMenu} className={getMobileNavLinkClass}>
                            Empresa
                        </NavLink>
                        <NavLink to="/produtos" onClick={closeMenu} className={getMobileNavLinkClass}>
                            Produtos
                        </NavLink>
                        <NavLink to="/orcamento" onClick={closeMenu} className={getMobileNavLinkClass}>
                            Orçamento
                        </NavLink>
                    </nav>

                    {/* Botão de contato rápido dentro do menu mobile */}
                    <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2">
                        <a
                            href="https://wa.me/5565992155901"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-2.5 bg-oximar-green text-white font-semibold text-center text-sm rounded-lg shadow-sm hover:bg-oximar-green-dark transition"
                        >
                            Plantão / WhatsApp: (65) 99215-5901
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}