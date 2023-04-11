import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
/* import Boton from "./Boton" */
import Card from "./Card"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<> 
<Card nombre="Leonel Messi" fecha={1987} clubes={["Newells","Barcelona" , "PSG"]} mundial={true} late={true} />
<Card nombre="Cristiano Ronaldo" fecha={1989} clubes={["Lisboa","Real Madrid" , "Manchester"]} mundial={false} late={false} />
</>
);
