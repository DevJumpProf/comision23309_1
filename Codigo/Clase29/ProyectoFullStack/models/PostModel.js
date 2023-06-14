// imprtamos la base de datos

import db from "../database/db.js"

//// DataTypes = configurar tipos de datos
import { DataTypes } from "sequelize";

const PostModel = db.define("posts",{
    title:{type:DataTypes.STRING},
    content:{type:DataTypes.STRING}
})
    
export default PostModel

