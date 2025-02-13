function konversi() {
    let input = document.getElementById('main-input');

    //Allert untuk nilai input
    if (input.value == '') {
        alert('Isi input angka terlebih dahulu!') ;
    } 

    //Kalkulasi input 
    else {
        const celsius = document.getElementById('main-input').value;
        const fahrenheit = (celsius * 9/5) + 32;
        document.getElementById('main-result').value = fahrenheit.toFixed(1);
        
        //Menampilkan rumus berdasarkan input
        let c = document.getElementById('main-input').value;
        let f = document.getElementById('main-result').value;
        document.getElementById('rumus').innerHTML = c+"&deg;C * (9/5) + 32 = "+f+"&deg;F";
    }
}

function reverse() {
    let input = document.getElementById('main-result');

    //Allert untuk nilai input
    if (input.value == '') {
        alert('Isi input angka terlebih dahulu!') ;
    } 

    //Kalkulasi input 
    else {
        const fahrenheit = document.getElementById('main-result').value;
        const celsius = (fahrenheit - 32) * 5/9;
        document.getElementById('main-input').value = celsius.toFixed(1);

        //Memunculkan rumus berdasarkan nilai input reverse
        let c = document.getElementById('main-input').value;
        let f = document.getElementById('main-result').value;
        document.getElementById('rumus').innerHTML = "("+f+"&deg;F - 32) * 5/9 = "+c+"&deg;C";
    }
}

    //Mereset nilai input dan result
    function reset1() { 
        let input1 = document.getElementById('main-input');
        input1.value = '';
        let input = document.getElementById('main-result');
        input.value = '';
        const textarea = document.getElementById('rumus');
        textarea.innerHTML = "";
    }