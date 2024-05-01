import React from "react";
import {AppBar,Toolbar, Typography} from '@mui/material';

const Header = (props) =>{
    const {name} = props;
    return(
        <AppBar position="static" sx={{ backgroundColor: "#153448", margin: "5px", width: "99%"  }}>
            <Toolbar variant="dense">
                <Typography variant="h6" color="inherit" component="div">
                {name}
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header