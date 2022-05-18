function circleArea(arg){
    let inputType = typeof(arg);

    if (inputType === 'number'){
        let area = (Math.PI * arg * arg);
        console.log(area.toFixed(2));
    }
    else {
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`)
    }
}

circleArea(5);