const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
    {
        enunciado: "Qual é uma das principais causas do desemprego estrutural no mercado atual?",
        alternativas: [
            {
                texto: "A automação de processos, a digitalização e a incompatibilidade entre a formação técnica dos trabalhadores e as novas exigências tecnológicas.",
                afirmacao: "Você é uma pessoa analítica e atenta aos fatos. Costuma observar os problemas sociais a partir de dados, mudanças tecnológicas e dinâmicas do mercado global, buscando compreender o cenário de forma ampla e objetiva.",
            },
            {
                texto:  "A existência de leis trabalhistas, pois garantir direitos aos trabalhadores é o único fator real que impede os empresários de contratar.",
                afirmacao: "Você é uma pessoa pragmática e crítica em relação à burocracia. Tende a focar na liberdade de negociação e acredita que regras estatais em excesso atrapalham a economia e a criação de novas oportunidades.",
            }    
           
        ]
    },
    {
       
            enunciado: "De que maneira a desigualdade social afeta o acesso à educação de qualidade?",
            alternativas: [
                {
                    texto: "Famílias de menor renda enfrentam barreiras financeiras e infraestrutura comunitária precária, o que limita o acesso a recursos pedagógicos e oportunidades de desenvolvimento.",
                    afirmacao: "Você é uma pessoa empática e observadora do contexto social. Leva em consideração as diferentes realidades de vida e entende que o ponto de partida das pessoas influencia diretamente suas oportunidades de crescimento.",
                },
                {
                    texto:  "A desigualdade social não interfere na educação, pois o sucesso nos estudos depende exclusivamente do esforço e da força de vontade de cada aluno.",
                    afirmacao: "Você é uma pessoa focada na determinação e no mérito individual. Acredita no potencial de superação do ser humano e defende que o compromisso pessoal é a chave para vencer qualquer tipo de adversidade.",
                }    
               
            ]
        },
        {
            enunciado: "Como o desemprego de longa duração impacta a desigualdade social?",

            alternativas: [
                {
                    texto: "Ele compromete a renda contínua das famílias vulneráveis, força a redução de gastos essenciais e paralisa a mobilidade social, ampliando o abismo entre classes.
                    afirmacao: "Você é uma pessoa reflexiva e focada nos impactos sociais de longo prazo. Preocupa-se com o bem-estar coletivo e analisa como a estabilidade financeira é fundamental para a dignidade e segurança das famílias."
                },
                {
                    texto:    "O desemprego prolongado é positivo para a economia, pois obriga as pessoas a saírem da zona de conforto e se tornarem empreendedoras de sucesso.",
               
                    afirmacao: " Você é uma pessoa otimista e voltada para a ação imediata. Vê as dificuldades como oportunidades de reinvenção e acredita fortemente na capacidade de iniciativa própria para buscar alternativas diante das crises."
                }    
               
            ]
        },
]
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }

}
function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++
    mostraPergunta();
}
function mostraResultado(){
    caixaPerguntas.textContent = "Olha só o que podemos afirmar sobre você...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}
