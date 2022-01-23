let nota = 90;
let grade;

function escrever(grade) {
    console.log(grade);
}

if (nota >= 90) {
    escrever("A");
} else if (nota <= 89 || nota >= 80) {
    escrever("B");
} else if (nota <= 79 || nota >= 70) {
    escrever('C');
} else if (nota <= 69 || nota >= 60) {
    escrever('D');
} else if (nota < 60) {
    escrever('F');
}