import {Sequelize} from "sequelize"
// nombre de la db - user - contraseña - (donde esta alojado - lenguaje - port)
const db = new Sequelize ("socialmedia23309","root","",{
    host: "localhost",
    dialect:"mysql",
    port:3306
})

export default db