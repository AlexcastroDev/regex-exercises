const applyRegexp = require('../../helpers')

const text = `
Olha, com vocês me pressionando, a fala não vai sair natural. Eu
não consigo me concentrar na minha fala. Aliás, isso é um falatório,
pois nunca vi um comercial com tantas falas assim. Vou me queixar
com o problemasnafala@medicos.com.br.`;

describe('Finding Words', () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })

    it('Should find 5 words', () => {
        const results = applyRegexp.occurrences(text, /fala./)
    
        expect(results).toHaveLength(5)
    })
    
    it('Should find negative words', () => {
        const results = applyRegexp.occurrences(text, /n[a, ã, Ã]o/)
    
        expect(results).toHaveLength(2)
    })
})
