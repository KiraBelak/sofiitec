
  
  function XORinacci(a, b, n) {
    if (n === 0) {
        return a;
    } else if (n === 1) {
        return b;
    }

    let prevA = a;
    let prevB = b;
    let result = 0;

    for (let i = 2; i <= n; i++) {
        result = prevA ^ prevB;
        prevA = prevB;
        prevB = result;
    }

    return result;
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function runTestCases(T) {
    if (T === 0) {
        rl.close();
        return;
    }

    rl.question(`Ingrese los valores de a, b y n para el caso ${T}: `, (input) => {
        const [a, b, n] = input.split(' ').map(Number);
        const result = XORinacci(a, b, n);
        console.log(`El XORinacci de orden ${n} para los valores a=${a}, b=${b} es ${result}`);
        runTestCases(T - 1);
    });
}

rl.question('Ingrese el número de casos de prueba: ', (T) => {
    runTestCases(T);
});
