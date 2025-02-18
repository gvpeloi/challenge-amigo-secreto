// Array para armazenar os participantes
const participantes = [];

// Função para adicionar um amigo à lista de participantes
function adicionarAmigo() {
    // Obtém o elemento de input
    const input = document.getElementById('amigo'); 
    // Obtém o valor do input e remove os espaços em branco
    const nome = input.value.trim(); 
    if (nome === "") {
        // Exibe um alerta se o nome estiver vazio
        alert("Por favor, insira um nome válido.");
        return;
    }
    // Adiciona o nome do participante ao array
    participantes.push(nome);
    // Obtém o elemento de lista 
    const listaAmigos = document.getElementById('listaAmigos'); 
     // Adiciona todos os participantes à lista
     participantes.forEach(participante => {
    // Cria um novo elemento de lista
    const lista= document.createElement('li'); 
    // Define o texto do elemento de lista
   lista.textContent = nome; 
    // Adiciona o elemento de lista ao elemento de lista
    listaAmigos.appendChild(lista); 
    });
    // Limpa o valor do input
    input.value = ""; 
    // Limpa a lista antes de adicionar novos elementos
    listaAmigos.innerHTML = "";
}

// Função para sortear um amigo da lista de participantes
function sortearAmigo() {
    if (participantes.length === 0) {
        alert("A lista de participantes está vazia.");
        return;
    }
    // Seleciona um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * participantes.length);
    // Obtém o nome do participante sorteado
    const resultado = participantes[indiceAleatorio];
    // Remove o participante sorteado da lista
    participantes.splice(indiceAleatorio, 1);
    // Exibe o nome do participante sorteado
    const elementoResultado = document.getElementById('resultado');
    elementoResultado.textContent = `resultado: ${resultado}`;
    // Atualiza a lista de participantes exibida
    const listaAmigos = document.getElementById('listaAmigos');
    participantes.forEach(participante => {
        const lista = document.createElement('li');
        lista.textContent = participante;
        listaAmigos.appendChild(lista);
    });
    listaAmigos.innerHTML = "";
}
