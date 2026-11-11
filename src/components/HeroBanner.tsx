import { Link } from 'react-router-dom';

export function HeroBanner() {
    return (
        <section className="bg-oximar-lime text-oximar-dark py-20 px-6 relative overflow-hidden">
            <div className="max-w-360 mx-auto flex flex-col items-center text-center">
                {/* Badge */}
                <span className="inline-block bg-oximar-dark text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-6 shadow-sm">
          Atendimento em todo o estado de Mato Grosso
        </span>

                {/* Título Principal */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-oximar-dark max-w-4xl tracking-tight leading-tight">
                    Gases Industriais, Medicinais e Engenharia de Redes Canalizadas
                </h1>

                {/* Subtítulo */}
                <p className="mt-6 text-base md:text-lg max-w-2xl font-medium">
                    Fornecimento contínuo, cilindros certificados e equipamentos com suporte técnico local.
                </p>

                {/* CTAs */}
                <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                    <a
                        href="https://wa.me/5565992155901"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-6 py-3.5 bg-oximar-dark text-white font-semibold rounded-lg shadow hover:bg-slate-800 transition flex items-center justify-center gap-2"
                    >
                        <span>💬</span> Solicitar Cotação no WhatsApp
                    </a>

                    <Link
                        to="/produtos"
                        className="w-full sm:w-auto px-6 py-3.5 bg-white text-oximar-green-dark font-semibold rounded-lg border border-slate-300 shadow-sm hover:bg-slate-50 transition"
                    >
                        Ver Catálogo Completo
                    </Link>
                </div>
            </div>
        </section>
    );
}
