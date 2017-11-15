const calculate = (a, b, operator) => operator == '^' ? Math.pow(a,b): eval(a.toString() + operator + b.toString());

module.exports = calculate;
