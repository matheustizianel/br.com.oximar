const GUIDELINES = [
    {
        icon: '⬆️',
        title: 'POSIÇÃO VERTICAL',
        desc: 'Manter sempre amarrados e presos contra queda acidental.',
        tagColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
    },
    {
        icon: '☀️',
        title: 'AMBIENTE AREJADO',
        desc: 'Local ventilado, longe de fontes de calor, faíscas, sol e óleo.',
        tagColor: 'text-amber-700 bg-amber-50 border-amber-200',
    },
    {
        icon: '🔗',
        title: 'SEGREGAÇÃO DE GASES',
        desc: 'Não misturar gases combustíveis (GLP/Acetileno) com cilindros de O₂.',
        tagColor: 'text-blue-700 bg-blue-50 border-blue-200',
    },
    {
        icon: '⚠️',
        title: 'ACETILENO CRÍTICO',
        desc: 'Nunca operar ou guardar na posição horizontal (risco grave de explosão).',
        tagColor: 'text-red-700 bg-red-50 border-red-200',
    },
];

export function SafetyGuidelines() {
    return (
        <section className="py-16 bg-white px-6 border-b border-slate-200">
            <div className="max-w-360 mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-extrabold text-oximar-dark uppercase tracking-wide">
                    Cuidados com Cilindros de Gases
                </h2>
                <p className="text-sm text-slate-500 mt-2 mb-10">
                    Diretrizes fundamentais de segurança e conformidade técnica ABNT NBR
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
                    {GUIDELINES.map((card, idx) => (
                        <div
                            key={idx}
                            className="p-6 bg-oximar-surface rounded-xl border border-slate-200 shadow-sm hover:shadow transition flex flex-col justify-between"
                        >
                            <div>
                <span className={`inline-flex items-center justify-center w-10 h-10 rounded-lg text-lg border mb-4 ${card.tagColor}`}>
                  {card.icon}
                </span>
                                <h3 className="text-sm font-bold text-slate-900 tracking-wider uppercase mb-2">
                                    {card.title}
                                </h3>
                                <p className="text-xs text-slate-600 leading-relaxed">
                                    {card.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}