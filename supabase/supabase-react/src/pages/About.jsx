import { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import Heading from '../components/Heading.jsx';

function About() {
    return (
        <>
            <Heading title="About" />  
            <Button variant="contained">Hello world</Button>
        </>
    )
}

export default About
