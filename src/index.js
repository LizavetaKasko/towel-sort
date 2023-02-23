module.exports = function towelSort(matrix = []) {
    let newArray = [];

    for (i in matrix) {
        newArray = newArray.concat(
            i % 2 == 1 ? matrix[i].reverse() : matrix[i]
        );
    }

    return newArray;
};
