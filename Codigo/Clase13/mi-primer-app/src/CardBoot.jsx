import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Counter}  from './Counter';

function CardBoot() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Joggings Deportivo Babucha</Card.Title>
        <Card.Text>
        IMPORTANTE: NO COMPRAR el talle que comunmente usa. Compare las medidas de la tabla publicada con una prenda suya para elegir el talle correcto.
        </Card.Text>
        <Counter/>
        <Button variant="primary">Agregar al carrito</Button>
      </Card.Body>
    </Card>
  );
}

export default CardBoot;