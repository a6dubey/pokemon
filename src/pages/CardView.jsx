import React, { useState, useEffect } from 'react';
import PokemonCard from '../components/PokemonCard';
import MissingNo from '../components/MissingNo';
import getPokemonData from '../modules/getPokemonData';
import useObserver from '../modules/useObserver';

function CardView() {
    const [pokemonData, setPokemonData] = useState([]);
    const [numberOfCards, setNumberOfCards] = useState(20);
    const [observer, setElements, entries] = useObserver({
        threshold: 0.25,
        root: null
    });

    /* Fetcher hook */
    const addPokeCards = (amount) => {
        let ids = []
        for (let i = pokemonData.length + 1; i <= numberOfCards; i++) {
            if (i != 0) {
                ids.push(i);
            }
        }
        getPokemonData(ids)
            .then(data => {
                setPokemonData([...pokemonData, ...data]);
            })
            .catch(error => {
                console.error(error);
            });
    }
    /* Set ups the intersection Observer API */
    useEffect(() => {
        const secret = document.querySelectorAll('.glitchCard');
        setElements(secret);
    }, [setElements])
    /* Checks if the last card is on viewport and adds 20 pokemons to the amount rendered */
    useEffect(() => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setNumberOfCards(numberOfCards + 20)
            }
        })

    }, [observer, entries])
    useEffect(() => {
        addPokeCards(numberOfCards)
    }, [numberOfCards]);

    return (
        <main id="cardView">
            {pokemonData ? pokemonData.map((pokemon, index) => (
                <PokemonCard key={index} data={pokemon} />
            )) : false}
            <MissingNo />
        </main>
    );
};

export default CardView;