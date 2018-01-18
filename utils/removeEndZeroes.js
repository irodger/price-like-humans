function removeEndZeroes(value) {
    if (typeof value === 'number') {
        return parseFloat(value);
    }
    return parseFloat(parseFloat(value));
}

module.exports = removeEndZeroes;