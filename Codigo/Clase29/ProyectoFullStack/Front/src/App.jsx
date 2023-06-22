/* importar los componentes */
import ShowPost from "./components/ShowPost"
import CreatePost from "./components/CreatePost"
import EditPost from "./components/EditPost"

import {BrowserRouter,Routes,Route} from "react-router-dom"



const App = () =>{
  return(
      <div className="App">
          <header className="App-header"></header>
<BrowserRouter>
<Routes>
  <Route path="/" element={<ShowPost/>}/>
  <Route path="/create" element={<CreatePost/>}/>
  <Route path="/edit/:id" element={<EditPost/>}/>
</Routes>
</BrowserRouter>

      </div>
  )
  }
  
  export default App