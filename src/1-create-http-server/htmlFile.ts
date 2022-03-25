import { promises as fs } from "fs"
import path from "path"

const htmlFileHanlder = function(req, res) {
    fs.readFile(path.resolve(__dirname, "../public", "index.html"))
        .then(content => {
            res.setHeader("Content-Type", "text/html")
            res.setHeader("Cache-Control", "max-age=2000")
            res.setHeader("ETag", "1111-1111")
            res.writeHead(200, "ERROR")
            res.end(content)
        })
        .catch(err => {
            res.writeHead(500)
            res.end(err.toString())
            return
        })
    
}

export default htmlFileHanlder