import { Link } from 'react-router-dom'
import logo from "../assets/logo.svg"

const LOGISTICS_ITEMS = [
    {
        icon: '⚡',
        title: 'ENTREGA EM ATÉ 4H',
        badge: 'Cuiabá e Várzea Grande',
        desc: 'Estoque regulador permanente e rotas dedicadas garantindo abastecimento expresso na região metropolitana.',
    },
    {
        icon: '🚨',
        title: 'EMERGÊNCIA ESTADUAL',
        badge: 'Até 12h em Todo o MT',
        desc: 'Sistema ágil de despacho rodoviário emergencial para suprir clínicas e indústrias em qualquer município.',
    },
    {
        icon: '📊',
        title: 'MONITORIZAÇÃO ATIVA',
        badge: 'Acompanhamento de Consumo',
        desc: 'Gestão preventiva que acompanha a média de consumo do seu negócio para agendar a próxima recarga antes do desabastecimento.',
    },
];

const SECTORS = [
    {
        icon: '🏭',
        title: 'Indústria & Metalurgia',
        desc: 'Oxiacetileno, processos MIG/MAG, TIG e desgasificação de metais.',
    },
    {
        icon: '🏥',
        title: 'Hospitais & Clínicas',
        desc: 'Oxigénio Medicinal, Óxido Nitroso, ar comprimido medicinal e redes.',
    },
    {
        icon: '🔬',
        title: 'Análise Instrumental & Especiais',
        desc: 'Misturas padrão de alta pureza para laboratórios e telecomunicações.',
    },
];

