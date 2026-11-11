import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export function QuotePage() {
    const [searchParams] = useSearchParams();
    const gasParam = searchParams.get('gas');

    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        company: '',
        gasType: '',
        email: '',
        specifications: '',
    });

    const [submitted, setSubmitted] = useState(false);

    // Mapeia o id recebido pela URL para pré-selecionar no dropdown
    useEffect(() => {
        if (gasParam) {
            setFormData((prev) => ({
                ...prev,
                specifications: `Interesse no produto com identificador: ${gasParam}`,
            }));
        }
    }, [gasParam]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Preparado para conectar a um backend, Formspree ou Webhook
        console.log('Dados do formulário de orçamento:', formData);
        setSubmitted(true);
    };

    return (
        <main className="min-h-screen bg-white">
            {/* 1. HERO BANNER */}
            <section className="bg-oximar-lime text-oximar-dark py-12 md:py-16 px-4 sm:px-6 border-b border-slate-200">
                <div className="max-w-360 mx-auto text-center flex flex-col items-center">
          <span className="inline-block bg-oximar-dark text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-4 sm:mb-6 shadow-sm">
            Atendimento Ágil em Todo o Mato Grosso
          </span>

                    <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-oximar-green-dark max-w-4xl tracking-tight leading-tight">
                        Solicite a sua Cotação ou Fale com os Nossos Especialistas
                    </h1>

                    <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-slate-800 max-w-2xl font-medium">
                        Preencha os dados abaixo para receber uma proposta personalizada ou escolha os nossos canais diretos.
                    </p>
                </div>
            </section>

            {/* 2. SECÇÃO CONSOLIDADA: FORMULÁRIO + CANAIS DIRETOS */}
            <section className="py-12 md:py-16 bg-oximar-surface px-4 sm:px-6 border-b border-slate-200">
                <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* COLUNA ESQUERDA: FORMULÁRIO DE ORÇAMENTO (7 colunas) */}
                    <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="text-xl">📋</span>
                            <h2 className="text-lg sm:text-xl font-extrabold text-oximar-dark uppercase tracking-wide">
                                Formulário de Orçamento
                            </h2>
                        </div>

                        {submitted ? (
                            <div className="p-6 bg-green-50 border border-green-200 rounded-xl text-center">
                                <span className="text-3xl block mb-2">✅</span>
                                <h3 className="text-base font-bold text-green-900 mb-1">
                                    Solicitação Enviada com Sucesso!
                                </h3>
                                <p className="text-xs sm:text-sm text-green-700">
                                    A nossa equipa técnica entrará em contacto pelo WhatsApp ou e-mail com a sua cotação.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {/* Nome Completo */}
                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                                            Nome Completo *
                                        </label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            required
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            placeholder="Seu nome"
                                            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-oximar-green focus:border-transparent transition"
                                        />
                                    </div>

                                    {/* Telefone / WhatsApp */}
                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                                            Telefone / WhatsApp *
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="(65) 99999-9999"
                                            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-oximar-green focus:border-transparent transition"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {/* Empresa / Segmento */}
                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                                            Empresa / Segmento
                                        </label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            placeholder="Ex: Metalúrgica, Clínica, etc."
                                            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-oximar-green focus:border-transparent transition"
                                        />
                                    </div>

                                    {/* Tipo de Gás ou Serviço */}
                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                                            Tipo de Gás ou Serviço
                                        </label>
                                        <select
                                            name="gasType"
                                            value={formData.gasType}
                                            onChange={handleChange}
                                            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-oximar-green focus:border-transparent transition bg-white"
                                        >
                                            <option value="">Selecione: Industrial, Medicinal, etc.</option>
                                            <option value="industrial">Gases Industriais (MIG, TIG, Solda)</option>
                                            <option value="medicinal">Gases Medicinais & Hospitalares (Linde)</option>
                                            <option value="especiais">Gases Especiais & Misturas Padrão</option>
                                            <option value="redes">Engenharia de Redes Canalizadas</option>
                                            <option value="equipamentos">Locação de Equipamentos e Cilindros</option>
                                        </select>
                                    </div>
                                </div>

                                {/* E-mail Corporativo */}
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                                        E-mail *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="seuemail@empresa.com.br"
                                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-oximar-green focus:border-transparent transition"
                                    />
                                </div>

                                {/* Mensagem / Especificações */}
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                                        Mensagem / Especificações dos Cilindros
                                    </label>
                                    <textarea
                                        name="specifications"
                                        rows={4}
                                        value={formData.specifications}
                                        onChange={handleChange}
                                        placeholder="Informe volumes, misturas, se necessita de cilindros próprios ou recarga..."
                                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-oximar-green focus:border-transparent transition resize-none"
                                    ></textarea>
                                </div>

                                {/* Botão de Submissão */}
                                <button
                                    type="submit"
                                    className="w-full py-3.5 px-6 rounded-xl bg-oximar-green text-white hover:bg-oximar-green-dark text-xs sm:text-sm font-bold uppercase tracking-wider shadow-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    <span>🚀</span> Enviar Solicitação de Cotação
                                </button>
                            </form>
                        )}
                    </div>

                    {/* COLUNA DIREITA: CANAIS DIRETOS & MATRIZ (5 colunas) */}
                    <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
                        <div className="flex items-center gap-2 pb-4 border-b border-slate-100">
                            <span className="text-xl">📍</span>
                            <h2 className="text-lg sm:text-xl font-extrabold text-oximar-dark uppercase tracking-wide">
                                Canais Diretos & Matriz
                            </h2>
                        </div>

                        {/* Linhas de Contato Imediato */}
                        <div className="space-y-3.5 text-sm">
                            <a
                                href="https://wa.me/5565992155901"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition border border-slate-100"
                            >
                                <span className="text-lg">💬</span>
                                <div>
                                    <p className="text-xs text-slate-500 font-medium">WhatsApp Comercial</p>
                                    <p className="font-bold text-slate-900">(65) 99215-5901</p>
                                </div>
                            </a>

                            <a
                                href="tel:6521297566"
                                className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition border border-slate-100"
                            >
                                <span className="text-lg">📞</span>
                                <div>
                                    <p className="text-xs text-slate-500 font-medium">Fone Fixo</p>
                                    <p className="font-bold text-slate-900">(65) 2129-7566</p>
                                </div>
                            </a>

                            <a
                                href="mailto:vendas@oximar.com.br"
                                className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition border border-slate-100"
                            >
                                <span className="text-lg">✉️</span>
                                <div>
                                    <p className="text-xs text-slate-500 font-medium">E-mail Corporativo</p>
                                    <p className="font-bold text-slate-900">vendas@oximar.com.br</p>
                                </div>
                            </a>
                        </div>

                        {/* Badge de Emergência 24h */}
                        <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 flex items-center gap-3">
                            <span className="text-xl">🚨</span>
                            <div>
                                <p className="text-xs font-bold text-red-900 uppercase tracking-wide">
                                    Plantão Hospitalar e Emergência 24h
                                </p>
                                <p className="text-[11px] text-red-700">
                                    Suporte ininterrupto para clínicas e unidades de saúde em MT.
                                </p>
                            </div>
                        </div>

                        {/* Endereço e Horários */}
                        <div className="text-xs text-slate-600 space-y-2 pt-2 border-t border-slate-100">
                            <p>
                                <strong className="text-slate-900 font-semibold">Endereço Matriz: </strong>
                                Rua 03, Nº 300 A5, Bairro São José (Coxipó), Cuiabá - MT • CEP 78080-550
                            </p>
                            <p>
                                <strong className="text-slate-900 font-semibold">Horário: </strong>
                                Segunda a Sexta, das 07:30 às 17:30
                            </p>
                        </div>

                        {/* Botão de Rotas GPS */}
                        <a
                            href="https://maps.google.com/?q=Rua+03+300+A5+Sao+Jose+Coxipo+Cuiaba+MT"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-2.5 px-4 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider text-center block transition border border-slate-200"
                        >
                            🗺️ Traçar Rota via Waze / Google Maps
                        </a>
                    </div>
                </div>
            </section>

            {/* 3. LOCALIZAÇÃO NO MAPA (Full Width Container) */}
            <section className="py-12 md:py-16 bg-white px-4 sm:px-6">
                <div className="max-w-360 mx-auto text-center">
          <span className="text-xs font-bold text-oximar-green uppercase tracking-widest block mb-1">
            Localização no Mapa
          </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-oximar-dark uppercase tracking-wide mb-8">
                        Nossa Localização
                    </h2>

                    <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100 h-80 sm:h-96 w-full">
                        <iframe
                            title="Localização Oximar Cuiabá"
                            src="https://maps.google.com/maps?q=Rua%2003,%20N%C2%BA%20300%20A5,%20Bairro%20S%C3%A3o%20Jos%C3%A9%20Coxip%C3%B3%20Cuiab%C3%A1%20MT&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            className="w-full h-full border-0"
                            loading="lazy"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>
        </main>
    );
}