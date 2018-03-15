const collectIds = arr => {
    const filteredArray = getFilteredArray(arr, item => {
        return item.rating > 3.0;
    });
    const ids = getTransformedArray(filteredArray, item => {
        return item.id;
    });
    return ids;
};