import api from "./api.js"


const ui = {
    async rederizarPensamentos(){
        const listaPensamentos = document.getElementById('lista-pensamentos') // puxa via ID do HTML a sessão para renderizar os pensamentos

        try {
            const pensamentos = await api.buscarPensamentos()
            pensamentos.forEach(ui.adicionarPensamentoNaLista)
        } 
        catch {
            alert('Erro ao renderizar pensamentos')
        }
    },

    adicionarPensamentoNaLista (pensamento) {
        const listaPensamentos = document.getElementById('lista-pensamentos')
        const li = document.createElement("li")
        li.setAttribute("data-id", pensamento.id)
        li.classList.add("li-pensamento")

        const iconeAspas = document.createElement("img")
        iconeAspas.src = "assets/imagens/aspas-azuis.png"
        iconeAspas.alt = "Aspas azuis"
        iconeAspas.classList.add("icone-aspas")

        const pensamentoConteudo = document.createElement("div")
        pensamentoConteudo.textContent = pensamento.conteudo
        pensamentoConteudo.classList.add("pensamento-conteudo")
        
        const pensamentoAutoria = document.createElement("div")
        pensamentoAutoria.textContent = pensamento.autoria
        pensamentoAutoria.classList.add("pensamento-autoria")

        li.appendChild(iconeAspas)
        li.appendChild(pensamentoConteudo)
        li.appendChild(pensamentoAutoria)
        listaPensamentos.appendChild(li)
    },

    limparFormulario() { //Função para limpar formulário
        document.getElementById("pensamento-form").reset(); //pega o elemento pensamento-form pelo ID (elemento condizente com o formulário no HTML) e aplica um reset nos campos, para limpar o conteúdo.
    }
}


export default ui;