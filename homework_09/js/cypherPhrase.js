const cypherPhrase = (obj, str) => {
    return getTransformedArray(str, item => {
        return obj[item] || item;
    }).join('');
}