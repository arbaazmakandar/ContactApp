import React, { useState } from "react";
import { Box,List, ListItem, Avatar, ListItemText, Typography, Divider, ListItemAvatar } from "@mui/material";

const ContactList = 
// React.memo(
    (props) =>{
    const {contactList, handleSelectContact, contactIndex} = props;
   

    return( 
    <Box width={'30%'}>
        <List sx={{ width: '100%', maxWidth: 300, bgcolor: 'background.paper' }}>
        { contactList.map((contact,index)=>{
            return (
                <React.Fragment key={contact.id}>
                    <ListItem alignItems="flex-start" onClick={()=>handleSelectContact(index)} sx = {{backgroundColor: (index===contactIndex ? '#e0e0e0':'FFFFFF')}}>
                        <ListItemAvatar>
                            <Avatar alt={`${contact.name}`} src="/static/images/avatar/1.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary={`${contact.name}`}
                            secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    {contact.email}
                                </Typography>
                            </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                </React.Fragment>
                )})}
            </List>
        </Box> 
    )
}
// )

export default ContactList