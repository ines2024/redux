import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Deletemovie } from './Redux/Action'
import Editmovie from './Editmovie'

function Movielist() {
    const dispatch=useDispatch()
    const movies= useSelector(state=>state.movies)
    console.log(movies)
  return (
    <div>
{
    movies.map(e=><Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={e.image} />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button onClick={()=>dispatch(Deletemovie(e.id))}>Delete</Button>
      <Editmovie id={e.id}/>

    </Card.Body>
  </Card>)
}
    </div>
  )
}

export default Movielist