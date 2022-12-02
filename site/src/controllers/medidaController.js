var medidaModel = require("../models/medidaModel");

function buscarUltimasMedidas(req, res) {

    const limite_linhas = 7;

    var idFreezer = req.params.idFreezer;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidas(idFreezer, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarMedidasEmTempoReal(req, res) {
    var idFreezer = req.params.idFreezer;
    console.log(`Recuperando medidas em tempo real`);
    medidaModel.buscarMedidasEmTempoReal(idFreezer).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
function obterdadosHistorico(req, res) {
    var idFreezer = req.params.idFreezer;
    console.log(`Recuperando medidas em tempo real`);
    medidaModel.obterdadosHistorico(idFreezer).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function salvarNoHistorico(req, res) {
    var temperatura = req.params.temperatura;
    var idFreezer = req.params.idFreezer;
    var tipoAlerta = req.params.tipoAlerta;
    
    if (temperatura == undefined) {
        res.status(400).send('Temperatura está indefinida!')
    } else if (idFreezer == undefined) {
        res.status(400).send('Freezer está indefinida!')
    }else if (tipoAlerta == undefined) {
        res.status(400).send('Freezer está indefinida!')
    }else {
        medidaModel.salvarNoHistorico(idFreezer, tipoAlerta, temperatura)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao disparar o alerta! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    salvarNoHistorico,
    obterdadosHistorico

}