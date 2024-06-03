function obterMensagens() {

    var retorno = [];

    var consulta = $.ajax({
        url: 'https://app-uniesp-p2-b8d2992ac568.herokuapp.com/mensagens',
        method: 'GET',
        dataType: 'json',
        async: false
    }).fail(function(){
        return retorno;
    });

    consulta.done(function(data) {
        retorno = data;
    });

    return retorno;
}

function inserirMensagem(mensagem) {

    $.ajax({
        url: 'https://app-uniesp-p2-b8d2992ac568.herokuapp.com/mensagens',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(mensagem),
        success: function() {
            alert('Mensagem enviada com sucesso!');
        },
        error: function() {
            alert('Erro ao enviar mensagem.');
        }
    });

    var inserir = $.ajax({

        url: 'https://app-uniesp-p2-b8d2992ac568.herokuapp.com/mensagens',
        method: 'POST',
        data: JSON.stringify(mensagem),
        dataType: 'json',
        async: false,
        contentType: 'application/json',
    });
}

/* Api de login não esta funcionando

function validarUsuario(objLoginSenha) {
    var retorno = false;

    var validacao = $.ajax({
        url: 'https://app-uniesp-p2-b8d2992ac568.herokuapp.com/usuarios/validar',
        method: 'POST',
        dataType: 'json',
        async: false,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        contentType: 'application/json',
        data: JSON.stringify(objLoginSenha)
    }).fail(function() {
        return retorno;
    });

    validacao.done(function(data) {
        retorno = data;
    });

    return retorno;
} 

*/

function validarUsuario(objLoginSenha) {

    var emailCorreto = 'admin@admin.com';
    var senhaCorreta = 'admin';

    if (objLoginSenha.email === emailCorreto && objLoginSenha.senha === senhaCorreta) {
        return true;
    } else {
        return false;
    }

}
