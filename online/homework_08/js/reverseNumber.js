let reverseNumber = num => {
    let reverse = Math.abs(num).toString().split('').reverse().join('');
    reverse = Number(reverse) * Math.sign(num);
    return reverse;
}