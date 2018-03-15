const decypherPhrase = (obj, str) => {
    const invertObj = {};
    for (let key in obj) {
        invertObj[obj[key]] = key;
    }
    return cypherPhrase(invertObj, str);
};