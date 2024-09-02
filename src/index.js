module.exports = function reverse(n) {
    n = Math.abs(n);
    const str = String(n);
    const result = [];
    for (const digit of str) {
        result.unshift(digit);
    }
    return Number(result.join(""));
};
