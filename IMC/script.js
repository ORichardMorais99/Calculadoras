function Verificar() {

    let nome = document.getElementById('nome');
    let altura = document.getElementById('altura');
    let peso = document.getElementById('peso');
    let resposta = document.getElementById('resposta')

    let a = Number(altura.value);
    let p = Number(peso.value);

    if(nome.value.length == 0 || altura.value.length == 0 || peso.value.lenght == 0){
        alert('Há dados faltando! Por favor, preencha-os')
        resposta.innerHTML = 'Há dados faltando!'
    }

    if(a > 0 && p > 0){

        let imc = p / (a ** 2)
        resposta.innerHTML = `${nome.value}, o seu IMC é de ${imc.toFixed(2)}. `

        if (imc < 18.5) {
            resposta.innerHTML += 'Você se encontra abaixo do peso.' 
        } else if(imc >= 18.5 && imc <= 24.9){
            resposta.innerHTML += 'Você se encontra no peso ideal.'
        } else if(imc >= 25 && imc <= 29.9){
            resposta.innerHTML += 'Você se encontra no estado de sobrepeso.'
        } else if(imc >= 30 && imc <= 34.9){
            resposta.innerHTML += 'Você se encontra no estado de obesidade grau 1.'
        } else if (imc >= 35 && imc <= 39.9){
            resposta.innerHTML += 'Você se encontra no estado de obesidade grau 2.'
        } else {
            resposta.innerHTML += 'Você se encontra em obesidade mórbida.'
        }

        nome.value = ''
        altura.value = ''
        peso.value = ''
    
    }

}