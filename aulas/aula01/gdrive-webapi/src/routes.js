import { logger } from './logger.js'

export default class Routes {
    io
    constructor() {

    }
    setSocketInstance(io) {
        this.io = io

    }
    async defaultRoute(request, response) {
    
        response.end('ERRO!')
    }

    async options(request, response) {
        response.writeHead(204)
        response.end('Teste API OK!')
    }
    async post(request, response) {
        logger.info('OK POST')
        response.end()
    }
    async get(request, response) {
        response.end('OK GET')
    }

    handler(request, response) {
        response.setHeader('Access-Control-Allow-Origin', '*')
        const chosen = this[request.method.toLowerCase()] || this.defaultRoute
        
        return chosen.apply(this, [request, response])
    }
}
