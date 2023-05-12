import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from "@mui/material/Drawer";
import {useState} from "react";
import Chat from "../Chat/chat";
import { FaSteamSquare } from 'react-icons/fa';
import '../Chat/chat.css'

export default function ButtonAppBar() {
    const [open, setOpen] = useState(false);
    return (
        <Box sx={{ flexGrow: 1, marginBottom: '150px'}} component={'div'}>
             <AppBar position="static" sx={{backgroundColor: '#333'}}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon onClick={() => setOpen(true)}/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Roulette Rust
                    </Typography>
                    <Button color="inherit" sx={{backgroundColor: 'red'}} >
                        <Typography variant="h9" sx={{marginRight: '10px'}}>
                            Steam
                        </Typography>
                        <FaSteamSquare/>
                    </Button>
                </Toolbar>
             </AppBar>
            <Drawer open={open} anchor={"left"} onClose={() => setOpen(false)}>
                <h1 className={'chat'}>Chat</h1>
                <Chat/>
            </Drawer>
         </Box>
    );
}