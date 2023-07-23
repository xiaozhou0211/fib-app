import { stringIsNaturalNumber } from '../utils/string-utils';

export function IntegerInput(value) {
    if (!stringIsNaturalNumber(value) || value === "") {
        return false;
    } else {
        return true;
    }
}