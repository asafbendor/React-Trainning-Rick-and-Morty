import "./Home.css";

function Home(): JSX.Element {
    return (
        <div className="Home centerColumn">
    <h2>Welcome! I'm is so glad you've decided to join!</h2>
        <iframe 
        src="https://giphy.com/embed/cOKjNdJDbqNCm4n0Jm" 
        width="480" 
        height="480" 
        frameBorder="3" 
        className="giphy-embed" 
        allowFullScreen
    title="Rick and Morty GIF">
        </iframe>
    </div>
    
    );
}

export default Home;
