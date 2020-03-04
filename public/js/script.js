//BUSCADOR DE ENDEREÇO POR CEP

$(document).ready(function() {
    $("#cep").focusout(function() {
        var cep = $("#cep").val();
        cep = cep.replace("-", "");

        var urlStr = "https://viacep.com.br/ws/" + cep + "/json/";

        $.ajax({
            url: urlStr,
            type: "get",
            dataType: "json",
            success: function(data) {
                console.log(data);

                $("#cidade").val(data.localidade);
                $("#estado").val(data.uf);
                $("#bairro").val(data.bairro);
                $("#endereço").val(data.logradouro);
            },
            error: function(erro) {
                console.log(erro);
            }
        });
    });
});

//iNSERE A IMAGEM ANTES DE FAZER UPLOAD

function previewImagem() {
    var imagem = document.querySelector('input[name=pug]').files[0];
    var preview = document.querySelector('img');

    var reader = new FileReader();

    reader.onloadend = function() {
        preview.src = reader.result;
    }

    if (imagem) {
        reader.readAsDataURL(imagem);
    } else {
        preview.src = "";
    }
}