import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import getFetch from '../../helpers/gFetch'
import ItemCount from '../Items/ItemCount';



export default function ItemListContainer({ welcome }) {    

    const [checkOut, setCheckOut] = useState(1)
    const [ loading, setLoading ] = useState(true);
    const [prods, setProds] = useState([])
    

    useEffect(() => {
        getFetch // Simulacion de llamado a API
            .then(response => setProds(response))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [])

    return (
        <>
            <Card style={{ width: '50%', margin: '10rem auto', backgroundColor: '#b8b8b8' }}>
                <Card.Body>
                    <Card.Title>
                        <h1>{welcome}</h1>
                    </Card.Title>
                    <Card.Text>
                        <p>La empresa lider en venta de Drones en Argentina!</p>
                    </Card.Text>
                </Card.Body>
                <Card.Footer style={{ background: '#e3e3e3' }}>
                    <p>Compras con envio gratis</p>
                </Card.Footer>
            </Card>

            { loading ? <h2>Cargando</h2> 
            :
            <Container>
                <Row>
                {prods.map((prod) =>       
                    <Col key={prod.id}>
                        <Card className="p-3" >
                            <Card.Title>{prod.title}</Card.Title>
                            <Card.Body> 
                                <Card.Text>
                                    {prod.description}
                                    <ItemCount stock={10} initial={1} onAdd={checkOut}/>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                               {prod.price}
                            </Card.Footer>
                        </Card>
                    </Col>                   
                )}
                </Row>
            </Container>
            }           
        </>
    )
}
