const csvHanlder = function(req, res) {
    res.setHeader("Content-Type", "text/csv")
    res.setHeader("Content-Disposition", "attachment;filename=oceanpals.csv")
    res.writeHead(200, "OK")
    res.end(`id,name,email\n1,Sammy Shark,shark@ocean.com`)
}

module.exports = csvHanlder