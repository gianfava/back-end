import Cliente from "../models/Cliente.js";

const controller = {}  // Objeto vazio

controller.create = async function(req, res) {
    try {
        await Cliente.create(req.body)
        // Envia uma resposta de sucesso ao front-end
        // HTTP 201: Created
        res.status(201).end()
    }
    catch(error) {
        console.error(error)
        // HTTP 500: Internal Server Error
        res.status(500).end()
    }
}

controller.retrieveAll = async function(req, res){
    try {
        const result = await Cliente.find().sort({nome: 'asc'})
        // http 200: ok (implicito)
        res.send(result)
    }
    catch(error) {
        console.error(error)
        // HTTP 500: Internal Server Error
        res.status(500).end()
    }
}

controller.retrieveOne = async function(req, res){
    try {
        const result = await Cliente.findById(req.params.id)
        if(result) res.send(result)
        else res.status(404).end()
    }
    catch(error) {
        console.error(error)
        // HTTP 500: Internal Server Error
        res.status(500).end()
    }
}

controller.update = async function(req, res){
    try{
        const result = await Cliente.findByIdAndUpdate(req.params.id, req.body)
        if(result) res.status(204).end()
    }
    catch(error) {
        console.error(error)
        // HTTP 500: Internal Server Error
        res.status(500).end()
    }
}

controller.delete = async function(req, res){
    try{
        const result = await Cliente.findByIdAndDelete(req.params.id)
        if(result) res.status(204).end()
        else res.status(404).end()
    }
    catch(error) {
        console.error(error)
        // HTTP 500: Internal Server Error
        res.status(500).end()
    }
}


export default controller