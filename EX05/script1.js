function Verificar() {

    let inicio = document.querySelector('input#inicio');
    let fim = document.querySelector('input#fim');
    let passo = document.querySelector('input#passo');
    let resposta = document.querySelector('textarea#resposta');

    resposta.innerHTML = ''

    if(inicio.value.length === 0 || fim.value.length === 0) {

        alert('Por favor, preencha todos os dados!');

    }
    
    else {
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value);

       if(p === 0){
        alert('Não há nada no campo "Passo". Por isso, irei considerar o passo = 1.')
        p = 1
       }

        if (i < f){
            for(let c = i; c <= f; c += p) {
                resposta.innerHTML += `${c} `
            }
        }
        
        if (i > f) {
            for(let c = i; c >= f; c -= p){
                resposta.innerHTML += `${c} `
            }
        }

        inicio.value = '';
        fim.value = '';
        passo.value = ''

    }

}