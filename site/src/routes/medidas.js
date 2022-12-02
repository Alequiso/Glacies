var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idFreezer", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idFreezer", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})
router.get("/historico/:idFreezer", function (req, res) {
    medidaController.obterdadosHistorico(req, res);
})

router.post("/salvarNoHistorico/:temperatura/:idFreezer/:tipoAlerta", function (req, res) {
    medidaController.salvarNoHistorico(req, res);
});

module.exports = router;