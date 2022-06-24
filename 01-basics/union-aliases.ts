type Combinable = number | string;
type Descriptor = 'as-number' | 'as-text';

function combine(firstInput: Combinable, secondInput: Combinable, resultConversion: Descriptor) {
    let result;
    if (typeof firstInput === 'number' && typeof secondInput === 'number') {
        result = firstInput + secondInput;
    } else {
        result = firstInput.toString() + secondInput.toString()
    }
    return result;
}

const combineAges = combine(30, 60, 'as-number');
const combineStringAges = combine('30', '60', 'as-number');

const combineNames = combine("Andres", "Mauricio", 'as-text');
