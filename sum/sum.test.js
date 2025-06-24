const sum = require('./sum');

test('adds 2 + 3 to equal 5', () => {
    expect(sum(2, 3)).toBe(5);
});

test('adds 0 + 0 to equal 0', () => {
    expect(sum(0, 0)).toBe(0);
});

test('adds -5 + -10 to equal -15', () => {
    expect(sum(-5, -10)).toBe(-15);
});

test('adds "2" + 3 to equal "23"', () => {
    expect(sum('2', 3)).toBe('23'); // JS string coercion
});

test('adds undefined + 3 to be NaN', () => {
    expect(sum(undefined, 3)).toBeNaN();
});

test('adds null + 3 to equal 3', () => {
    expect(sum(null, 3)).toBe(3); // null coerced to 0
});

test('adds true + 1 to equal 2', () => {
    expect(sum(true, 1)).toBe(2); // true coerced to 1
});

test('adds Number.MAX_SAFE_INTEGER + 1 correctly', () => {
    expect(sum(Number.MAX_SAFE_INTEGER, 1)).toBe(Number.MAX_SAFE_INTEGER + 1);
});
