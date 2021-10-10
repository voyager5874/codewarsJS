function permutations(string) {
    if (string.length < 2) {
        return [string];
    }
    let result = [];
    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        if (string.indexOf(char) !== i) {
            continue;
        }
        let remChars = string.slice(0, i) + string.slice(i + 1, string.length);
        for (let permutation of permutations(remChars)) { //'of' - recursive calls can return their 'result' array
            result.push(char + permutation); // 'b' + ['c']?? produce 'bc'. ['cd'].push('b' + ['c']) also works
        }
    }
    return result;
}