import mongoose from 'mongoose'

const schema = mongoose.Schema({
    // id é automatic no Mongoose

    razao_social:{type: String, required:true},
    nome_fantasia:{type: String, required:true},
    cnpj:{ type: String, required: true,  index:{ unique:true }},
    logradouro: { type:String, required:true},
    num_casa: {type: String, required:true},
    bairro: {type: String, required:true},
    complemento:{type:String, requided:false},
    municipio: {type:String, require:true},
    uf: {type:String, required:true},
    telefone:{type:String, required:true},
    email:{type:String, required:true, index:{unique:true}}
})

//parametros de mongoose.model
// 1º = nome do model (inicial maiuscula)
// 2º = o esquema defido acima
// 3º = nome do collecton no BD (inicial minuscula, plural)


export default mongoose.model('Fornecedor', schema,'Fornecedores')
