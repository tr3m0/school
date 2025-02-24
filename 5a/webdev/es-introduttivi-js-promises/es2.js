function calcolaFattoriale(numero) {
    return new Promise((resolve, reject) => {
        if (numero < 0) {
            reject(new Error(numero));
        }

        let risultato = 1;
        for (let i = numero; i > 0; --i) {
            risultato *= i;
        }
        resolve(risultato);
    });
}