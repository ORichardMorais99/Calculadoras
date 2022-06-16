function Verificar() {

    let inicio = document.querySelector('input#inicio');
    let fim = document.querySelector('input#fim');
    let passo = document.querySelector('input#passo');
    let resposta = document.querySelector('textarea#resposta');


    if(inicio.value.length == 0 || fim.value.length == 0){

        alert('Você não preencheu todos os campos. Por favor, cheque os campos abaixo!')
        resposta.innerHTML = 'Por favor, cheque os campos acima.'

    } 
    
    else {

        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value);

        if(p == 0){
            alert('Você não digitou nada no campo "Passo". Então, considerarei o passo igual a 1.')
            p = 1
        }

        if (i < f) {
            for(let c = i; c <= f; c += p){
                resposta.innerHTML += `${c} `
            }
        }

        if (i > f) {
            for(let c = i; c >= f; c -= p){
                resposta.innerHTML += `${c} `
            }
        }
       
    }

}