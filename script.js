function random_number() {

    const numero = document.querySelector('#numero');

    var numeroaleatorio = Math.floor(Math.random()*100);

    numero.innerHTML = numeroaleatorio
}