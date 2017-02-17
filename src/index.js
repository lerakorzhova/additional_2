module.exports = function flatten(array) {
    if (Array.isArray(array)) {
        for (var i = 0; i < array.length; i++) {
            if (Array.isArray(array[i])) {
                flatten(array[i]);
                array[i] = [].concat.apply([], array[i]);
            }
        }
        array = [].concat.apply([], array);
        return array;
    }
    return [];
}