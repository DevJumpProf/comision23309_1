import { useState } from "react";
import {useNavigate}from "react-router-dom"
import {collection,addDoc} from "firebase/firestore"
import {db} from "../firebaseConfig/firebase.js"
export const Create = () =>{
const [author, setAuthor] = useState ("")
const [description, setDescription] = useState ("")
const [stock,setStock] = useState (0)

const navigate = useNavigate()

const productsCollection = collection(db,"products")

const createBook = async(e)=>{
    e.preventDefault()
    await addDoc(productsCollection,{
        authors:author,
        description:description,
        stock:stock
    })
    navigate("/")
}

    return(
    <div className="container">
        <div className="row">
            <div className="col">
                <h1>create Book</h1>
               <form onSubmit={createBook}>
                <div className="mb-3">
                 <label className="form-label">Author</label>   
                 <input 
                 value={author}
                 onChange={(e)=>setAuthor(e.target.value)}
                 className="form-control"
                 type="text"/>
                </div>

                <div className="mb-3">
                 <label className="form-label">Description</label>   
                 <input 
                 value={description}
                 onChange={(e)=>setDescription(e.target.value)}
                 className="form-control"
                 type="text"/>
                </div>

                <div className="mb-3">
                 <label className="form-label">Stock</label>   
                 <input 
                 value={stock}
                 onChange={(e)=>setStock(e.target.value)}
                 className="form-control"
                 type="number"/>
                </div>
<button type="submit" className="btn btn-primary">CREATE BOOK</button>
               </form>
            </div>
        </div>
    </div>
    )
}


