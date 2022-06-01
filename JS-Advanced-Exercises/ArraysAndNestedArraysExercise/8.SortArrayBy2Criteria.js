function solve(input) {
    input.sort(twoCriteriaSort);
    return input.join('\n')

    function twoCriteriaSort(current, next) {
        if (current.length === next.length) {
            return current.localeCompare(next);
        }

        return current.length - next.length;
    }
}

console.log(solve(['alpha',
    'beta',
    'gamma']
));
console.log(solve(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']
));
console.log(solve(['test',
    'Deny',
    'omen',
    'Default']
));