import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase.js";

export const Edit = () => {
  const [authors, setAuthors] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState(0);

  const navigate = useNavigate();

  const { id } = useParams();

  //funcion que actualiza un documento (libro)

  const update = async (e) => {
    e.preventDefault();
    const productDoc = doc(db, "products", id);
    const data = {
      authors: authors,
      description: description,
      stock: stock,
    };
    await updateDoc(productDoc, data);
    navigate("/");
  };

  const getProductById = async (id) => {

    const productDoc = await getDoc(doc(db, "products", id));
    if (productDoc.exists()) {
      setAuthors(productDoc.data().authors);
      setDescription(productDoc.data().description);
      setStock(productDoc.data().stock);
    } else {
      console.log("El libro no existe");
    }
  }

  useEffect(() => {
    getProductById(id);// eslint-disable-next-line
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Edit Book</h1>
          <form onSubmit={update}>
            <div className="mb-3">
              <label className="form-label">Authors</label>
              <input
                value={authors}
                onChange={(e) => setAuthors(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Description</label>
              <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Stock</label>
              <input
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                type="number"
                className="form-control"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
