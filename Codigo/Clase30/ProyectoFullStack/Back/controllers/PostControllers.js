/* importar el modelo */
import PostModel from "../models/PostModel.js"

// metodos del CRUD

/* CREATE READ UPDATE DELETE */

//muestra todos los registros
export const getAllPosts = async (req,res)=>{
try {
    const posts = await PostModel.findAll()
    res.json(posts)
} catch (error) {
    res.json ({message:error.message})
}
}

// mostrar un registro
export const getPost = async (req,res)=>{
    try {
        // implementar metodo que me envie un registro por su id
/*         const post = await PostModel.findAll({
           where:{id:req.params.id} 
        })
        res.json(post[0]) */
        const post = await PostModel.findByPk(
            req.params.id
         )
         res.json(post)
    } catch (error) {
        res.json ({message:error.message})  
    }
}

//crear un registro
export const createPost = async (req,res)=>{
    try {
        await PostModel.create (req.body)
        res.json({
            "message": "Registro creado correctamente"
        })
    } catch (error) {
        res.json ({message:error.message})  
    }
}

//actualizar un registro
export const updatePost= async (req,res)=>{
try {
    await PostModel.update(req.body,{
        where:{id:req.params.id}  
    })
    res.json({
        "message": "Registro EDITADO correctamente"
    })
} catch (error) {
    res.json ({message:error.message})   
}
}

// eliminar registro
export const deletePost= async (req,res)=>{
try {
    await PostModel.destroy({
        where:{id:req.params.id}  
    })
    res.json({
        "message": "Registro Eliminado correctamente"
    })
} catch (error) {
    res.json ({message:error.message})   
}
}