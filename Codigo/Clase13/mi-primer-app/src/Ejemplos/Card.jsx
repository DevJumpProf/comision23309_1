import "./Card.css"

export default function Card({nombre,fecha,clubes,mundial,late}) {
  return (
    <div>
{/*         <h1 style={{backgroundColor:mundial?"blue":"red"}}>{nombre}</h1> */}
{        <h1 className={mundial?"dorado":"plateado"}>{nombre}</h1> }
        <small>{fecha}</small>
        <p>{clubes}</p>
        <small>{mundial?"Gano un mundial🏆":"Sigue Participando🤬"}</small>
        <h5>{late?"Late ✅":"Nola❌"}</h5>
    </div>
  )
}
