//Ruchy komputera
var computerMove, randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);

if (randomNumber == 1) {
    computerMove = 'Kamień';
} else if (randomNumber == 2) {
    computerMove = 'Papier';
} else {
    computerMove = 'Nożyce';
}
printMessage('Ruch komputera to : ' + computerMove);
console.log('1=Papier , 2=Kamień, 3=Nożyce');
console.log('Komputer wylosował liczbę ' + randomNumber + ', więc jest/są to ' + computerMove);

//Ruchy gracza
var playerMove, playerInput;
playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

if (playerInput == '1') {
    playerMove = 'Kamień';
} else if (playerInput == '2') {
    playerMove = 'Papier';
} else if (playerInput == '3') {
    playerMove = 'Nożyce';
} else {
    playerMove = 'nieznany ruch';
}
printMessage('Twój ruch: ' + playerMove);
console.log('Twoja wpisana odpowiedź to: ' + playerInput);