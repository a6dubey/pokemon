import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <header>
            <Link to="/pokemon"><img src="https://www.svgrepo.com/show/306584/pokemon.svg" alt="Pokémon" /></Link>
            <ul>
                <li>
                    <Link to="/pokemon/">Pokédex</Link>
                </li>
            </ul>
        </header>
    )
}

export default Navbar

/*
<div className="dropdown">
                        <Link to="/pokemon">Pokémon</Link>
                        <div className="dropdown-content">
                            <Link to="/pokemon/card-view">Card View</Link>
                            <Link to="/pokemon/table-view">Table View</Link>
                        </div>
                    </div>
                     */