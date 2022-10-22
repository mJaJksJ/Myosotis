export const parse = (line) => {
    let [success, parsed] = [false, null];

    [success, parsed] = tryParseWithComma(line);
    if(success) return parsed;

    [success, parsed] = tryParseWithAnd(line)
    if(success) return parsed;

    return parsed;
}

const tryParseWithComma = (line) => {
    const nums = line.split(',');
    if (nums.length === 2) {
       return [true, parseFloat(`${nums[0]}.${nums[1]}`)];
    }
    return [false, null]
}

const tryParseWithAnd = (line) => {
    const nums = line.split(' и ');
    if (nums.length === 2) {
        return [true, parseFloat(`${nums[0]}.${nums[1]}`)];
    }
    return [false, null]
}