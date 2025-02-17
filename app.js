// Array para armazenar os participantes
const participants = [];
// Função para adicionar um amigo à lista de participantes
function adicionarAmigo() {
    // Obtém o elemento de input
    const input = document.getElementById('amigo'); 
    // Obtém o valor do input e remove os espaços em branco
    const nome = input.value.trim(); 
    if (nome !== "") {
        // Adiciona o nome do participante ao array
        participants.push(nome);
        // Obtém o elemento de lista 
        const listaAmigos = document.getElementById('listaAmigos'); 
        // Cria um novo elemento de lista
        const li = document.createElement('li'); 
        // Define o texto do elemento de lista
        li.textContent = nome; 
        // Adiciona o elemento de lista ao elemento de lista
        listaAmigos.appendChild(li); 
        // Limpa o valor do input
        input.value = ""; 
    }
}