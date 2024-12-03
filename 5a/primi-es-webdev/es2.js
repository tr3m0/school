let grade = prompt('Inserisci il tuo voto: ');

if (grade < 50) {
	console.log('Insufficiente');
} else if (grade < 70) {
	console.log('Sufficiente');
} else if (grade < 90) {
	console.log('Buono');
} else {
	console.log('Eccellente');
}
