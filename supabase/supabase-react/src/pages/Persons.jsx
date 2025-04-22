import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { GetSamplePersons, IsDevMode } from '../libs/tools.js';
import Heading from '../components/Heading.jsx';

const supabase = createClient(
    import.meta.env.VITE_SUPABASE_PROJECT_URL,
    import.meta.env.VITE_SUPABASE_ANON_KEY
);

function Persons() {
    const [persons, setPersons] = useState([]);

    useEffect(() => {
        if (persons.length < 1) {
            getPersons();
        }
    })

    async function getPersons() {
        if (IsDevMode()) {
            setTimeout(() => {
                setPersons(GetSamplePersons())
            }, 800);
        } else {
            const { data } = await supabase.from("person").select();
            if (data !== null) {
                setPersons(data);
            }
        }
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
            <Heading title="Persons" />  
            {renderPersons()}
        </>
    )
}

export default Persons
