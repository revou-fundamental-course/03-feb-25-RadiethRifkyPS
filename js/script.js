function konversi() {
    let input = document.getElementById('main-input');

    if (input.value == '') {
        alert('Isi input angka terlebih dahulu!') ;
    } else {
        const celsius = document.getElementById('main-input').value;
        const fahrenheit = (celsius * 9/5) + 32;
        document.getElementById('main-result').value = fahrenheit;
    }
}

//Mereset nilai input dan result
function reset1() { 
    let input1 = document.getElementById('main-input');
    input1.value = '';
    let input = document.getElementById('main-result');
    input.value = '';
}
