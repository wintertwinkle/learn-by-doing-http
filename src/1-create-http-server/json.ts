 module.exports = function(req, res) {
    // `res.setHeader` method adds an HTTP header to the response.
    // `Content-Type` header is used to indicate the format of the data, also known as media type. 
    res.setHeader("Content-Type", "application/json")
    res.writeHead(200, 'OK')
    res.end(`{ "message": "This is a JSON response" }`)
}