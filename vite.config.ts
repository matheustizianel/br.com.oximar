import { defineConfig, loadEnv, type Plugin } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { sendQuoteEmail } from './api/send-quote.ts'

function quoteApiPlugin(env: Record<string, string>): Plugin {
  return {
    name: 'oximar-quote-api',
    configureServer(server) {
      server.middlewares.use('/api/send-quote', (req, res, next) => {
        if (req.method !== 'POST') {
          next()
          return
        }

        let rawBody = ''
        req.on('data', (chunk) => {
          rawBody += chunk
        })
        req.on('end', async () => {
          try {
            const payload = JSON.parse(rawBody || '{}')
            await sendQuoteEmail(payload, { ...process.env, ...env })
            res.statusCode = 200
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ success: true }))
          } catch (error) {
            console.error('Erro no envio de cotação (/api/send-quote):', error)
            res.statusCode = 500
            res.setHeader('Content-Type', 'application/json')
            res.end(
              JSON.stringify({
                success: false,
                message:
                  error instanceof Error
                    ? error.message
                    : 'Erro interno ao enviar o e-mail de cotação.',
              })
            )
          }
        })
      })
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [tailwindcss(), quoteApiPlugin(env)],
  }
})
