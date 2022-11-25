var database = require("../database/config");

function listar() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT 
            a.id AS idAviso,
            a.titulo,
            a.descricao,
            a.fkUsuario,
            u.idUsuario AS idUsuario,
            u.nomeUsuario,
            u.email,
            u.senha
        FROM aviso a
            INNER JOIN usuario u
                ON a.fkUsuario = u.idUsuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

//SELECT 
//	a.idAviso AS idAviso,
//	a.titulo,
//	a.descricao,
//	a.fkUsuario,
//	u.idUsuario AS idUsuario,
//	u.nomeUsuario,
//	u.email,
//	u.senha
//FROM aviso a
//	INNER JOIN usuario u
//		ON a.fkUsuario = u.idUsuario

function pesquisarDescricao(texto) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pesquisarDescricao()");
    var instrucao = `
        SELECT 
            a.id AS idAviso,
            a.titulo,
            a.descricao,
            a.fkUsuario,
            u.idUsuario AS idUsuario,
            u.nomeUsuario,
            u.email,
            u.senha
        FROM aviso a
            INNER JOIN usuario u
                ON a.fkUsuario = u.id
        WHERE a.descricao LIKE '${texto}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarPorUsuario(idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPorUsuario()");
    var instrucao = `
        SELECT 
            a.id AS idAviso,
            a.titulo,
            a.descricao,
            a.fkUsuario,
            u.idUsuario AS idUsuario,
            u.nomeUsuario,
            u.email,
            u.senha
        FROM aviso a
            INNER JOIN usuario u
                ON a.fkUsuario = u.idUsuario
        WHERE u.idUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

//SELECT 
  //          a.idAviso AS idAviso,
    //        a.titulo,
      //      a.descricao,
        //    a.fkUsuario,
          //  u.idUsuario AS idUsuario,
            //u.nomeUsuario,
            //u.email,
            //u.senha
        //FROM aviso a
          //  INNER JOIN usuario u
            //    ON a.fkUsuario = u.idUsuario
        //WHERE u.idUsuario = ${idUsuario}


function publicar(titulo, descricao, idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", titulo, descricao, idUsuario);
    var instrucao = `
        INSERT INTO aviso (titulo, descricao, fkUsuario) VALUES ('${titulo}', '${descricao}', ${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

//INSERT INTO Aviso (titulo, descricao, fkUsuario) VALUES ('${titulo}', '${descricao}', ${idUsuario})

function editar(novaDescricao, idAviso) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", novaDescricao, idAviso);
    var instrucao = `
        UPDATE aviso SET descricao = '${novaDescricao}' WHERE id = ${idAviso};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

//UPDATE Aviso SET descricao = '${novaDescricao}' WHERE idAviso = ${idAviso}

function deletar(idAviso) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", idAviso);
    var instrucao = `
        DELETE FROM aviso WHERE id = ${idAviso};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

//DELETE FROM Aviso WHERE idAviso = ${idAviso}
module.exports = {
    listar,
    listarPorUsuario,
    pesquisarDescricao,
    publicar,
    editar,
    deletar
}
