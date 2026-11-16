export function ContactChannels() {
    return (
        <section className="py-12 bg-white px-6">
            <div className="max-w-360 mx-auto text-center">
                <h2 className="text-xl md:text-2xl font-extrabold text-oximar-dark uppercase tracking-wide mb-8">
                    Canais de Atendimento e Redes Sociais
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Outras Formas de Contato */}
                    <div>
                        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 text-center">
                            Outras Formas de Contato
                        </h3>
                        <div className="grid grid-cols-2 rounded-lg overflow-hidden shadow-sm border border-slate-200 h-12">
                            <a
                                href="https://wa.me/5565992155901"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#22C55E] hover:bg-[#16A34A] text-white font-bold text-xs flex items-center justify-center transition"
                            >
                                WHATSAPP
                            </a>
                            <a
                                href="mailto:vendas@oximar.com.br"
                                className="bg-[#F97316] hover:bg-[#EA580C] text-white font-bold text-xs flex items-center justify-center transition"
                            >
                                E-MAIL
                            </a>
                        </div>
                    </div>

                    {/* Siga Nossas Redes */}
                    <div>
                        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 text-center">
                            Siga Nossas Redes
                        </h3>
                        <div className="grid grid-cols-1 rounded-lg overflow-hidden shadow-sm border border-slate-200 h-12">
                            <a
                                href="https://www.instagram.com/oximaroxigenio/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[linear-gradient(45deg,#405de6,#5851db,#833ab4,#c13584,#e1306c,#fd1d1d)] hover:brightness-90 text-white font-bold text-xs flex items-center justify-center transition"
                            >
                                INSTAGRAM
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}