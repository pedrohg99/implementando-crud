import api from "./api.js"

const ui = {
    async rederizarPensamentos(){
        const listaPensamentos = document.getElementById('lista-pensamentos') // puxa via ID do HTML a sessão para renderizar os pensamentos

        try {
            const pensamentos = await api.buscarPensamentos()
            pensamentos.forEach(pensamento => { // para cada pensamento concatenar a Lista de Pensamentos no seguinte layout HTML.
                listaPensamentos.innerHTML += `
                    <li class="li-pensamento" data-id="${pensamento.id}">
                        <img src="assets/imagens/aspas-azuis.png" alt="Aspas azuis" class="icone-aspas">
                        <div class="pensamento-conteudo">${pensamento.conteudo}</div>
                        <div class="pensamento-autoria">${pensamento.autoria}</div>
                    </li>
                `// cria lista de pensamentos puxando pelo objeto do array db.json - pensamento.id, pensamento.conteudo, pensamento.autoria
            });
        } 
        catch {
            alert('Erro ao renderizar pensamentos')
        }
    }
}

export default ui;