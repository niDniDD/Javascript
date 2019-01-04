let coins = (number) => {

    var input = number;
    var coin10 = 0;
    var coin5 = 0;
    var coin1 = 0;
    
    if (input >= 10) {
        coin10 = Math.floor(input / 10);
        input = input % 10;
    }
    if (input >= 5) {
        coin5 = Math.floor(input / 5);
        input = input % 5;
    }
    if (input >= 1) {
        coin1 = Math.floor(input / 1);
    }
    
    console.log(coin10);
    console.log(coin5);
    console.log(coin1);

}



module.exports = {
    coins   
}