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
console.log('Wylosowana liczba to ' + randomNumber + ', więc jest to ' + computerMove);