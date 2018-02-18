const decypherPhrase = (obj, str) => {
    const invertObj = {};
    for (let i in obj) {
        if ( obj.hasOwnProperty(i) ) {
            invertObj[obj[i]] = i;
        }
    }
    return cypherPhrase(invertObj, str);
};