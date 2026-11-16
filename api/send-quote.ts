export interface QuotePayload {
    fullName: string;
    phone: string;
    company?: string;
    gasType?: string;
    gasLabel?: string;
    email: string;
    specifications?: string;
}

function escapeHtml(value: string): string {
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

export async function sendQuoteEmail(
    payload: QuotePayload,
    env: Record<string, string | undefined> = process.env
) {
    const {
        fullName,
        phone,
        company = '',
        gasLabel = 'Não especificado',
        email,
        specifications = '',
    } = payload;

    if (!fullName || !phone || !email) {
        throw new Error('Campos obrigatórios ausentes (Nome, Telefone e E-mail).');
    }

    const resendApiKey = env.RESEND_API_KEY;
    const fromEmail = env.QUOTE_FROM_EMAIL || 'Oximar Orçamentos <onboarding@resend.dev>';
    const recipientEmail = env.QUOTE_TO_EMAIL || 'matheus9.mts@gmail.com';

    if (!resendApiKey || resendApiKey.startsWith('coloque_sua_')) {
        throw new Error(
            'Chave RESEND_API_KEY não configurada. Adicione sua chave do Resend no arquivo .env.'
        );
    }

    const cleanPhoneDigits = phone.replace(/\D/g, '');
    const whatsappUrl = cleanPhoneDigits
        ? `https://wa.me/55${cleanPhoneDigits}`
        : undefined;

    const subject = `Nova Solicitação de Cotação - ${company || fullName} (${gasLabel})`;

    const textBody = [
        'NOVA SOLICITAÇÃO DE COTAÇÃO - OXIMAR',
        '-------------------------------------------',
        `Nome Completo: ${fullName}`,
        `Telefone / WhatsApp: ${phone}`,
        `Empresa / Segmento: ${company || 'Não informado'}`,
        `Tipo de Gás ou Serviço: ${gasLabel}`,
        `E-mail: ${email}`,
        '',
        'Mensagem / Especificações dos Cilindros:',
        specifications || 'Não informado',
    ].join('\n');

    const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
        <div style="background-color: #0F172A; padding: 20px 24px; border-bottom: 4px solid #A3E635;">
            <h2 style="margin: 0; color: #A3E635; font-size: 18px; text-transform: uppercase; letter-spacing: 0.5px;">
                Nova Solicitação de Orçamento
            </h2>
            <p style="margin: 4px 0 0; color: #cbd5e1; font-size: 12px;">
                Recebido através do site da Oximar
            </p>
        </div>

        <div style="padding: 24px; background-color: #ffffff;">
            <table style="width: 100%; border-collapse: collapse; font-size: 14px; color: #1e293b;">
                <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; width: 40%; color: #475569;">
                        Nome Completo:
                    </td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;">
                        ${escapeHtml(fullName)}
                    </td>
                </tr>
                <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #475569;">
                        Telefone / WhatsApp:
                    </td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;">
                        ${escapeHtml(phone)}
                        ${
                            whatsappUrl
                                ? `&nbsp; <a href="${whatsappUrl}" style="color: #15803D; font-weight: bold; text-decoration: none; font-size: 12px;">[Chamar no WhatsApp]</a>`
                                : ''
                        }
                    </td>
                </tr>
                <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #475569;">
                        Empresa / Segmento:
                    </td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;">
                        ${escapeHtml(company || 'Não informado')}
                    </td>
                </tr>
                <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #475569;">
                        Tipo de Gás ou Serviço:
                    </td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #15803D;">
                        ${escapeHtml(gasLabel)}
                    </td>
                </tr>
                <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #475569;">
                        E-mail do Cliente:
                    </td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;">
                        <a href="mailto:${escapeHtml(email)}" style="color: #0284c7; text-decoration: none;">
                            ${escapeHtml(email)}
                        </a>
                    </td>
                </tr>
            </table>

            <div style="margin-top: 20px; padding: 16px; background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px;">
                <p style="margin: 0 0 8px; font-size: 12px; font-weight: bold; text-transform: uppercase; color: #475569;">
                    Mensagem / Especificações dos Cilindros:
                </p>
                <p style="margin: 0; font-size: 14px; color: #1e293b; white-space: pre-wrap; line-height: 1.5;">${escapeHtml(
                    specifications || 'Não informado'
                )}</p>
            </div>
        </div>

        <div style="background-color: #f8fafc; padding: 12px 24px; text-align: center; font-size: 11px; color: #64748b; border-top: 1px solid #e2e8f0;">
            Para responder diretamente ao cliente, basta clicar em <strong>Responder</strong> neste e-mail.
        </div>
    </div>
    `;

    const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            from: fromEmail,
            to: [recipientEmail],
            reply_to: email,
            subject,
            text: textBody,
            html: htmlBody,
        }),
    });

    const data = (await response.json()) as { id?: string; message?: string; name?: string };

    if (!response.ok) {
        throw new Error(
            data.message || `Falha ao enviar e-mail pelo Resend (status ${response.status}).`
        );
    }

    return data;
}

// Handler compatível com Vercel Serverless Functions (/api/send-quote)
export default async function handler(req: any, res: any) {
    if (req.method !== 'POST') {
        res.statusCode = 405;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ success: false, message: 'Método não permitido.' }));
        return;
    }

    try {
        const body: QuotePayload =
            typeof req.body === 'string' ? JSON.parse(req.body) : req.body;

        await sendQuoteEmail(body, process.env);

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ success: true }));
    } catch (error) {
        console.error('Erro no envio de cotação:', error);
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.end(
            JSON.stringify({
                success: false,
                message:
                    error instanceof Error
                        ? error.message
                        : 'Erro interno ao enviar o e-mail de cotação.',
            })
        );
    }
}
