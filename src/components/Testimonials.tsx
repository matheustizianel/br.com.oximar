const TESTIMONIALS = [
    {
        text: 'Atendimento rápido na entrega de recargas para a nossa indústria em MT.',
        author: 'Roberto S.',
        role: 'Gerente Fabril',
    },
    {
        text: 'Instalação da rede de oxigênio medicinal perfeita para a clínica veterinária.',
        author: 'Dra. Camila',
        role: 'Médica Veterinária',
    },
    {
        text: 'Cilindros de solda MIG com pureza excelente e suporte de primeira qualidade.',
        author: 'Marcos P.',
        role: 'Metalúrgica',
    },
];

export function Testimonials() {
    return (
        <section className="py-16 bg-oximar-surface px-6 border-b border-slate-200">
            <div className="max-w-360 mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-extrabold text-oximar-dark uppercase tracking-wide mb-10">
                    Avaliações & Confiança
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                    {TESTIMONIALS.map((item, idx) => (
                        <div
                            key={idx}
                            className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex text-amber-400 mb-3 text-sm">
                                    ★★★★★
                                </div>
                                <p className="text-sm text-slate-700 italic leading-relaxed mb-4">
                                    "{item.text}"
                                </p>
                            </div>
                            <div className="border-t border-slate-100 pt-3">
                                <p className="text-xs font-bold text-slate-900">— {item.author}</p>
                                <p className="text-xs text-slate-500">{item.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}