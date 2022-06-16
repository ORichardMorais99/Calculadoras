function Verificar() {
    let nome = document.querySelector('input#nome');
    let altura = document.querySelector('input#altura');
    let peso = document.querySelector('input#peso');
    let resposta = document.querySelector('textarea#resposta');

    resposta.innerHTML = ''

    if(nome.value.length === 0 || altura.value.length === 0 || peso.value.length === 0){
        alert('Há campos faltando! Por favor, verifique se todos os campos foram preenchidos!')
        resposta.innerHTML = 'Por favor, certifique-se de que todos os campos estão preenchidos.'
    } 
    
    else {

        let a = Number(altura.value);
        let p = Number(peso.value);
        
        if (a > 0 && p > 0){

            let imc = p /  (a ** 2) 
            resposta.innerHTML = `${nome.value}, você tem ${a}m de altura e pesa ${p}kg. ` 
            resposta.innerHTML += `Seu IMC é de ${imc.toFixed(2)}. `

            if(imc < 18.5) {
                resposta.innerHTML += 'Infelizmente, você se encontra Abaixo do Peso.'
            }

            else if (imc >= 18.5 && imc <= 24.9){
                resposta.innerHTML += 'Parabéns! Você se encontra dentro do Peso Ideal.'
            }

            else if (imc >= 24.9 && imc <= 29.9) {
                resposta.innerHTML += 'Você se encontra em sobrepeso. Por favor, tome cuidado!'
            }

            else if(imc >= 30 && imc <= 34.9){
                resposta.innerHTML += 'Você se encontra em Obesidade Grau I. Por favor, tome cuidado!'
            }

            else if (imc >= 35 && imc <= 39.9){
                resposta.innerHTML += 'Você se encontra em Obesidade Grau II. Por favor, tome cuidado!'
            }

            else {
                resposta.innerHTML += 'Você se encontra em Obesidade grau III. Por favor, tome cuidado!'
            }

        }

        else {
            alert('Valores negativos não seráo aceitos.')
        }

    }

    altura.value = '';
    peso.value = '';
    nome.value = ''
}