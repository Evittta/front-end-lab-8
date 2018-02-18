let getFilteredArray = (arr, predicate) => {
    let res = [];
    forEach(arr, item => {
        if ( predicate(item) ) {
            res.push(item);
        }
    });
    return res;
};