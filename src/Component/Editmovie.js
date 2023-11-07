import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { Updatemovie } from './Redux/Action';

function Editmovie({id}) {
  const[title,setTitle]=useState('')
  const[description,setDescription]=useState('')
  const[image,setImage]=useState('')
  const[rating,setRating]=useState(0)
  const[video,setVideo]=useState('')

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch=useDispatch()
const Update=()=>{
    dispatch(Updatemovie(id,{title,description,image,rating,video}))
    handleClose()
}

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>title</Form.Label>
              <Form.Control
               onChange={(e)=>setTitle(e.target.value)}
                type="text"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
           
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>description</Form.Label>
              <Form.Control
              onChange={(e)=>setDescription(e.target.value)}
                type="text"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>image</Form.Label>
              <Form.Control
              onChange={(e)=>setImage(e.target.value)}
                type=""
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>rating</Form.Label>
              <Form.Control
              onChange={(e)=>setRating(e.target.value)}
                type="number"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>video</Form.Label>
              <Form.Control
              onChange={(e)=>setVideo(e.target.value)}
                type="text"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={Update}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Editmovie;