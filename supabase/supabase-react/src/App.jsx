import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const supabase = createClient(
    "https://gkcrlyitpckczsexwfgs.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdrY3JseWl0cGNrY3pzZXh3ZmdzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4NzU3MDYsImV4cCI6MjA2MDQ1MTcwNn0.1Tati0Uzs3EGLyZmdGpvf46wGobBqccBQ2qiX0BBDTE"
)

function App() {
    const [count, setCount] = useState(0);
    const [persons, setPersons] = useState([]);

    useEffect(() => {
        if (persons.length < 1) {
            getPersons();
        }
    })

    async function getPersons() {
        const { data } = await supabase.from("person").select();
        setPersons(data);
    }

    function renderPersons() {
        if (persons.length < 1) {
            return <div>Loading ...</div>;
        }

        let out = persons.map((person) => (
            <li key={person.name}>{person.name}</li>
        ))

        return <ul>{out}</ul>;
    }

    return (
        <>
            {renderPersons()}
        </>
    )
}

export default App
