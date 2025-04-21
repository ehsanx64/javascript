import * as React from 'react';
import { Outlet } from 'react-router';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import Navigation from './components/Navigation'
import './App.css';

const darkTheme = createTheme({
    colorSchemes: {
        dark: true,
    },
});

function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Stack>
                <Navigation />
                <Container maxWidth={false}>
                    <Box sx={{ paddingTop: '1em' }}>
                        <Outlet />
                    </Box>
                </Container>
            </Stack>
        </ThemeProvider>
    )
}

export default App
