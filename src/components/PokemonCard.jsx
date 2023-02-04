import React, { useState } from 'react';
import * as poketypes from '../svg/index'

function PokemonCard({ data }) {
    const [SelectedButton, setSelectedButton] = useState("About")
    /* Shiny chance (1 in 8192) */
    let isShiny = Math.floor(Math.random() * 8192) === 1 ? true : false;
    let sprite = isShiny ? data.sprites.front_shiny : data.sprites.front_default;
    /* Parser for stats, types and moves */
    const pokestats = data.stats.reduce((acc, obj) => {
        acc[obj.stat.name] = obj.base_stat;
        return acc;
    }, {});
    const types = data.types.map((e) => {
        return e.type.name
    });
    const moves = data.moves.reduce((acc, obj) => {
        acc.push(obj.move.name.replace("-", " "));
        return acc
    }, [])

    /* [About - Stats - Moves] button handler */
    const handleButtonClick = (buttonid) => {
        setSelectedButton(buttonid);
    };

    /* Random ability chooser for each card */
    const moveChooser = () => {
        let jsxarr = []
        for (let i = 1; i <= 4; i++) {
            jsxarr.push(<div key={i} className={`move-${i}`}>{moves[Math.floor(Math.random() * moves.length)]}</div>);
        }
        return jsxarr
    }
    return <div id="card">
        <div className={`${data.types[0].type.name} pokemon`}>
            <img src={sprite} alt={`${data.name} Sprite`} />
            <div className="pokedata">
                <img src="https://www.svgrepo.com/show/381093/ball-game-poke-sport-sports.svg" alt="Pokeball icon" />
                <span>{data.name}</span>
                <span>{`#${('000' + data.id).slice(-3)}`}</span>
            </div>
        </div>
        <div className="options">
            <button
                className={SelectedButton === "About" ? `${types[0]}` : undefined}
                onClick={() => { handleButtonClick("About") }}>
                About
            </button>
            <button
                className={SelectedButton === "Stats" ? `${types[0]}` : undefined}
                onClick={() => { handleButtonClick("Stats") }}>
                Stats
            </button>
            <button
                className={SelectedButton === "Moves" ? `${types[0]}` : undefined}
                onClick={() => { handleButtonClick("Moves") }}>
                Abilities
            </button>
        </div>
        <div id='CardSections'>
            <div className={SelectedButton === "About" ? "about" : "hidden"}>
                <span className="height">Height:</span>
                <span className="height-data">{data.height}</span>
                <span className="weight">Weight:</span>
                <span className="weight-data">{data.weight}</span>
                <div className='types'>Types:</div>
                {
                    types.map((type, index) => {
                        return <div className={`type-${index}`} key={index}><img className={type} src={poketypes[type]} alt={`${type} icon`} /></div>
                    })
                }

            </div>
            <div className={SelectedButton === "Stats" ? "stats" : "hidden"}>
                <div>
                    <span>HP</span>
                    <div className="__bar hp" style={{ width: Math.round((pokestats.hp / 255) * 100) }}></div>
                    <span className="data">{pokestats['hp'].toString()}</span>
                </div>
                <div>
                    <span>ATK</span>
                    <div className="__bar atk" style={{ width: Math.round((pokestats.attack / 255) * 100) }}></div>
                    <span className="data">{pokestats['attack'].toString()}</span>
                </div>
                <div>
                    <span>DEF</span>
                    <div className="__bar def" style={{ width: Math.round((pokestats.defense / 255) * 100) }}></div>
                    <span className="data">{pokestats['defense'].toString()}</span>
                </div>
                <div>
                    <span>SATK</span>
                    <div className="__bar satk" style={{ width: Math.round((pokestats['special-attack'] / 255) * 100) }}></div>
                    <span className="data">{pokestats['special-attack'].toString()}</span>
                </div>
                <div>
                    <span>SDEF</span>
                    <div className="__bar sdef" style={{ width: Math.round((pokestats['special-defense'] / 255) * 100) }}></div>
                    <span className="data">{pokestats['special-defense'].toString()}</span>
                </div>
                <div>
                    <span>SPD</span>
                    <div className="__bar spd" style={{ width: Math.round((pokestats.speed / 255) * 100) }}></div>
                    <span className="data">{pokestats['speed'].toString()}</span>
                </div>
            </div>
            <div className={SelectedButton === "Moves" ? "moves" : "hidden"}>
                {moveChooser()}
            </div>
        </div>
    </div>

}


export default PokemonCard