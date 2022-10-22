export const parse = (line) => {
    if(line.toLowerCase() === 'да') return true;
    if(line.toLowerCase() === 'нет') return false;

    return null;
}