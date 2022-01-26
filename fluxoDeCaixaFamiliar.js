let family = {
    receitas: [4000, 3200, 2500, 18000],
    despesas: [320.34, 1350, 8732]
}
function sum (array) {
    let total = 0;
    
    for(let value of array) {
        total += value;
    }

    return total;
}

function calculate() {
    const calculateReceitas = sum(family.incomes);
    const calculateDespesas = sum(family.despesas);
    const total = calculateReceitas - calculateDespesas;
    return total;
}