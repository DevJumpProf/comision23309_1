import axios from "axios"
import {useState} from "react"
import {useNavigate} from "react-router-dom"

const url = "http://localhost:8000/posts/"


const CreatePost = () =>{

    const [titulo,setTitulo] = useState("")
    const[contenido, setContenido] = useState("")

    const navigate = useNavigate()

    //procedimiento para crear un registro

    const crear = async (e)=>{
        e.preventDefault()
        await axios.post(url,
            {title:titulo,
            content:contenido
            }
            )
            navigate("/")
    }
    return(
        <div>
            <h1>CREAR POST</h1>
            <form onSubmit={crear}>
                <div className="mb-3">
                    <label className="form-label">Titulo</label>
                    <input type="text" 
                    value={titulo}
                    onChange={(e)=>setTitulo(e.target.value)}
                    className="form-control"
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Contenido</label>
                    <input type="text" 
                    value={contenido}
                    onChange={(e)=>setContenido(e.target.value)}
                    className="form-control"
                    />
                </div>

                <button type="submit" className="btn btn-primary">CREAR</button>

            </form>
        </div>
    )
    }
    
    export default CreatePost