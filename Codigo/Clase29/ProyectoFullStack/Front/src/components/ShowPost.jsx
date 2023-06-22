import axios from "axios"
import {useEffect,useState } from "react"
import{Link} from "react-router-dom"

const url = "http://localhost:8000/posts/"



const ShowPost = () =>{
    const [posts,setPosts]= useState([])

    useEffect(()=>{
        getPosts()
    },[])

    // procedimiento para traer todos los posts

    const getPosts = async()=>{
        const res = await axios.get(url)
        setPosts(res.data)
    }

        // procedimiento para borrar todos los posts
const deletePost = async(id)=>{
await axios.delete(`${url}${id}`)
getPosts()
    }



return(
<div className="container">
    <div className="row">
        <div className="col">
            <small>CREATE POST</small>
            <Link to="/create" className="btn btn-primary mt-2 mb-2"><i className="fas fa-plus"></i></Link>
<table className="table">
    <thead className="table-primary">
        <tr>
            <th>Title</th>
            <th>Content</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        {posts.map((post)=>(
<tr key={post.id}>
<td>{post.title}</td>
<td>{post.content}</td>
<td>
    <Link to={`/edit/${post.id}`} className="btn btn-info"><i className="fas fa-edit"></i></Link>
    <button onClick={()=>deletePost(post.id)} className="btn btn-danger"><i className="fas fa-trash"></i></button>
</td>
</tr>
        ))}
    </tbody>
</table>
        </div>
    </div>
</div>
)
}

export default ShowPost