import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
    testDir: 'test/playwright',
    projects: [
        {
            name: 'Chrome Stable',
            use: {
                browserName: 'chromium',
            },
        },
        {
            name: 'Desktop Safari',
            use: {
                browserName: 'webkit',
            },
        },
        // Test against mobile viewports.
        {
            name: 'Mobile Chrome',
            use: devices['Pixel 5'],
        },
        {
            name: 'Mobile Safari',
            use: devices['iPhone 12'],
        },
        {
            name: 'Desktop Firefox',
            use: {
                browserName: 'firefox',
            },
        },
    ],
};

export default config;
