const express = require(`express`);
const bodyParser = require(`body-parser`);
const musiciansControllers = require(`./controllers/handlers`);
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get(`/rockstars`, musiciansControllers.getMusicians);
app.get(`/rockstar/:id`, musiciansControllers.getMusicianById);
app.post(`/rockstar`, musiciansControllers.addNewMusician);
app.put(`/rockstar/:id`, musiciansControllers.updateMusician);
app.delete(`/rockstar/:id`, musiciansControllers.deleteMusician);

process.stdout.write(`What are you waiting for? \n`);
app.listen(port, () => console.log(`Listening on port ${port}...`));
