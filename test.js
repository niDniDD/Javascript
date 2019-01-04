var coins = [10, 5, 1];
var input = 1536;

for( i = 0 ; i < coins.length; i++){
    if(input >= coins [i]){
        console.log(Math.floor(input/coins [i]));
        input = input % coins [i];
    }
}

