import React from 'react';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom' 
import { useDispatch } from 'react-redux';
import { toggeleFalse,} from '../redux/action/contactActions'

function Homee() {
  const dispatch =useDispatch()
  return (
  
  <div>
    <Link  to ='/contacts' > 
  <Button> contact list</Button>
  </Link>
  <Link  to ='/AddEddit' > 
  <Button  onClick={()=> dispatch(toggeleFalse)}> contact Add</Button>
  </Link>
  </div>
  
  );
}

export default Homee;
