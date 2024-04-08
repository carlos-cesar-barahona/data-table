const notNull = (value) => {
    return value !== null && value !== undefined && value !== '';
}

const hasLetters = (value) => {
    const str = value.toString();
    return /[a-zA-Z]/.test(str);
}

const isNumber = (value) => {
    return typeof value === 'number';
}

const parseToNumber = (value) => {
    if (notNull(value)) {
        return eval(value.replaceAll(",", ""));
    }
    return 0;
}