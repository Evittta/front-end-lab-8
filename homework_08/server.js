const express = require(`express`);
const bodyParser = require(`body-parser`);
const musicians = require(`./routes`);
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(`/`, musicians);

process.stdout.write(`What are you waiting for? \n`);
app.listen(port, () => console.log(`Listening on port ${port}...`));
