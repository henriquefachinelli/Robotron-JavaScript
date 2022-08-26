const controle = document.querySelectorAll('[data-controle]');
const estatisticas = document.querySelectorAll('[data-estatistica]');
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach(element => {

    element.addEventListener("click", (e) =>{
        operacao(e.target.dataset.controle, e.target.parentNode)
        atualizaEstatisticas(e.target.dataset.peca)

    })  
});


function operacao(op, contador){

    const peca = contador.querySelector('[data-contador]');

    if(op === "-"){
        peca.value = parseInt(peca.value) - 1
    } else if (op === "+"){
        peca.value = parseInt(peca.value) + 1
    }
};

function atualizaEstatisticas(peca){
    
    estatisticas.forEach(element => {
        element.textContent = parseInt(element.textContent)+ pecas[peca][element.dataset.estatistica]
    });
}

