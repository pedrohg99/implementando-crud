const URL_BASE = "http://localhost:3000"

const api = {
    async buscarPensamentos() {
        try {
            const response = await fetch (`${URL_BASE}/pensamentos`)
            return await response.json()
        } catch {
            alert('Erro ao buscar pensamentos')
            throw error
        }
    },

    async salvarPensamentos(pensamento) {
        try {
            const response = await fetch(`${URL_BASE}/pensamentos`, {
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
            const response = await fetch(`${URL_BASE}/pensamentos/${id}`) // busca o pensamento pelo ID
            return await response.json()
        } catch {
            alert('Erro ao buscar pensamento')
            throw error
        }
    },

    async editarPensamentos(pensamento) {
        try {
            const response = await fetch(`${URL_BASE}/pensamentos/${pensamento.id}`, {
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
    
    async excluirPensamentos(id) {
        try {
            const response = await fetch(`${URL_BASE}/pensamentos/${id}`, {
                method: "DELETE", //envia uma requisição via metodo DELETE, pois será necessário remover.
            })
        } catch {
            alert('Erro ao excluir pensamento')
            throw error
        }
    },
}

export default api;