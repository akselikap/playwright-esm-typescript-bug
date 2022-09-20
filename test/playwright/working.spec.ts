import { test, expect } from '@playwright/test';
import { workingTestValue } from '../../src/test.js';

test.describe.parallel('Example', () => {
    test('test', () => {
        expect(workingTestValue).toEqual(workingTestValue);
    });
});
