// const http = require("http");
// // const characters = require("../utils/data")
// const getCharById = require("../controllers/getCharById");
// const getCharDetail = require("../controllers/getCharDetail");


// http.createServer((req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*')
//     let id = req.url.split("/").at(-1);

//     // if(req.url.includes("rickandmorty/character")){
//     //     let id = req.url.split("/").at(-1);
//     //     // let characterFilter = characters.filter(char => char.id === Number(id))
//     //     let characterFilter = characters.find(char => char.id === Number(id)) 
//     //     // Filter y Find tienen la misma sintaxis, la diferencia es que Filter devuelve un array de objetos, y Find devuelve un Objeto

//     //     res.writeHead(200, {"Content-type":"application/json"}).end(JSON.stringify(characterFilter)) 
//     //     // la info viaja en formato JSON asi que hay que parsearla, con JSON.stringify()


//     // }

//     if(res.url.includes("onsearch")){
//         getCharById(res, id);
//     }

//     if(res.url.includes("detail")){
//         getCharDetail(res, id);
//     }

// }).listen(3001, "localhost")


const express = require("express")
const app = express();
const axios = require("axios");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/rickandmorty/character/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const response = await axios(`https://rickandmortyapi.com/character/${id}`)
        const data = response.data;

        const infoCharacter = {
            id: data.id,
            name: data.name,
            species: data.species,
            gender: data.gender,
            image: data.image
        }

        res.status(200).json(infoCharacter)
        
    } catch (error) {
        res.status(404).send(error.message);
    }

})

app.get("/rickandmorty/detail/:detailId", async (req, res) => {
    const { detailId } = req.params

    try {    
        const response = (await axios(`https://rickandmortyapi.com/character/${detailId}`)).data

        const infoCharacterDetail = {
            id: response.id,
            name: response.name,
            status: response.status,
            species: response.species,
            gender: response.gender,
            origin: response.origin.name,
            image: response.image
        }

        res.status(200).json(infoCharacterDetail);

    } catch (error) {
        res.status(404).send(error.message);
    }
})

let fav = [];

app.get("/rickandmorty/fav", (req, res) => {
    res.status(200).json(fav);
})

app.post("/rickandmorty/fav", (req, res) => {
    fav.push(req.body);
    res.status(200).send("Se guardaron correctamente");
})

app.delete("/rickandmorty/fav/:id", (req, res) => {
    const { id } = req.params;

    const favFiltered = fav.filter(char => char.id !== Number(id));
    fav = favFiltered;

    res.status(200).send("Se eliminó correctamente");
})

module.exports = app;