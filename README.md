<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício 02 - Dados Pessoais</title>
    
    <script src="2 script.js" defer></script>

    <style>
/*Criar um pequeno programa em JavaScript onde o usuário insere seus dados pessoais (nome, idade e cidade) e o sistema exibe essas informações formatadas.
Criar três variáveis (let nome, let idade, let cidade).Solicitar que o usuário insira valores através do prompt().Exibir uma mensagem formatada usando console.log() ou alert().

Não esqueça de postar o seu arquivo ou o link do seu gitHub com a atividade*/

        
        body {
        /* Estilização básica para o conteúdo na tela */   
        font-family: sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            background-color: #cacfda;
        }

        /* Exibirá os resultados coletados */
         #resultado{
            margin-top: 20px;
            padding: 20px;
            border-radius: 8px;
            background: green;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            display: none; /* Deixa o elemento invisível até  mude */
        }
    </style>
</head>
<body>

    <h1>Cadastro de Usuário</h1>
    <p>Clique no botão abaixo para inserir seus dados:</p>
    
    <button type="button" id="btn-iniciar">Iniciar Cadastro</button>

    <div id="resultado">
        <h3>Dados Coletados:</h3>
        <p id="info-nome"></p>
        <p id="info-sobrenome"></p>
        <p id="info-idade"></p>
        <p id="info-estado"></p>
        <p id="info-cidade"></p>
    </div>

</body>
</html>
