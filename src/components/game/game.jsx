import '../css/game.scss'
import '../css/cards.scss'
import CardPlanets from './showPlanets/showCard'; // Asegúrate de que ImgMediaCard esté en la ruta correcta
import Planets from './planets';

export default Game;

function Game() {
  return (
    <div>
      <div className='bg-intro'>
        <div className='text'>
          <h1 className='titulo'>Descubre los Exoplanetas <h3 className='subtitulo'>Rumbo a lo Desconocido</h3></h1>

          <p className='introTxt'>
            ¿Te has imaginado alguna vez cómo sería vivir en un planeta diferente? 
            Más allá de nuestro hogar, la Tierra, se extiende un vasto universo repleto de exoplanetas,
            mundos fascinantes que orbitan estrellas distantes. 
            Estos planetas presentan una increíble variedad de condiciones: 
            desde aquellos que arden a temperaturas extremas, hasta otros que podrían albergar agua 
            y, potencialmente, vida.
          </p>
        </div>
        <div className='cards'>
          <CardPlanets></CardPlanets>
        </div>
      </div>
      <Planets></Planets>
    </div>
  );
}

