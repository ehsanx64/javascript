import { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router'
import './App.css'


function App() {
    return (
        <>
            <nav className="navbar">
                <ul>
                    <li>
                        <NavLink to="/" end>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" end>About</NavLink>
                    </li>
                </ul>
            </nav>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default App
