import React, { useEffect, useState } from 'react';
import {Form ,Button  } from 'react-bootstrap'
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addContact, editContact } from '../redux/action/contactActions';
function AddEddit() {
  const [FormData,setFormData]= useState({name:"",age:0, email:""  })
  const edit=useSelector(state=>state.contactReducer.edit)
  const contact=useSelector(state=>state.contactReducer.contact)
  const navigate= useNavigate()
  const dispatch =useDispatch()
  const handleChange=(e)=>{
    setFormData({...FormData,[e.target.name]:e.target.value})
  };
  const handleAdd=(e)=>{
    e.preventDefault()
    dispatch(addContact(FormData))
    navigate("/contacts")
  }

  const handleEdit=(e)=>{
    e.preventDefault()
    dispatch(editContact(contact._id,FormData))
    navigate("/contacts")
  }
  useEffect(()=>{
edit? setFormData({name:contact.name,email:contact.email,age:contact.age}):setFormData({name:"",age:0, email:""  })
  },[contact])
  return(
   <div>
 {
  
      <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com"   name="email" 
         value ={FormData.email}  onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="enter you name" name ="name" 
             value ={FormData.name}      onChange={handleChange}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Age</Form.Label>
        <Form.Control type="number" placeholder="enter your age"  name="age"
          value ={FormData.age}       onChange={handleChange}  />
      </Form.Group>
      <Form.Group >

        {
          edit? <Button onClick={handleEdit} >edit</Button>:<Button onClick={handleAdd}>Add</Button>
        }


            
    </Form.Group>
    </Form>
   }





   </div>
   );
}

export default AddEddit;
