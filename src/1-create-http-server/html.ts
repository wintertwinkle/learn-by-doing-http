const htmlHanlder = function(req, res) {
    res.setHeader("Content-Type", "text/html")
    res.writeHead(200, 'ERROR')
    res.end(`<html><body><h1>This is HTML</h1></body></html>`)
}

export default  htmlHanlder