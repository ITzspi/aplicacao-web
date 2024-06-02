const { createApp } = Vue;

createApp({
    data() {
        return {
            heroiVida: 100,
            vilaoVida: 100,
            logAcoes: []
        };
    },
    mounted() {
        this.fetchCharacterData();
        setInterval(this.fetchCharacterData, 1000); // Atualiza os dados a cada segundo
    },
    methods: {
        fetchCharacterData() {
            try {
                this.heroiVida = window.opener.appData.heroi.vida;
                this.vilaoVida = window.opener.appData.vilao.vida;
                this.logAcoes = window.opener.appData.logAcoes;
            } catch (error) {
                console.error('Erro ao buscar dados dos personagens:', error);
            }
        }
    }
}).mount('#dashboardApp');
