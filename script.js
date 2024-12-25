let a = 0;
let b = 1;
let c = b + a;
let el = document.getElementById("mostra");

el.innerHTML = a;
function fibonacci (){
    
    console.log(a);
    console.log(b);
    console.log(c);
    el.innerHTML = b;
    a = b;
    b = c;
    c = a + b;
    
    console.log(a);
    console.log(b);
    console.log(c);
};

let fibo = [
 0, 1, 1,

];

let log = document.getElementById("log");
log.innerHTML = fibo[0];

function vet() {
    
    log.innerHTML = fibo[1];
    fibo[0] = fibo[1];
    fibo[1] = fibo[2];
    fibo[2] = fibo[0] + fibo[1];
    
    
    
    
    
}


