export interface GasProduct {
    id: string;
    name: string;
    cylinderBadgeColor: string; // Cor ilustrativa do topo do cilindro
    riskNumber: string;
    onuNumber: string;
    hazardClass: string;
    aspect: string;
}

export const GAS_PRODUCTS: GasProduct[] = [
    {
        id: 'ar-comprimido',
        name: 'AR COMPRIMIDO',
        cylinderBadgeColor: 'bg-emerald-600',
        riskNumber: '20',
        onuNumber: '1002',
        hazardClass: '2.2',
        aspect: 'Gás inerte, incolor e inodoro.',
    },
    {
        id: 'oxigenio-comprimido',
        name: 'OXIGÊNIO, COMPRIMIDO',
        cylinderBadgeColor: 'bg-green-700',
        riskNumber: '25',
        onuNumber: '1072',
        hazardClass: '2.2 / 5.1',
        aspect: 'Gás incolor, inodoro. Acondicionado em cilindro variando de 150 a 200 bar à temperatura ambiente.',
    },
    {
        id: 'acetileno-dissolvido',
        name: 'ACETILENO, DISSOLVIDO',
        cylinderBadgeColor: 'bg-red-600',
        riskNumber: '239',
        onuNumber: '1001',
        hazardClass: '2.1',
        aspect: 'Gás muito inflamável, o acetileno puro é incolor e inodoro. As impurezas geram odor de alho.',
    },
    {
        id: 'nitrogenio-comprimido',
        name: 'NITROGÊNIO, COMPRIMIDO',
        cylinderBadgeColor: 'bg-slate-400',
        riskNumber: '20',
        onuNumber: '1066',
        hazardClass: '2.2',
        aspect: 'Gás asfixiante, incolor, inodoro, não corrosivo, mais leve que o ar.',
    },
    {
        id: 'dioxido-de-carbono',
        name: 'DIÓXIDO DE CARBONO (CO₂)',
        cylinderBadgeColor: 'bg-zinc-700',
        riskNumber: '20',
        onuNumber: '1013',
        hazardClass: '2.2',
        aspect: 'Gás inerte, incolor e inodoro, levemente ácido. Acondicionado sob pressão líquida.',
    },
    {
        id: 'argonio-comprimido',
        name: 'ARGÔNIO, COMPRIMIDO',
        cylinderBadgeColor: 'bg-teal-600',
        riskNumber: '20',
        onuNumber: '1013',
        hazardClass: '2.2',
        aspect: 'Gás não inflamável, não tóxico, alta pressão, incolor, inodoro e insípido.',
    },
    {
        id: 'mistura-argonio-co2',
        name: 'MISTURA DE CO₂ EM ARGÔNIO (MIG)',
        cylinderBadgeColor: 'bg-amber-600',
        riskNumber: '20',
        onuNumber: '1956',
        hazardClass: '2.2',
        aspect: 'Gás comprimido asfixiante, não inflamável, certificado para processos de soldagem contínua.',
    },
    {
        id: 'helio-balonal',
        name: 'HÉLIO / BALONAL (MISTURA)',
        cylinderBadgeColor: 'bg-orange-500',
        riskNumber: '20',
        onuNumber: '1956',
        hazardClass: '2.2',
        aspect: 'Mistura com no mínimo 95% de hélio em nitrogênio. Incolor, inodoro e mais leve que o ar.',
    },
    {
        id: 'hidrogenio-comprimido',
        name: 'HIDROGÊNIO, COMPRIMIDO',
        cylinderBadgeColor: 'bg-emerald-500',
        riskNumber: '23',
        onuNumber: '1049',
        hazardClass: '2.1',
        aspect: 'Gás inflamável, incolor, inodoro, comprimido em alta pressão à temperatura ambiente.',
    },
];