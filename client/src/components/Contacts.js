import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  getAllContacts } from '../redux/action/contactActions';
import ContactCard from './UserCard';

function Contacts() {
const contacts= useSelector(state=>state.contactReducer.contacts)

  const dispatch = useDispatch()

  useEffect(()=>{
dispatch(getAllContacts())
  },[])
  return (
  <div>
{
  contacts.map(contact=><ContactCard contact={contact}  key={contact._id} />)
}
  </div>
  );
}

export default Contacts;
