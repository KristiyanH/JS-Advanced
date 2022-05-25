function solve(flavours, start, end) {
    const startIndex = flavours.indexOf(start);
    const endIndex = flavours.indexOf(end);

    const arr = flavours.slice(startIndex, endIndex + 1);

    return arr;
}

solve(['Pumpkin Pie',
        'Key Lime Pie',
        'Cherry Pie',
        'Lemon Meringue Pie',
        'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'
)

solve(['Apple Crisp',
        'Mississippi Mud Pie',
        'Pot Pie',
        'Steak and Cheese Pie',
        'Butter Chicken Pie',
        'Smoked Fish Pie'],
    'Pot Pie',
    'Smoked Fish Pie'
);