var database = require("../database/config");

function buscarUltimasMedidas(idFreezer, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top ${limite_linhas}
         temperatura,   
         dataHora,
                        FORMAT(dataHora, 'HH:mm:ss') as momento_grafico
                    from dadoSensor
                    where fkSensor = ${idFreezer}
                    order by idDadoSensor desc`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select temperatura, DATE_FORMAT(dataHora,'%H:%i:%s') as momento_grafico
        from dadoSensor where fkSensor = ${idFreezer} order by idDadoSensor desc limit ${limite_linhas}`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idFreezer) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 1
                        temperatura,   
                        CONVERT(varchar, dataHora, 108) as momento_grafico, 
                        fkSensor 
                        from dadoSensor where fkSensor = ${idFreezer} 
                    order by idDadoSensor desc`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select temperatura, DATE_FORMAT(dataHora,'%H:%i:%s') as momento_grafico, fkSensor from dadoSensor where fkSensor = ${idFreezer} order by idDadoSensor desc limit 1;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
