import data from '../../exoplanets_data_updated.json';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const CardPlanets = () => {
  return (
    <>
      {Object.entries(data).map(([category, { definicion, planets }]) => (
        <div className='category' key={category}>
          <h2>{category}</h2>
          <p>{definicion}</p>
          <div className='planetCards'>
            {planets.map((planet) => (
              <ImgMediaCard
                key={planet.nombre} // Usar "nombre" como clave única
                name={planet.nombre}
                img={planet.imagen}
                distanciaSol={planet.distancia_al_sol}
                edad={planet.edad}
              />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};


function ImgMediaCard({ name, img, distanciaSol, edad }) { 
  return (
    <div className="planet">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt={name}
          height="140"
          image={img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name} {/* Eliminé las comillas y llaves innecesarias */}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Distancia del Sol: {distanciaSol} años luz <br />
            Edad: {edad} millones de años
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default CardPlanets;
