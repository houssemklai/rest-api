import axios from 'axios'
import { GET_ALL_CONTACTS, TOGGELE_FALSE, TOGGELE_TRUE ,GET_CONTACT} from '../type';

export const getAllContacts=()=>async(dispatch)=>{
try {
    const res = await axios.get ('/api/contacts')
    dispatch({ type : GET_ALL_CONTACTS, payload: res.data});
} catch (error) {
    console.log(error)
}
}
export const addContact=(FormData)=>async(dispatch)=>{
    try {
        await axios.post('/api/contacts',FormData)
        dispatch(getAllContacts());
    } catch (error) {
        console.log(error)
    }
}

export const deleteContact=(id)=>async(dispatch)=>{
    try {
        await axios.delete(`/api/contacts/${id}`)
        dispatch(getAllContacts());
    } catch (error) {
        console.log(error)
    }
}


export const editContact=(id,FormData)=>async(dispatch)=>{
    try {
        await axios.put(`/api/contacts/${id}`,FormData)
        dispatch(getAllContacts());
    } catch (error) {
        console.log(error)
    }
};

export const toggeleTrue=()=>{
return {

    type: TOGGELE_TRUE
}
}


export const toggeleFalse=()=>{
    return {
        type: TOGGELE_FALSE
    }
};


export const getOneContact=(id)=>async(dispatch)=>{
    try {
       const res = await axios.get(`/api/contacts/${id}`)
        dispatch({type:GET_CONTACT , payload:res.data})
    } catch (error) {
        console.log(error)
    }
};











