import { Link } from 'react-router-dom';

const Game = ({ id, bannerImg, mainImg, gameName, setIdGame }) => {
    return (
        <div className="game">
            <div className="game-name d-flex-center">
                <h2>{gameName}</h2>
            </div>
            <img className="game-bannerImg" src={bannerImg} alt={gameName} />
            <img className="game-mainImg" src={mainImg} alt={gameName} />
            {/* <Link to={`/gameSelected/${id}`}>
                <button className="gray-button">Comprar</button>
            </Link> */}
                <button onClick={()=>{
                window.scrollTo({
                    top: 750,
                    behavior: "smooth",
                    });
                    setIdGame(id);
                }} className="gray-button">Comprar</button>
        </div>
    );
};

export default Game;
