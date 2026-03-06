const btn = document.getElementById('btn-iniciar');
const divResultado = document.getElementById('resultado');
 
// Coletando os dados
btn.addEventListener('click', () => {
    let nome = prompt("Escreva o seu nome:");
    let sobrenome = prompt("Escreva o seu sobrenome:");
    let idade = prompt("Digite a sua idade:");
    let estado = prompt("Digite o seu estado:");
    let cidade = prompt("Digite a sua cidade:");

    // Exibindo na tela através do DOM
    document.getElementById('info-nome').innerText = `Nome: ${nome}`;
     document.getElementById('info-sobrenome').innerText = `Sobrenome: ${sobrenome}`;
    document.getElementById('info-idade').innerText = `Idade: ${idade} anos`;
    document.getElementById('info-estado').innerText = `Estado: ${estado}`;
    document.getElementById('info-cidade').innerText = `Cidade: ${cidade}`;

    // Mostra a div que estava escondida
    divResultado.style.display = 'block';
    
    // Também exibe no console conforme solicitado no exercício
    console.log(`Usuário Cadastrado: ${nome}, ${idade} anos, ${cidade}.`);
});
