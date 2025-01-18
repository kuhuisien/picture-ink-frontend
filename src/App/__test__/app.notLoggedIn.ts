import { expect, test } from '@playwright/test';

test('should load the homepage without navigation links', async ({ page }) => {
  await page.goto('/');

  // Check if navigation links are not visible
  const links = await page.locator('role=link').all();
  expect(links.length).toBe(0);

  const startButton = page.locator('text=/start creating art/i');
  await expect(startButton).toBeVisible();

  await expect(page).not.toHaveURL('/');
});

test('should redirect to Home when trying to navigate to other page', async ({ page }) => {
  // Navigate to generate image page
  await page.goto('/generateImage');

  // Check if it navigatea back to homepage
  await expect(page).toHaveURL('/');
});
