import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Show } from "./components/Show";
import './App.css';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
 <Routes>
 <Route path="/" element= {<Show/>} />
 <Route path="/create" element="Create" />
 <Route path="/edit/:id" element="componente Edit" />
 </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
