var database = require("../database/config");

function buscarUltimasMedidas(idFreezer, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top ${limite_linhas}
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,  
                        momento,
                        FORMAT(momento, 'HH:mm:ss') as momento_grafico
                    from medida
                    where fk_aquario = ${idFreezer}
                    order by id desc`;
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
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,  
                        CONVERT(varchar, momento, 108) as momento_grafico, 
                        fk_aquario 
                        from medida where fk_aquario = ${idFreezer} 
                    order by id desc`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select temperatura, DATE_FORMAT(dataHora,'%d/%m/%Y %H:%i:%s') as momento_grafico, fkSensor
                        from dadoSensor where fkSensor = ${idFreezer}
                    order by idDadoSensor desc limit 1;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function obterdadosHistorico(idFreezer) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 1
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,  
                        CONVERT(varchar, momento, 108) as momento_grafico, 
                        fk_aquario 
                        from medida where fk_aquario = ${idFreezer} 
                    order by id desc`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = ` select DATE_FORMAT(dtAlerta,'%d/%m/%Y %H:%i:%s') as momento_grafico, temperatura from alertaSensor where fkSensor = ${idFreezer} order by momento_grafico desc limit 8;
        `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function salvarNoHistorico(idFreezer, tipoAlerta, temperatura) {
    console.log("alerta funcionou!");
    
    var instrucao = `
        INSERT INTO alertaSensor (fkSensor, fkAlerta, temperatura) VALUES (${idFreezer}, ${tipoAlerta}, ${temperatura});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    salvarNoHistorico,
    obterdadosHistorico
}
