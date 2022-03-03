import React from 'react'
import Card from 'react-bootstrap/Card'

export default function ItemListContainer({ welcome }) {
  return (
      <Card style={ {width: '50%', margin: '0 auto'}}>
        <Card.Body>
            <Card.Title>
                <h1>{welcome}</h1>
            </Card.Title>
            <Card.Text>
                <p>La empresa lider en venta de Drones en Argentina!</p>
            </Card.Text>
        </Card.Body>
        <Card.Footer style={{ background: 'white'}}>
            <p>Compras con envio gratis</p>
        </Card.Footer>
      </Card>
  )
}
