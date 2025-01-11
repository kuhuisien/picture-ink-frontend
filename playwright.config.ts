import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  // Reporter to use
  reporter: [['html', { open: 'never' }]],

  use: {
    // Base URL to use in actions like `await page.goto('/')`.
    baseURL: 'http://localhost:5173',

    // Collect trace when retrying the failed test.
    trace: 'on-first-retry',

    headless: process.env.CI === 'true'
  },
  // Configure projects for major browsers.
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    }
  ],
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:5173/'
    //reuseExistingServer: !process.env.CI
  }
});
