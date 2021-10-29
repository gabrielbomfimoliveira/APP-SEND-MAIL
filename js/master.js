function validacaoFormulario() {
    var para = document.getElementById('para');
    var assunto = document.getElementById('assunto');
    var mensagem = document.getElementById('mensagem');

    if (para.value == "") {
        para.style.borderColor = "red";
        return;
    } else {
        para.style.borderColor = "";
    }
    if (assunto.value == "") {
        assunto.style.borderColor = "red";
        return;
    } else {
        assunto.style.borderColor = "";
    }
    if (mensagem.value == "") {
        mensagem.style.borderColor = "red";
        return;
    } else {
        mensagem.style.borderColor = "";
    }
    return true;
}

function submitForm() {
    if (validacaoFormulario()) {
        $(document).on('submit', '#form-envio', function (e) {
            e.preventDefault();
            $.ajax({
                method: "POST",
                dataType: "json",
                url: "processa_envio.php",
                data: $(this).serialize(),
                beforeSend: function () {
                    document.getElementById('insc-loader').style.display = "block";
                },
                success: function (data) {
                    var conteudo_resposta = '';
                    if (data['codigo_status'] == 1) {
                        conteudo_resposta +=
                            `<h1 class="display-8 text-success">${data['descricao_status']}</h1>`;
                        setTimeout(function () {
                            document.getElementById('resposta').innerHTML = '';
                        }, 9000);
                    } else if (data['codigo_status'] == 2) {
                        conteudo_resposta +=
                            `<h1 class="display-8 text-danger">${data['descricao_status']}</h1>`;
                        setTimeout(function () {
                            document.getElementById('resposta').innerHTML = '';
                        }, 9000);

                    }
                    //console.log(data['codigo_status']);
                    document.getElementById('para').value = '';
                    document.getElementById('assunto').value = '';
                    document.getElementById('mensagem').value = '';
                    document.getElementById('resposta').innerHTML = conteudo_resposta;
                },
                complete: function (response) {
                    document.getElementById('insc-loader').style.display = "";
                }
            });
        });
    } else {
        console.log('Preencha todos os campos!')
    }
}

// function showLoader() {
//     $("#progressbar").css("display", "");
// }
//
// function hideLoader() {
//     setTimeout(function () {
//         $("#progressbar").css("display", "none");
//     }, 1000);
// }