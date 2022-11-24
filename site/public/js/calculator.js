function calcular() {
    //Pegando valores
    var producao = Number(input_producao.value);
    var desperdicio = Number(input_desperdicio.value);
    var valor_venda = Number(input_valor_venda.value);
    var horas_trabalhadas = Number(input_horas_trabalhadas.value);

    //Calculo da receita sem disperdício
    var receita_sem_desperdicio = producao * valor_venda;
    //Calculo do total do desperdicio
    var total_despercidio = producao-desperdicio;
    //Calculo da receita com desperdicio
    var receita_com_desperdicio = receita_sem_desperdicio-desperdicio*valor_venda;
    //Calculo do que deixa de ganhar por mês
    var deixa_ganhar_mes = receita_sem_desperdicio-total_despercidio*valor_venda; 
    //Calculo do que deixa de ganhar por ano
    var deixa_ganhar_ano  = deixa_ganhar_mes*12;

    //Calculo
    var horas_trabalhadas_mes = horas_trabalhadas * 30;

    var porcentagem_horas_trabalhadas_mes = (horas_trabalhadas_mes / 720) * 100

    spanDesperdicio.innerHTML = `${receita_com_desperdicio.toLocaleString("pt-BR", { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })}`
    spanSolucao.innerHTML = `${receita_sem_desperdicio.toLocaleString("pt-BR", { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })}`
    spanReceitaPerdida.innerHTML = `${deixa_ganhar_ano.toLocaleString("pt-BR", { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })}`;
    spanMonitoramento.innerHTML = porcentagem_horas_trabalhadas_mes.toFixed(0) +'%';
}

function exibir() {
    simulator_image.style.display = "none"
    result_calculator.style.display = "inherit"
}