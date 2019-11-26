function excessZeroes(value) {
    if (typeof value === 'number') {
        return parseFloat(value);
    }
    return parseFloat(parseFloat(value));
}

export default excessZeroes;
