import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import Drawer from "@mui/material/Drawer";
import {useState} from "react";
import Chat from "../Chat/chat";
import { FaSteamSquare } from 'react-icons/fa';
import '../Chat/chat.css'
import logo from "../../images/logo.svg"
import vector from "../../images/Vector.svg"
import styled from "@emotion/styled";

const StyledDrawer= styled(Drawer)(() => ({
".MuiPaper-root":{
    backgroundColor:'#252631'
}

}))



export default function ButtonAppBar() {
    const [open, setOpen] = useState(false);
    return (
        <Box sx={{ flexGrow: 1, marginBottom: '150px'}} component={'div'}>
             <AppBar position="static" sx={{backgroundColor: '#272A35'}}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <ChatBubbleIcon onClick={() => setOpen(true)}/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <img src={logo} className={'logo'}/>

                        <Typography>
                            <div className={'divVector'}>
                                <img src={vector} className={'vector'}/>
                                Roulette
                            </div>
                        </Typography>
                    </Typography>
                    <Button color="inherit" sx={{backgroundColor: 'red'}} >
                        <Typography variant="h9" sx={{marginRight: '10px'}}>
                            Steam
                        </Typography>
                        <FaSteamSquare/>
                    </Button>
                </Toolbar>
             </AppBar>
            <StyledDrawer open={open} anchor={"left"} onClose={() => setOpen(false)}>
                <h1 className={'chat'}>Chat</h1>
                <Chat/>
            </StyledDrawer>
         </Box>
    );
}