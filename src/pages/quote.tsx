import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { GAS_PRODUCTS } from '../data/products';

const SERVICE_CATEGORIES: Record<string, string> = {
    industrial: 'Gases Industriais',
    medicinal: 'Gases Medicinais & Hospitalares',
    especiais: 'Gases Especiais & Misturas Padrão',
    equipamentos: 'Locação de Cilindros',
};

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
    })

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);
    const [submitted, setSubmitted] = useState(false);

    // Mapeia o id recebido pela URL para pré-selecionar no dropdown e nas especificações
    useEffect(() => {
        if (gasParam) {
            const matchedGas = GAS_PRODUCTS.find((g) => g.id === gasParam);
            setFormData((prev) => ({
                ...prev,
                gasType: matchedGas ? matchedGas.id : gasParam,
                specifications: matchedGas
                    ? `Solicitação de cotação para: ${matchedGas.name} (Nº ONU ${matchedGas.onuNumber})`
                    : `Interesse no produto com identificador: ${gasParam}`,
            }));
        }
    }, [gasParam]);

    const formatBrazilPhone = (raw: string) => {
        const digits = raw.replace(/\D/g, '').slice(0, 11);
        if (digits.length === 0) return '';
        if (digits.length <= 2) return `(${digits}`;
        if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
        if (digits.length <= 10) {
            return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
        }
        return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        const formattedValue = name === 'phone' ? formatBrazilPhone(value) : value;
        setFormData((prev) => ({ ...prev, [name]: formattedValue }));
    };

    const getSelectedGasLabel = (gasType: string) => {
        if (!gasType) return 'Não especificado';
        const matchedGas = GAS_PRODUCTS.find((g) => g.id === gasType);
        if (matchedGas) return matchedGas.name;
        return SERVICE_CATEGORIES[gasType] || gasType;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError(null);

        const selectedGasLabel = getSelectedGasLabel(formData.gasType);

        try {
            const response = await fetch('/api/send-quote', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    gasLabel: selectedGasLabel,
                }),
            });

            const result = await response.json();

            if (!response.ok || !result.success) {
                throw new Error(result.message || 'Não foi possível enviar a solicitação no momento.');
            }

            setSubmitted(true);
        } catch (error) {
            console.error('Erro ao enviar formulário de orçamento:', error);
            setSubmitError(
                error instanceof Error
                    ? error.message
                    : 'Ocorreu um erro ao enviar a sua solicitação. Tente novamente ou fale connosco pelo WhatsApp.'
            );
        } finally {
            setIsSubmitting(false);
        }
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
                            <div className="p-6 bg-green-50 border border-green-200 rounded-xl text-center space-y-3">
                                <span className="text-3xl block">✅</span>
                                <h3 className="text-base font-bold text-green-900">
                                    Solicitação Enviada com Sucesso!
                                </h3>
                                <p className="text-xs sm:text-sm text-green-700">
                                    A nossa equipa técnica entrará em contacto pelo WhatsApp ou e-mail com a sua cotação.
                                </p>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setSubmitted(false);
                                        setFormData({
                                            fullName: '',
                                            phone: '',
                                            company: '',
                                            gasType: '',
                                            email: '',
                                            specifications: '',
                                        });
                                    }}
                                    className="mt-2 inline-block px-4 py-2 rounded-lg bg-white border border-green-300 text-green-800 hover:bg-green-100 text-xs font-bold uppercase tracking-wider transition cursor-pointer"
                                >
                                    Enviar Nova Solicitação
                                </button>
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
                                            maxLength={15}
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
                                            <option value="">Selecione um gás ou serviço...</option>
                                            <optgroup label="Gases do Catálogo">
                                                {GAS_PRODUCTS.map((gas) => (
                                                    <option key={gas.id} value={gas.id}>
                                                        {gas.name}
                                                    </option>
                                                ))}
                                            </optgroup>
                                            <optgroup label="Categorias & Outros Serviços">
                                                {Object.entries(SERVICE_CATEGORIES).map(([key, label]) => (
                                                    <option key={key} value={key}>
                                                        {label}
                                                    </option>
                                                ))}
                                            </optgroup>
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

                                {submitError && (
                                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-800">
                                        ⚠️ {submitError}
                                    </div>
                                )}

                                {/* Botão de Submissão */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-3.5 px-6 rounded-xl bg-oximar-green text-white hover:bg-oximar-green-dark disabled:opacity-60 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    <span>🚀</span>
                                    {isSubmitting ? 'Enviando Solicitação...' : 'Enviar Solicitação de Cotação'}
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
                                    <p className="font-bold text-slate-900">(65) 99215-5901 / (65) 99275-7171</p>
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

                        {/* Endereço e Horários */}
                        <div className="text-xs text-slate-600 space-y-2 pt-2 border-t border-slate-100">
                            <p>
                                <strong className="text-slate-900 font-semibold">Endereço Matriz: </strong>
                                Rua 03, Nº 300 - A8, Jardim Comodoro, Cuiabá - MT • CEP 78080-550
                            </p>
                            <p>
                                <strong className="text-slate-900 font-semibold">Horário: </strong>
                                Segunda a Sexta, das 07:30 às 17:00
                            </p>
                        </div>

                        {/* Botão de Rotas GPS */}
                        <a
                            href="https://www.google.com/maps/place/Oximar+Oxigenio/@-15.6388918,-56.0446699,1453m/data=!3m2!1e3!4b1!4m6!3m5!1s0x939daf90be8de6e3:0x16dc6a4719e917c8!8m2!3d-15.638897!4d-56.0420896!16s%2Fg%2F1tj74pky?entry=ttu&g_ep=EgoyMDI2MTExMC4wIKXMDSoASAFQAw%3D%3D"
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

                    <div
                        className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100 h-80 sm:h-96 w-full">
                        <iframe
                            title="Localização Oximar Cuiabá"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d395.5300064031771!2d-56.04190123404454!3d-15.638979505432646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x939daf90be8de6e3%3A0x16dc6a4719e917c8!2sOximar%20Oxigenio!5e1!3m2!1sen!2sus!4v1794860284288!5m2!1sen!2sus"
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