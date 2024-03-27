import { query } from "express";
import Produto from "../models/Produto.js";


const controller = {}  // Objeto vazio

controller.create = async function(req, res) {
    try {
        await Produto.create(req.body)
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
        const query = Produto.find().sort({descricao: 'asc'}).populate('fornecedor')
        
        // verifica se o parametro pop_fornecedor foi passado na url
        // e em caso positivo, acrescenta o populate() a consulta
        if(req.query.pop_fornecedor) query.populate('fornecedor')

        const result = await query.exec()
        
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
        const result = await Produto.findById(req.params.id).populate('fornecedor')
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
        const result = await Produto.findByIdAndUpdate(req.params.id, req.body)
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
        const result = await Produto.findByIdAndDelete(req.params.id)
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