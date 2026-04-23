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
            const response = await fetch ('http://localhost:3000/pensamentos', {
                method: "POST", //envia uma requisição via metodo POST
                headers: { // indica qual é o tipo de requisição sendo enviada
                    "Content-Type": "application/json" // conteúdo da requisição do tipo "application/json", ou seja, uma requisição via JSON
                },
                body: JSON.stringify(pensamento) // transforma a requisição em string via JSON.stringify
            })
            return await response.json()
        } catch {
            alert('Erro ao buscar pensamentos')
            throw error
        }
    }
}

export default api;