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
        // Cria um novo elemento de lista
        const novonome = document.createElement('novonome'); 
        // Define o texto do elemento de lista
        novonome.textContent = nome; 
        // Adiciona o elemento de lista ao elemento de lista
        listaAmigos.appendChild(novonome); 
        // Limpa o valor do input
        input.value = ""; 
}
