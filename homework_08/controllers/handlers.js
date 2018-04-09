const fs = require(`fs`);
let rockstars;
fs.readFile(`./data/storage.json`, (error, data) => {
  if (error) {
    throw error;
  } else {
    rockstars = JSON.parse(data);
  }
});

exports.getMusicians = (req, res) => {
  res.status(200).send(rockstars);
};

exports.getMusicianById = (req, res) => {
  const rockstar = rockstars.find(
    rockstar => rockstar.id === Number(req.params.id)
  );
  if (rockstar) {
    res.status(200).send(rockstar);
  } else {
    res
      .status(404)
      .send({ message: `Musician with the given ID was not found` });
  }
};

exports.addNewMusician = (req, res) => {
  const rockstar = {
    id: rockstars.length + 1,
    name: req.body.name,
    band: req.body.band,
    instrument: req.body.instrument
  };
  const rockstarExist = rockstars.find(star => star.name === rockstar.name);
  if (rockstarExist) {
    res.status(409).send({ message: "Musician already exist." });
  } else if (!req.body.name || !req.body.band || !req.body.instrument) {
    res.status(400).send({ message: "Please add a musician" });
  } else {
    rockstars.push(rockstar);
    res.sendStatus(201);
  }
};

exports.updateMusician = (req, res) => {
  let rockstar = rockstars.find(
    rockstar => rockstar.id === Number(req.params.id)
  );
  if (!rockstar) {
    res.sendStatus(404);
  } else {
    rockstar.name = req.body.name;
    rockstar.band = req.body.band;
    rockstar.instrument = req.body.instrument;
    res.status(200).send(rockstar);
  }
};

exports.deleteMusician = (req, res) => {
  const rockstar = rockstars.find(
    rockstar => rockstar.id === Number(req.params.id)
  );
  if (!rockstar) {
    res.sendStatus(404);
  } else {
    const index = rockstars.indexOf(rockstar);
    rockstars.splice(index, 1);
    res
      .status(200)
      .send({ message: "Musician has been successfully removed." });
  }
};
