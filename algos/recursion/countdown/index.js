function countdown(n){
    let arr = ["Liftoff!"];
    for(let i = 1; i <= n; i++) {
        arr.unshift(i);
    }
    return arr.join(', ');
}
console.log(countdown(9));

module.exports = countdown