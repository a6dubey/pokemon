function About() {
    return (
        <main>
            <section id="profile">
                <img src="https://avatars.githubusercontent.com/u/80654651?v=4" alt="Facundo Ayosa, he seems handsome" />
                <h1><a href="https://github.com/Facundo-Ayosa" target="_blank" rel="noreferrer">Facundo Ayosa</a></h1>
                <p>Self-Taught Front End Web Developer</p>
            </section>
            <section id="description">
                <div id="text">
                    <p>This project was made as a self imposed challenge to use React.js with an api. When I started this project, I had no knowledge on how api calls worked, and my knowledge of React was kind of outdated in the sense that I only knew how to use soon-to-be deprecated React Methods like class components or componentWillMount/ComponentWillUpdate. So, I took it upon myself to relearn React from scratch using the React Document, stackoverflow and trial and error.</p>
                    <br />
                    <p>The major issues I came across was understanding Async functions and Promise Objects, as it was my first time ever working with it.</p>
                </div>
                <div id="list">
                    <h3>Libraries used:</h3>
                    <a href="https://github.com/facebook/create-react-app">React</a>
                    <a href="https://github.com/remix-run/react-router">React Router</a>
                    <a href="https://github.com/PokeAPI/pokedex-promise-v2">Pokedex Promise V2</a>
                </div>
            </section>
        </main>
    );
}

export default About;
