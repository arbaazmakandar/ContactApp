import React, { useEffect, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import Header from "./Header";
import ContactList from "./ContactList";
import ContactDetails from "./ContactDetails";
import axios from 'axios';
import {HEADER_NAME} from './Constants'
import { Box } from "@mui/material";
import { CircularProgress } from '@mui/material';
import { saveContacts } from "../store/action";



const ContactApp = () =>{
    const [contacts, setContacts] = useState([])
    const [contactIndex, setContactIndex] = useState(0);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const handleIndex = 
    // useCallback(
        (contactIdx) =>{
        setContactIndex(contactIdx);
        }
    // ,[])

    const fetchContacts = async () =>{
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            const data = response.data;
            setContacts(data);
            dispatch(saveContacts(data))
            setTimeout(()=>{
                dispatch(saveContacts(data))

            },2000)
        } catch (error) {
            console.log(error.response);
        }
    }

    useEffect(()=>{
        setLoading(true);
        fetchContacts();
        setLoading(false)
    },[])

    return(
        <div>
            <Header name={HEADER_NAME}/>
            {loading ? <CircularProgress/> : 
            <Box display={'flex'}>
                <ContactList contactList={contacts} handleSelectContact = {handleIndex} contactIndex = {contactIndex}/>
                <ContactDetails details = {contacts?.[contactIndex] ? contacts?.[contactIndex] : {}}/>
            </Box>
            }
        </div>
    )
}

export default ContactApp