/**
 * Módulo: Analisador de Dados em Arrays (JavaScript ES6+)
 * Autor: Marcella Bongiolo
 * Descrição: Script utilitário para calcular métricas estatísticas básicas 
 *            de uma lista de números usando métodos modernos do ES6.
 */

const analisarNumeros = (numeros) => {
    if (!Array.isArray(numeros) || numeros.length === 0) {
        throw new Error("O argumento deve ser um array preenchido com números.");
    }

    const totalElementos = numeros.length;
    const soma = numeros.reduce((acc, curr) => acc + curr, 0);
    const media = soma / totalElementos;
    const maximo = Math.max(...numeros);
    const minimo = Math.min(...numeros);

    return {
        totalElementos,
        soma,
        media: Number(media.toFixed(2)),
        maximo,
        minimo
    };
};

// Execução de exemplo
try {
    console.log("==================================================");
    console.log(" 📊 JAVASCRIPT LAB: ANALISADOR DE DADOS 🚀");
    console.log("==================================================");

    const dadosExemplo = [15, 42, 8, 23, 91, 4];
    console.log("Dados de entrada:", dadosExemplo);

    const resultado = analisarNumeros(dadosExemplo);
    console.log("Resultados da Análise:", resultado);
    console.log("==================================================");
} catch (erro) {
    console.error("⚠️ Erro na execução:", erro.message);
}
