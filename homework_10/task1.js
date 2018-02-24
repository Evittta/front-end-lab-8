function debounce(callback, time) {
    let timeout;
    return function() {
        clearTimeout(timeout);
        timeout = setTimeout(callback, time);
    }
}

let iterator = 0;

function increaseIteratorBy1() {
    iterator++;
    printIteratorValue();
}

function printIteratorValue() {
    console.log('Iterator value ', iterator);
}

let increaseIterator = debounce(increaseIteratorBy1, 1000);

increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();