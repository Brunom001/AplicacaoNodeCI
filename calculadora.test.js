//import {expect, test} from '@jest/globals';
//import * as calculadora from './calculadora.js';
const calculadora = require('./calculadora');

test("Testando  soma de 1 + 1", () => {
    expect(calculadora.soma(1,1)).toBe(2);
})

test("Testando  subtração de 2 - 1", () => {
    expect(calculadora.subtracao(3,1)).toBe(2);
})

test("Testando  divisao de 42 / 6", () => {
    expect(calculadora.divisao(42,6)).toBe(7);
})

