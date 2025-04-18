import * as React from 'react';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { NavLink, Outlet } from 'react-router';

import './App.css';
import Navigation from './components/Navigation'

function App() {
    return (
        <>
            <CssBaseline />
            <Stack>
            <Navigation />
            <Container maxWidth={false}>
                <Box sx={{
                    paddingTop: '1em'
                }}>
                    <Outlet />
                </Box>
            </Container>

            </Stack>
        </>
    )
}

export default App
