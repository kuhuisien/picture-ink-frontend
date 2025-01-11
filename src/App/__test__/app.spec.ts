import { test } from '@playwright/test';

test('should load the homepage and display the correct content', async ({ page }) => {
  await page.goto('/'); // Uses the baseURL defined in the configuration

  // Check if the page title is correct
  //   await expect(page).toHaveTitle(/React App/);

  //   // Check if a specific element is visible
  //   const header = await page.locator('h1');
  //   await expect(header).toHaveText('Welcome to React');

  //   // Simulate a user interaction
  //   await page.click('button#login');
  //   await expect(page.locator('text="Login successful"')).toBeVisible();

  await page.screenshot({ path: './test-screenshots/homepage.png', fullPage: true });
});
