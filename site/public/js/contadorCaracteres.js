
    function contadorCaracteres(valor) {
        limite = 250;
        total = valor.length;
        if (total <= limite) {
            resto = limite - total;
            document.getElementById('contador250').innerHTML = resto;
        } else {
            document.getElementById('textarea_descricao').value = valor.substr(0, limite);
        }
    }
