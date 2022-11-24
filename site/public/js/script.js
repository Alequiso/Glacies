window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

// CAMINHOS (LINK) BOTÕES

function login(){
    window.location="./login.html"
  }
function criar_conta(){
    window.location="./register.company.html"
}
function landing(){
    window.location="./index.html"
}
function voltar_login(){
    window.location="./login.html"
}
function sair(){
    window.location="../index.html"
}
function cards(){
    window.location="./dashboard.html"
}
function graficos(){
    window.location="./graficos.html"
}

function adicionarFuncionario(){
    window.location="./adicionarFuncionario.html"
}
function avisos() {
    window.location="./mural.html"

}
function contatrarServico(){
    window.open("https://contate.me/glacies", "_blank")
}
function suporte(){
    window.open("https://iceconnect.atlassian.net/servicedesk/customer/portals", "_blank")
}