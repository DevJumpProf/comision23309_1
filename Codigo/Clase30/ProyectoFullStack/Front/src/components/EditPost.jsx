import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const url = "http://localhost:8000/posts/";

const EditPost = () => {
  const [titulo, setTitulo] = useState("");
  const [contenido, setContenido] = useState("");

  const navigate = useNavigate();

  const { id } = useParams();

  //procedimiento para editar un post

  const update = async (e) => {
    e.preventDefault();
    await axios.put(url + id, 
        { title: titulo, 
          content: contenido 
        });
    navigate("/");
  };

  // utilizo useffect para traer el post cuando se ingresa al componente
useEffect(()=>{
getPostById()
},[])
  //procedimiento para traer un post por su id

  const getPostById =async()=>{
    const res = await axios.get(url+id)
    setTitulo(res.data.title)
    setContenido(res.data.content)
  }

  return (
<div>
            <h1>edit POST</h1>
            <form onSubmit={update}>
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
                <button type="submit" className="btn btn-primary">EDITAR</button>
            </form>
        </div>
  );
};

export default EditPost;
