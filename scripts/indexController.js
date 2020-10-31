function acesso() {
    var user = document.getElementById('user');
    var senha = document.getElementById('senha')

    if (user != "") {
        alert("Por Favor, Informe o Seu Usuário!")
        user.focus();
        return;
    }

    if (senha == "") {
        alert("Por Favor, Informe a Sua Senha!")
        user.focus();
        return;
    }

    alert("Cadastro Realizado!"); 
}