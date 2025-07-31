const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é o nome completo do Pozzobom?",
        alternativas: [
            {
                texto: "João Otávio Pozzobom Bernardes de Souza",
                afirmacao: "Acertou"
            },
            {
                texto: "João Pedro Pozobom Bernardi de Souza",
                afirmacao: "Errou"
            },
            {
                texto: "João Otávio Pozzobon da silva",
                afirmacao: "Errou"
            },
            {
                texto: "João Otávio Augusto Pozzobon Crepaldi da Silva",
                afirmacao: "Errou"
            }            
        ]
    },
    {
        enunciado: "Qual é a comida favorita do Pozobom?",
        alternativas: [
            {
                texto: "Macarrão",
                afirmacao: "Errou"
            },
            {
                texto: "Sushi",
                afirmacao: "Errou"
            },
            {
                texto: "Churasco",
                afirmacao: "Acertou"
            },
            {
                texto: "Hamburger",
                afirmacao: "Errou"
            }            
        ]
    },
    {
        enunciado: "Quantos graus de miopia e de astigmatimo ele tem?",
        alternativas: [
            {
                texto: "Remus Lupin",
                afirmacao: "Errou"
            },
            {
                texto: "Severus Snape",
                afirmacao: "Acertou"
            },
            {
                texto: "Gilderoy Lockhart",
                afirmacao: "Errou"
            },
            {
                texto: "Minerva McGonagall",
                afirmacao: "Errou"
            }
        ]
    },
    {
        enunciado: "O que vc acha do Pozobom?",
        alternativas: [
            {
                texto: "Incrivel",
                afirmacao: "Acertou"
            },
            {
                texto: "Perfeito",
                afirmacao: "Acertou"
            },
            {
                texto: "Deslumbrante",
                afirmacao: "Acertou"
            },
            {
                texto: "Magnífico",
                afirmacao: "Acertou"
            }
        ]
    },
    {
        enunciado: "Qual animal de estimação o Pozzobom tem?",
        alternativas: [
            {
                texto: "Bichento",
                afirmacao: "Errou"
            },
            {
                texto: "Trevor",
                afirmacao: "Errou"
            },
            {
                texto: "Perebas",
                afirmacao: "Acertou"
            },
            {
                texto: "Edwiges",
                afirmacao: "Errou"
            }
        ]
    },
    {
        enunciado: "Qual time de futebol o Pozzobom torce?",
        alternativas: [
            {
                texto: "Palmeiras lixo",
                afirmacao: "Errou"
            },
            {
                texto: "Corintians timinho",
                afirmacao: "Errou"
            },
            {
                texto: "Santos",
                afirmacao: "Errou"
            },
            {
                texto: "São Paulo o maior do Brasil",
                afirmacao: "Acertou"
            }
        ]
    },
    {
        enunciado: "Qual o dia do aniversario do Pozzobom?",
        alternativas: [
            {
                texto: "Alvus Dumbledore",
                afirmacao: "Acertou"
            },
            {
                texto: "Severus Snape",
                afirmacao: "Errou"
            },
            {
                texto: "Minerva McGonagall",
                afirmacao: "Errou"
            },
            {
                texto: "Gellert Grindelwald",
                afirmacao: "Errou"
            }
        ]
    },    
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();

let contagemAfirmacoes = {}; // Objeto para armazenar a contagem de cada afirmação

function respostaSelecionada(opcaoSelecionada) {
    const afirmacaoSelecionada = opcaoSelecionada.afirmacao;
    if (contagemAfirmacoes.hasOwnProperty(afirmacaoSelecionada)) {
        contagemAfirmacoes[afirmacaoSelecionada]++;
    } else {
        contagemAfirmacoes[afirmacaoSelecionada] = 1;
    }
    
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    const totalPerguntas = perguntas.length;
    const totalAcertos = contagemAfirmacoes["Acertou"] || 0; // Se não houver acertos, considera como 0
    const porcentagemAcertos = (totalAcertos / totalPerguntas) * 100;

    caixaPerguntas.textContent = "Resultado do Quiz!";
    textoResultado.textContent = `Você acertou ${totalAcertos} de ${totalPerguntas} perguntas. Sua taxa de acerto foi ${porcentagemAcertos.toFixed(2)}%.`;
    caixaAlternativas.textContent = "";
}

