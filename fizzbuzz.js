const fizzbuzz = (word) => {
    if((word.length % 3) == 0){
        if((word.length % 5) == 0){
            return 'FizzBuzz'
        }
        return 'Fizz'
    }
    else if((word.length % 5) == 0){
        if((word.length % 3) == 0){
            return 'FizzBuzz'
        }
        return 'Buzz'
    }
    else {
        return "Oups !"
    }
};

module.exports = fizzbuzz;