function Verificar() {

    let inicio = document.getElementById('inicio');
    let fim = document.getElementById('fim');
    let passo = document.getElementById('passo');
    let resposta = document.getElementById('resposta');

    resposta.innerHTML = ''

    if(inicio.value.length === 0 || fim.value.length === 0){
        alert('Há dados faltando! Por favor, revise os campos.')
    }

    else {
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value);

        if(p === 0){
            alert('Você se esqueceu de preencher o campo "Passo". Portanto, irei considerá-lo igual a 1.')
            p = 1
        }

        if(i < f){
            for(let c = i; c <= f; c += p) {
                resposta.innerHTML += `${c} `
            }
        }

        if(i > f){
            for(let c = i; c >= f; c -= p){
                resposta.innerHTML += `${c} `
            }
        }
    }

        inicio.value = '';
        fim.value = '';
        passo.value = '';
}
