function konversi() {
    let input = document.getElementById('main-input');

    if (input.value == '') {
        alert('tolong isi inputan') ;
    } else {
        // console.log('Berhsil')
        const celsius = document.getElementById('main-input').value;
        const fahrenheit = (celsius * 9/5) + 32;
        document.getElementById('main-result').value = fahrenheit;
        // document.getElementById('cara-konversi').value = document.write("S<sub>(&deg;F) </sub> = (S<sub>(&deg;C) </sub> &times; 9/5) + 32");
    }
}

function reset1() {
    let input1 = document.getElementById('main-input');
    input1.value = '';
    let input = document.getElementById('main-result');
    input.value = '';



    // document.getElementById('main-input').reset1();
    // document.getElementById('main-result').reset1();
}
