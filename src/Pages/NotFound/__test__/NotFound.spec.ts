import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  // Mock logged in success response
  await page.route('**/user', async (route) => {
    const json = {
      username: 'mock user',
      email: 'mock email',
      picture: 'mock picture',
      token: 'mock token'
    };
    await route.fulfill({ json });
  });
});

test('should load the 404 page', async ({ page }) => {
  // go to unexisting page
  await page.goto('/qwert');

  await expect(page.getByText('404')).toBeVisible();

  // click on button on 404 page
  await page.locator('button', { hasText: /go to home/i }).click();

  // check it navigates to homepage
  await expect(page).toHaveURL('/');
});
