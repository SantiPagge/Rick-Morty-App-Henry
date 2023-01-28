const http = require("http");
const characters = require("../utils/data")

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')

    if(req.url.includes("rickandmorty/character")){
        let id = req.url.split("/").at(-1);
        // let characterFilter = characters.filter(char => char.id === Number(id))
        let characterFilter = characters.find(char => char.id === Number(id)) 
        // Filter y Find tienen la misma sintaxis, la diferencia es que Filter devuelve un array de objetos, y Find devuelve un Objeto

        res.writeHead(200, {"Content-type":"application/json"}).end(JSON.stringify(characterFilter)) 
        // la info viaja en formato JSON asi que hay que parsearla, con JSON.stringify()


    }

}).listen(3001, "localhost")