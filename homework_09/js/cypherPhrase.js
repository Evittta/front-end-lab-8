const cypherPhrase = (obj, str) => {
    let res = str.split('');
    res = getTransformedArray(res, item => {
        for (let i in obj) {
            if (item === i) {
                item = obj[i];
            }
        }
        return item;
    });
    return res.join('');
}