/**
 * Analisador de dados numéricos usando recursos modernos do JavaScript.
 *
 * O módulo calcula métricas estatísticas básicas de um array de números.
 */

function analisarNumeros(numeros) {
    if (!Array.isArray(numeros) || numeros.length === 0) {
        throw new TypeError("O argumento deve ser um array não vazio de números.");
    }

    if (!numeros.every((numero) => typeof numero === "number" && Number.isFinite(numero))) {
        throw new TypeError("Todos os elementos do array devem ser números finitos.");
    }

    const totalElementos = numeros.length;
    const soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
    const media = Number((soma / totalElementos).toFixed(2));
    const maximo = Math.max(...numeros);
    const minimo = Math.min(...numeros);

    return {
        totalElementos,
        soma,
        media,
        maximo,
        minimo,
    };
}

function main() {
    console.log("=".repeat(50));
    console.log("JAVASCRIPT LAB — ANALISADOR DE DADOS");
    console.log("=".repeat(50));

    const dadosExemplo = [15, 42, 8, 23, 91, 4];
    console.log("Dados de entrada:", dadosExemplo);
    console.log("Resultados:", analisarNumeros(dadosExemplo));

    console.log("=".repeat(50));
}

if (require.main === module) {
    main();
}

module.exports = { analisarNumeros };
