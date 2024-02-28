const form = document.getElementById('form-number')

function validaNumero(numeroMaior) {
    const numeroComoArray = numeroMaior;
    return numeroComoArray
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const numeroUm = document.getElementById('numero-1');
    const numeroDois = document.getElementById('numero-2');
    if (!validaNumero(numeroDois.value)) {
        alert ("O segundo campo precisa ter um número maior que o digitado no Um")
    } else {
        alert("Agora sim!")
    }


})

console.log(form);