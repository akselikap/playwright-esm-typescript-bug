import { test, expect } from '@playwright/test';
import { testValue } from '../../src/index.js';

test.describe.parallel('Example', () => {
    test('test', () => {
        expect(testValue).toEqual(testValue);
    });
});
