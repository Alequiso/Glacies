function mostrar_requisitos() {
    requisitos.style.display = 'flex'
    requisitos.style.flexDirection = 'column'

}

function requisitos_senha() {
    var senha = input_senha.value;
    const regex_upper = /[A-Z\d&Ñ]/;
    const regex_special = /[!@#$%^&*()_+]/;

    if (!(senha.length >= 8 && regex_upper.test(senha) && regex_special.test(senha))) {
        botao_cadastrar.style.backgroundColor = 'gray'
        botao_cadastrar.style.cursor = 'unset'
    } else {
        botao_cadastrar.style.backgroundColor = 'var(--blue-baby)'
        botao_cadastrar.style.cursor = 'pointer'
    }

    if (senha.length >= 8) {
        min_char.style.color = 'green'
        min_char.style.fontWeight = 'bold'
        min_char.innerHTML = min_char.innerHTML.replace("➢", "✔")
    } else {
        min_char.style.color = 'gray'
        min_char.style.fontWeight = '400'
        min_char.innerHTML = min_char.innerHTML.replace("✔", "➢")
    };

    if (regex_upper.test(senha)) {
        char_maiusculo.style.color = 'green'
        char_maiusculo.style.fontWeight = 'bold'
        char_maiusculo.innerHTML = char_maiusculo.innerHTML.replace("➢", "✔")
    } else {
        char_maiusculo.style.color = 'gray'
        char_maiusculo.style.fontWeight = '400'
        char_maiusculo.innerHTML = char_maiusculo.innerHTML.replace("✔", "➢")
    };

    if (regex_special.test(senha)) {
        char_special.style.color = 'green'
        char_special.style.fontWeight = 'bold'
        char_special.innerHTML = char_special.innerHTML.replace("➢", "✔")
    } else {
        char_special.style.color = 'gray'
        char_special.style.fontWeight = '400'
        char_special.innerHTML = char_special.innerHTML.replace("✔", "➢")
    };
}

function cadastrar_usuario() {
    var senha = input_senha.value;
    const regex_upper = /[A-Z\d&Ñ]/;
    const regex_special = /[!@#$%^&*()_+]/;
    
    if (senha.length >= 8 && regex_upper.test(senha) && regex_special.test(senha)) {
        window.location="../../login/login.html"
    } else {
        alert('A senha deve conter todos os requisitos mínimos!')
    }
}
    