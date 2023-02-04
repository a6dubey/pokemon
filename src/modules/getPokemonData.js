// Get (number) amount of pokemons and format them to an array of objects.
async function getPokemonData(ids) {
    try {
        const promises = ids.map(id => fetch(`https://pokeapi.co/api/v2/pokemon/${id}`));
        const responses = await Promise.all(promises);
        const data = await Promise.all(responses.map(res => res.json()));
        return data;
    } catch (error) {
        console.error(`Error fetching Pokémon data: ${error}`);
    }
}

export default getPokemonData;