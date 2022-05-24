function solve(...params) {
    let num = Number(params[0]);

    for (let i = 1; i < params.length; i++) {
        if (params[i] == 'chop') {
            num /= 2
            console.log(num);
        } else if (params[i] == 'dice') {
            num = Math.sqrt(num);
            console.log(num);
        } else if (params[i] == 'spice') {
            num += 1;
            console.log(num);
        } else if (params[i] == 'bake') {
            num *= 3;
            console.log(num);
        } else if (params[i] == 'fillet') {
            num -= (num * 0.2);
            console.log(num);
        }
    }
}

solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');