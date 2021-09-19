// n ammount of towers
// m is the height of the towers
// alternating turns

// each turn a player can chose a height of x, and reduce its height to y.
// if player is unable to make a move they lose

function towerBreakers(n ,m){
    if (m === 1){
        console.log(2);
        return 2
    }
    if (n % 2 === 0){
        console.log(2);
        return 2
    } else {
        console.log(1);
        return 1
    }
}

towerBreakers(2, 6)
