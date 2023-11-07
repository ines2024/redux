
import { useState } from 'react';
import './App.css';
import Movielist from './Component/Movielist';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Addmovie } from './Component/Redux/Action';
function App() {
  const[title,setTitle]=useState('')
  const[description,setDescription]=useState('')
  const[image,setImage]=useState('')
  const[rating,setRating]=useState(0)
  const[video,setVideo]=useState('')
const dispatch=useDispatch()


  return (
    <div className="App">
    <input onChange={(e)=>setTitle(e.target.value)} type='text'></input>
     <input onChange={(e)=>setDescription(e.target.value)} type='text'></input>
     <input onChange={(e)=>setImage(e.target.value)} type='text'></input>
     <input onChange={(e)=>setRating(e.target.value)}type='text'></input>
     <input onChange={(e)=>setVideo(e.target.value)}type='text'></input>
     <Button onClick={()=>dispatch (Addmovie({title,description,image,rating,video})) }>Submit</Button>
     <Movielist/>
    </div>
  );
}

export default App;
