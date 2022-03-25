import http from 'http'
import htmlFileHanlder from './1-create-http-server/htmlFile'
const open = require("open")


const host = 'localhost'
const port = 8000

const server = http.createServer(htmlFileHanlder)

server.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}`)
    open(`http://${host}:${port}`)
})