<html>
<head>
    <meta charset="utf-8"/>
    <title>App Mail Send</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="./css/style.css">
    <link rel="icon" href="./img/logo.png">

</head>

<body>
<div class="container">

    <div class="py-3 text-center">
        <img class="d-block mx-auto mb-2" src="./img/logo.png" alt="" width="72" height="72">
        <h2>Send Mail</h2>
        <p class="lead">Seu app de envio de e-mails particular!</p>
    </div>
    <div id="resposta" class="container"></div>

    <div class="row">
        <div class="col-md-12">

            <div class="card-body font-weight-bold">
                <form id="form-envio" method="post">
                    <div class="form-group">
                        <label for="para">Para</label>
                        <input type="text" name="para" class="form-control" id="para" placeholder="joao@dominio.com.br" required>
                    </div>
                    <div class="form-group">
                        <label for="assunto">Assunto</label>
                        <input type="text" name="assunto" class="form-control" id="assunto"
                               placeholder="Assundo do e-mail" required>
                    </div>
                    <div class="form-group">
                        <label for="mensagem">Mensagem</label>
                        <textarea class="form-control" name="mensagem" id="mensagem" required></textarea>
                    </div>
                </form>
                <button onclick="submitForm()" form="form-envio" type="submit" class="btn btn-primary btn-lg">Enviar
                    Mensagem
                </button>
                <div id="insc-loader"></div>
            </div>
        </div>
    </div>
</div>
<script src="./js/jquery.js"></script>
<script src="./js/master.js"></script>

</body>
</html>