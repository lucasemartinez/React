import Card from 'react-bootstrap/Card';

export default function ItemListContainer({ welcome }) {
  return (
      <Card className="border-0" style={ {width: '50%', margin: '10rem auto', backgroundColor: '#b8b8b8'}}>
        <Card.Body>
            <Card.Title>
                <h1>{welcome}</h1>
            </Card.Title>
            <Card.Text>
                <p>La empresa lider en venta de Drones en Argentina!</p>
            </Card.Text>
        </Card.Body>
        <Card.Footer style={{ background: '#e3e3e3'}}>
            <p>Compras con envio gratis</p>
        </Card.Footer>
      </Card>
  )
}
