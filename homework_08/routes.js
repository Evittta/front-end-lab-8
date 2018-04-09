const express = require(`express`);
const musiciansControllers = require(`./controllers/handlers`);
const router = express.Router();

router.get(`/rockstars`, musiciansControllers.getMusicians);
router.get(`/rockstar/:id`, musiciansControllers.getMusicianById);
router.post(`/rockstar`, musiciansControllers.addNewMusician);
router.put(`/rockstar/:id`, musiciansControllers.updateMusician);
router.delete(`/rockstar/:id`, musiciansControllers.deleteMusician);

module.exports = router;
