import React, { useState } from 'react';
import * as poketypes from '../svg/index'
import MissingNoIMG from '../svg/missingno.webp';

function MissingNo() {
    const [SelectedButton, setSelectedButton] = useState("About")
    let sprite = MissingNoIMG;
    let data = {
        'id': "???",
        'name': "MissingNo.",
        'height': "???",
        'weight': "???",

    }
    /* Parser for stats, types and moves */
    const pokestats = {
        hp: Math.round(Math.random() * 255),
        attack: Math.round(Math.random() * 255),
        defense: Math.round(Math.random() * 255),
        'special-attack': Math.round(Math.random() * 255),
        'special-defense': Math.round(Math.random() * 255),
        speed: Math.round(Math.random() * 255)
    };
    const types = ["bird", "normal"];
    const moves = ["HM04", "HM05", "TM08", "Super Glitch"];

    /* [About - Stats - Moves] button handler */
    const handleButtonClick = (buttonid) => {
        setSelectedButton(buttonid);
    };

    /* Random ability chooser for each card */
    const moveChooser = () => {
        let jsxarr = []
        for (let i = 1; i <= 4; i++) {
            jsxarr.push(<div key={i} className={`move-${i}`}>{moves[i - 1]}</div>);
        }
        return jsxarr
    }
    return <div id="card" className='glitchCard'>
        <div className={`${types[0]} pokemon`}>
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
                        if (type == "bird") type = "flying";
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


export default MissingNo