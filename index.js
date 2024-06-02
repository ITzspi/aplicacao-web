const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            heroi: { vida: 100 },
            vilao: { vida: 100 },
            logAcoes: [],
            gameOver: false,
            vencedorNome: '',
            vencedorImagem: ''
        }
    },
    methods: {
        atacar(isHeroi) {
            if (this.gameOver) return;

            const alvo = isHeroi ? this.vilao : this.heroi;
            const dano = 10;
            
            alvo.vida -= dano;
            const acao = `${isHeroi ? 'Malenia' : 'Radahn'} atacou e causou ${dano} de dano.`;
            this.logAcao(acao);
            
            if (alvo.vida <= 0) {
                this.logAcao(`${isHeroi ? 'Malenia' : 'Radahn'} venceu!`);
                this.gameOver = true;
                this.vencedorNome = isHeroi ? 'Malenia' : 'Radahn';
                this.vencedorImagem = isHeroi ? 'malenia.jpg' : 'radahn.jpg';
            } else {
                this.acaoVilao();
            }
        },
        defender(isHeroi) {
            if (this.gameOver) return;

            const personagem = isHeroi ? this.heroi : this.vilao;
            const danoReduzido = 5;
            personagem.vida -= danoReduzido;
            const acao = `${isHeroi ? 'Malenia' : 'Radahn'} se defendeu e reduziu ${danoReduzido} de dano.`;
            this.logAcao(acao);
        },
        usarEstus(isHeroi) {
            if (this.gameOver) return;

            const personagem = isHeroi ? this.heroi : this.vilao;
            const cura = 20;
            personagem.vida += cura;
            const acao = `${isHeroi ? 'Malenia' : 'Radahn'} usou uma poção e recuperou ${cura} de vida.`;
            this.logAcao(acao);
        },
        esquivar(isHeroi) {
            if (this.gameOver) return;

            const acao = `${isHeroi ? 'Malenia' : 'Radahn'} esquivou do ataque.`;
            this.logAcao(acao);
        },
        acaoVilao() {
            if (this.gameOver) return;

            const acoes = ['atacar', 'defender', 'usarEstus', 'esquivar', 'atacar', 'atacar'];
            const acaoAleatoria = acoes[Math.floor(Math.random() * acoes.length)];
            this[acaoAleatoria](false);
        },
        logAcao(acao) {
            this.logAcoes.push(acao);
        },
        abrirDashboard() {
            window.open('dashboard.html', '_blank');
        }
    }
});

const appInstance = app.mount("#app");

window.appData = appInstance.$data;
