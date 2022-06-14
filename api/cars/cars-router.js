const server = require("express");
const router = server.Router();

const {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
} = require("./cars-middleware");

const Cars = require("./cars-model");

router.get("/", (req, res) => {
  Cars.getAll().then((cars) => {
    res.json(cars);
  });
});

router.get("/:id", checkCarId, (req, res) => {
  res.json(req.car);
});

router.post(
  "/",
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
  async (req, res) => {
    const newCar = await Cars.create(req.body)
    res.status(201).json(newCar)
  }
);

module.exports = router;
