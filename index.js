const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors()); // Configurar CORS

const data = [
    { id: 1, nombre: 'Alex', edad: 20, sexo: "Masculino" },
    { id: 2, nombre: 'Luis', edad: 15, sexo: "Masculino" },
    { id: 3, nombre: 'Carlos', edad: 18, sexo: "Masculino" },
    { id: 4, nombre: 'Ana', edad: 19, sexo: "Femenino" },
    { id: 5, nombre: 'Joyce', edad: 21, sexo: "Femenino" },
    { id: 6, nombre: 'Montse', edad: 23, sexo: "Femenino" },
    // Agrega más datos si es necesario
  ];

app.get('/', (req, res) => {
  res.send('API funcionando correctamente!');
  res.json(data);
})

  app.get('/api/datos', (req, res) => {
    res.json(data);
  });

app.use((req, res) => {
    res.status(404).send('No se encontro tu pagina, que tiste')
})

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});








