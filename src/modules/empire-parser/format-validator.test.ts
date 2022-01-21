import {isValid} from './format-validator'

test('Empty empire should not be valid', () => {
    expect(isValid('')).toBeFalsy()
})

test('Non empty empire should be valid', () => {
    expect(isValid('TestEmpire')).toBeTruthy()
})