export function BusinessPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* 1. HERO INSTITUCIONAL */}
            <section className="bg-oximar-lime text-oximar-dark py-12 md:py-16 px-4 sm:px-6 border-b border-slate-200">
                <div className="max-w-360 mx-auto text-center flex flex-col items-center">
          <span className="inline-block bg-oximar-dark text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-4 sm:mb-6 shadow-sm">
            Tradição e Tecnologia em Mato Grosso
          </span>

                    <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-oximar-green-dark max-w-4xl tracking-tight leading-tight">
                        Mais de 25 Anos a Fornecer Confiança, Gases e Engenharia Especializada
                    </h1>

                    <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-slate-800 max-w-2xl font-medium">
                        Uma trajetória sólida com fornecimento contínuo para os setores industrial, medicinal e hospitalar.
                    </p>
                </div>
            </section>

            {/* 2. QUEM SOMOS & TRAJETÓRIA */}
            <section className="py-12 md:py-16 bg-white px-4 sm:px-6 border-b border-slate-200">
                <div className="max-w-360 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Imagem Institucional */}
                    <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100 h-64 sm:h-80 lg:h-96 w-full">
                        <img
                            src={logo}
                            alt="Logomarca da Oximar"
                            className="w-full h-full object-contain"
                        />
                    </div>

                    {/* Conteúdo Institucional */}
                    <div className="flex flex-col">
            <span className="text-xs font-bold text-oximar-green uppercase tracking-widest mb-2">
              Quem Somos & Trajetória
            </span>
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 leading-snug mb-4">
                            Compromisso genuinamente mato-grossense com seriedade e crescimento
                        </h2>
                        <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                            A atuar no mercado desde 2000, a OXIMAR é uma empresa criada com o objetivo de oferecer ao mercado de Mato Grosso uma alternativa sólida para o fornecimento de Gases Especiais, Medicinais e Industriais, serviços de elaboração e montagem de redes canalizadas e locação de equipamentos.
                        </p>

                        <ul className="space-y-3">
                            <li className="flex items-start sm:items-center text-sm font-semibold text-slate-800">
                                <span className="w-2 h-2 rounded-full bg-oximar-green mt-1.5 sm:mt-0 mr-3 flex-shrink-0"></span>
                                <span>100% Mato-grossense com suporte e atendimento presencial</span>
                            </li>
                            <li className="flex items-start sm:items-center text-sm font-semibold text-slate-800">
                                <span className="w-2 h-2 rounded-full bg-oximar-green mt-1.5 sm:mt-0 mr-3 flex-shrink-0"></span>
                                <span>Engenharia de redes de distribuição de gases e locação de equipamentos</span>
                            </li>
                            <li className="flex items-start sm:items-center text-sm font-semibold text-slate-800">
                                <span className="w-2 h-2 rounded-full bg-oximar-green mt-1.5 sm:mt-0 mr-3 flex-shrink-0"></span>
                                <span>Atendimento de prontidão a indústrias, clínicas e hospitais</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* 3. EXCELÊNCIA LOGÍSTICA & PRONTO ATENDIMENTO */}
            <section className="py-12 md:py-16 bg-oximar-surface px-4 sm:px-6 border-b border-slate-200">
                <div className="max-w-360 mx-auto text-center">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-oximar-dark uppercase tracking-wide">
                        Excelência Logística e Pronto Atendimento
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 mt-2 mb-8 sm:mb-10 max-w-xl mx-auto">
                        Estrutura própria planeada para eliminar paragens na sua operação.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                        {LOGISTICS_ITEMS.map((item, idx) => (
                            <div
                                key={idx}
                                className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col justify-between"
                            >
                                <div>
                                    <div className="text-2xl mb-3">{item.icon}</div>
                                    <span className="text-[11px] font-bold uppercase tracking-wider text-oximar-green bg-green-50 px-2.5 py-0.5 rounded-full inline-block mb-2">
                    {item.badge}
                  </span>
                                    <h3 className="text-base font-bold text-slate-900 mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. QUALIDADE, NORMAS E PARCERIAS TÉCNICAS */}
            <section className="py-12 md:py-16 bg-white px-4 sm:px-6 border-b border-slate-200">
                <div className="max-w-360 mx-auto">
                    <div className="text-center mb-8 sm:mb-10">
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-oximar-dark uppercase tracking-wide">
                            Qualidade, Normas e Parcerias Técnicas
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl border border-slate-200 bg-oximar-surface flex flex-col justify-between">
                            <div>
                <span className="text-xs font-bold text-oximar-green uppercase tracking-wider">
                  🛡️ Rastreabilidade
                </span>
                                <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-1 mb-2">
                                    Padrão ISO 9001 e Laudos Certificados
                                </h3>
                                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                    Todos os gases especiais comercializados contam com laudos de conformidade e análise laboratorial detalhada, garantindo o controlo rigoroso exigido por normas técnicas.
                                </p>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-slate-200 bg-oximar-surface flex flex-col justify-between">
                            <div>
                <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
                  🏥 Gases Medicinais
                </span>
                                <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-1 mb-2">
                                    Linha Medicinal & Parceria Linde
                                </h3>
                                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                    Cilindros cuidadosamente tratados e abastecidos sob o mais rígido controlo de pureza da Linde Gases, com foco total na preservação da vida e atendimento hospitalar.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. SEGMENTOS QUE ATENDEMOS (Ponte para o Catálogo) */}
            <section className="py-12 md:py-16 bg-oximar-surface px-4 sm:px-6">
                <div className="max-w-360 mx-auto text-center">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-oximar-dark uppercase tracking-wide mb-8 sm:mb-10">
                        Segmentos que Atendemos
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {SECTORS.map((sector, idx) => (
                            <div
                                key={idx}
                                className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm flex flex-col items-center justify-between text-center"
                            >
                                <div>
                                    <div className="text-3xl mb-3">{sector.icon}</div>
                                    <h3 className="text-base font-bold text-slate-900 mb-2">
                                        {sector.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-slate-500 mb-6 leading-relaxed">
                                        {sector.desc}
                                    </p>
                                </div>

                                <Link
                                    to="/produtos"
                                    className="w-full py-2.5 px-4 rounded-lg bg-oximar-surface text-oximar-green-dark hover:bg-oximar-lime text-xs font-bold uppercase tracking-wider transition border border-slate-200"
                                >
                                    Ver Produtos →
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}