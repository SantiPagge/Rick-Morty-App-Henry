const http = require("http");
// const characters = require("../utils/data")
const getCharById = require("../controllers/getCharById");
const getCharDetail = require("../controllers/getCharDetail");


http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    let id = req.url.split("/").at(-1);

    // if(req.url.includes("rickandmorty/character")){
    //     let id = req.url.split("/").at(-1);
    //     // let characterFilter = characters.filter(char => char.id === Number(id))
    //     let characterFilter = characters.find(char => char.id === Number(id)) 
    //     // Filter y Find tienen la misma sintaxis, la diferencia es que Filter devuelve un array de objetos, y Find devuelve un Objeto

    //     res.writeHead(200, {"Content-type":"application/json"}).end(JSON.stringify(characterFilter)) 
    //     // la info viaja en formato JSON asi que hay que parsearla, con JSON.stringify()


    // }

    if(res.url.includes("onsearch")){
        getCharById(res, id);
    }

    if(res.url.includes("detail")){
        getCharDetail(res, id);
    }

}).listen(3001, "localhost")