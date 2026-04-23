import ui from "./ui.js"
import api from "./api.js"

document.addEventListener("DOMContentLoaded", () => {
    ui.rederizarPensamentos()

    const formularioPensamento = document.getElementById("pensamento-form")
    formularioPensamento.addEventListener("submit", manipularSubmissaoFormulario) // cria funcionalidade ao submeter o formulário.
})

async function manipularSubmissaoFormulario(event) { // cria função conectada com a ui.
    event.preventDefault(); // previne que o form tenha o comportamento padrão ao submeter
    const id = document.getElementById("pensamento-id").value //cria constante para guardar o novo evento (pensamento registrado) para o ID do CSS ID
    const conteudo = document.getElementById("pensamento-conteudo").value //cria constante para guardar o novo evento (pensamento registrado) para o ID do CSS conteudo
    const autoria = document.getElementById("pensamento-autoria").value //cria constante para guardar o novo evento (pensamento registrado) para o ID do CSS autoria

    try {
        await api.salvarPensamentos({ conteudo, autoria }) // salva o pensamento criando conexão com o a requisição configurada na API
        ui.rederizarPensamentos() // renderiza o pensamento via função criada no UI.
    } 
    catch {
        alert("Erro ao salvar pensamento")
    }
}