let reverseNumber = num => {
    let invert = num.toString().split('');
    if( num > 0) {
        invert = invert.reverse().join('');
    } else {
        invert = invert.slice(1).reverse().join('') * -1;
    }
    return Number(invert); 
}