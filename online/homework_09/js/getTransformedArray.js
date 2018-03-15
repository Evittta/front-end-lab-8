let getTransformedArray = (arr, callback) => {
    let res = [];
    forEach(arr, item => {
        res.push(callback(item));
    });
    return res;
};