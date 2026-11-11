import { Link } from 'react-router-dom';
import { GAS_PRODUCTS } from '../data/products';

export function ProductsPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* 1. HERO DO CATÁLOGO */}
            <section className="bg-oximar-lime text-oximar-dark py-12 md:py-16 px-4 sm:px-6 border-b border-slate-200">
                <div className="max-w-360 mx-auto text-center flex flex-col items-center">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-oximar-green-dark max-w-4xl tracking-tight leading-tight">
                        Catálogo de Produtos e Gases
                    </h1>
                    <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-slate-800 max-w-2xl font-medium">
                        Gases industriais, especiais e medicinais com certificação técnica e máxima segurança.
                    </p>
                </div>
            </section>

            {/* 2. GRID TÉCNICO DE GASES */}
            <section className="py-12 md:py-16 bg-oximar-surface px-4 sm:px-6">
                <div className="max-w-360 mx-auto">
                    <div className="text-center mb-10 sm:mb-12">
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-oximar-dark uppercase tracking-wide">
                            Nossos Gases e Especificações Técnicas
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-500 mt-2 max-w-xl mx-auto">
                            Consulte a nossa linha completa de gases industriais, medicinais e misturas especiais de alta pureza.
                        </p>
                    </div>

                    {/* Grid de 3 colunas (desktop), 2 colunas (tablet) e 1 coluna (mobile) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {GAS_PRODUCTS.map((gas) => (
                            <div
                                key={gas.id}
                                className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between p-6 overflow-hidden"
                            >
                                <div>
                                    {/* Cabeçalho do Card: Ícone do Cilindro + Título */}
                                    <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-slate-100">
                                        <div
                                            className={`w-9 h-9 rounded-lg flex items-center justify-center text-white shadow-xs shrink-0 ${gas.cylinderBadgeColor}`}
                                        >
                                            {/* Ícone estilizado de cilindro */}
                                            <svg
                                                className="w-5 h-5 fill-current"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M7 2v2h1v3.08C5.64 8.04 4 10.82 4 14v8h16v-8c0-3.18-1.64-5.96-4-6.92V4h1V2H7zm3 2h4v3.05c-.64-.05-1.31-.05-2-.05s-1.36 0-2 .05V4zm-4 10c0-2.48 1.51-4.5 4-4.9V15h2V9.1c2.49.4 4 2.42 4 4.9v6H6v-6z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-sm sm:text-base font-extrabold text-slate-900 tracking-tight leading-snug">
                                            {gas.name}
                                        </h3>
                                    </div>

                                    {/* Tabela de Propriedades Técnicas ONU / Risco */}
                                    <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-100 mb-4 text-xs space-y-2">
                                        <div className="flex justify-between items-center text-slate-600">
                                            <span className="font-semibold text-slate-500">Nº de Risco:</span>
                                            <span className="font-bold text-slate-900 bg-white px-2 py-0.5 rounded border border-slate-200">
                        {gas.riskNumber}
                      </span>
                                        </div>

                                        <div className="flex justify-between items-center text-slate-600">
                                            <span className="font-semibold text-slate-500">Nº da ONU:</span>
                                            <span className="font-bold text-slate-900 bg-white px-2 py-0.5 rounded border border-slate-200">
                        {gas.onuNumber}
                      </span>
                                        </div>

                                        <div className="flex justify-between items-center text-slate-600">
                                            <span className="font-semibold text-slate-500">Classe / Subclasse de risco:</span>
                                            <span className="font-bold text-slate-900 bg-white px-2 py-0.5 rounded border border-slate-200">
                        {gas.hazardClass}
                      </span>
                                        </div>
                                    </div>

                                    {/* Aspecto e Descrição Física */}
                                    <div className="text-xs text-slate-600 leading-relaxed mb-6">
                                        <strong className="text-slate-800 font-semibold">Aspecto: </strong>
                                        {gas.aspect}
                                    </div>
                                </div>

                                {/* Botão de Cotação */}
                                <Link
                                    to={`/orcamento?gas=${gas.id}`}
                                    className="w-full py-3 px-4 rounded-xl bg-oximar-green text-white hover:bg-oximar-green-dark text-xs sm:text-sm font-bold uppercase tracking-wider text-center shadow-xs transition-colors block"
                                >
                                    Solicitar Cotação
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}