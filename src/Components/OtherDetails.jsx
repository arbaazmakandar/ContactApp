import { Typography } from "@mui/material";
import React from "react";
import {useSelector} from  "react-redux";
import {Box} from "@mui/material";

const OtherDetails = () =>{
    const contacts = useSelector((state)=>state.contacts.contacts);

    return(
        <Box>
            <Typography variant="p" component="p">
                Other Details
            </Typography>
            {contacts.map((contact)=>{
                return <p key={contact.id}>{contact.name}</p>
            })}
        </Box>
    )
}

export default OtherDetails