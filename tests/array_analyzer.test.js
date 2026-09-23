const test = require("node:test");
const assert = require("node:assert/strict");

const { analisarNumeros } = require("../array_analyzer");

test("calcula as métricas básicas de um array", () => {
    assert.deepEqual(analisarNumeros([15, 42, 8, 23, 91, 4]), {
        totalElementos: 6,
        soma: 183,
        media: 30.5,
        maximo: 91,
        minimo: 4,
    });
});

test("arredonda a média para duas casas decimais", () => {
    assert.equal(analisarNumeros([1, 2, 2])[ "media" ], 1.67);
});

test("aceita números negativos", () => {
    assert.deepEqual(analisarNumeros([-10, 0, 10]), {
        totalElementos: 3,
        soma: 0,
        media: 0,
        maximo: 10,
        minimo: -10,
    });
});

test("processa um array com um único elemento", () => {
    assert.deepEqual(analisarNumeros([7]), {
        totalElementos: 1,
        soma: 7,
        media: 7,
        maximo: 7,
        minimo: 7,
    });
});

test("rejeita array vazio", () => {
    assert.throws(
        () => analisarNumeros([]),
        {
            name: "TypeError",
            message: "O argumento deve ser um array não vazio de números.",
        },
    );
});

test("rejeita valores não numéricos", () => {
    assert.throws(
        () => analisarNumeros([1, "2", 3]),
        {
            name: "TypeError",
            message: "Todos os elementos do array devem ser números finitos.",
        },
    );
});

test("rejeita NaN e Infinity", () => {
    assert.throws(() => analisarNumeros([1, Number.NaN]));
    assert.throws(() => analisarNumeros([1, Number.POSITIVE_INFINITY]));
});
