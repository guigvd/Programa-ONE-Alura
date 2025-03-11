//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = []

const erroMessage = () => {
    return alert("Por favor, insira um nome!!")
}

// Função para adicionar amigos
const adicionarAmigo = (nome) => {
    nome = document.getElementById("amigo").value
    if (nome === "") {
        erroMessage()
    } else {
    amigos.push(nome)
    }

    document.getElementById("amigo").value = ""

    console.log(amigos)
}

// Função para sortear amigo secreto
const sortearAmigo = () => {
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)]
    // document.getElementById("amigo-sorteado").innerHTML = amigoSorteado
    console.log(amigoSorteado)
}