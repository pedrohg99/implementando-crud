const api = {
    async buscarPensamentos() {
        try {
            const response = await fetch ('http://localhost:3000/pensamentos')
            return await response.json()
        } catch {
            alert('Erro ao buscar pensamentos')
            throw error
        }
    },

    async salvarPensamentos(pensamento) {
        try {
            const response = await fetch('http://localhost:3000/pensamentos', {
                method: "POST", //envia uma requisição via metodo POST
                headers: { // indica qual é o tipo de requisição sendo enviada
                    "Content-Type": "application/json" // conteúdo da requisição do tipo "application/json", ou seja, uma requisição via JSON
                },
                body: JSON.stringify(pensamento) // transforma a requisição em string via JSON.stringify
            })
            return await response.json()
        } catch {
            alert('Erro ao salvar pensamentos')
            throw error
        }
    },

    async buscarPensamentosPorId(id) {
        try {
            const response = await fetch(`http://localhost:3000/pensamentos/${id}`) // busca o pensamento pelo ID
            return await response.json()
        } catch {
            alert('Erro ao buscar pensamento')
            throw error
        }
    },

    async editarPensamentos(pensamento) {
        try {
            const response = await fetch(`http://localhost:3000/pensamentos/${pensamento.id}`, {
                method: "PUT", //envia uma requisição via metodo PUT, pois será necessário alterar.
                headers: { // indica qual é o tipo de requisição sendo enviada
                    "Content-Type": "application/json" // conteúdo da requisição do tipo "application/json", ou seja, uma requisição via JSON
                },
                body: JSON.stringify(pensamento) // transforma a requisição em string via JSON.stringify
            })
            return await response.json()
        } catch {
            alert('Erro ao editar pensamento')
            throw error
        }
    },
}

export default api;