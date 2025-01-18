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

test('should load the homepage and navigate correcly when clicking on link', async ({ page }) => {
  await page.goto('/');

  // Check if page title is correct
  await expect(page).toHaveTitle(/PictureInk/);

  // Check if navigation links are visible
  const links = await page.locator('role=link').all();
  expect(links.length).toBe(2);

  // Click the second link
  await links[1].click();
  // Check if it navigates to generate image page
  await expect(page).toHaveURL('/generateImage');

  // Click the first link
  await links[0].click();
  // Check if it navigatea back to homepage
  await expect(page).toHaveURL('/');

  // Check if it navigates to generate image page
  await page.locator('button:text("Start Creating Art")').click();
  await expect(page).toHaveURL('/generateImage');

  //await page.screenshot({ path: './test-screenshots/homepage.png', fullPage: true });
});

test('should display user avatar', async ({ page }) => {
  // Navigate to generate image page
  await page.goto('/generateImage');

  // Check if the user avatar is visible
  const avatar = page.locator('img');
  await expect(avatar).toBeVisible();
  await expect(avatar).toHaveAttribute('src', 'mock picture');
  await expect(avatar).toHaveAttribute('alt', 'mock user');

  // click avatar
  await avatar.click();
  await expect(page.getByText('mock email')).toBeVisible();

  // click logout button
  const logoutButton = page.locator('text="Logout"');
  await logoutButton.click();

  // Check if it navigates back to homepage
  await expect(page).toHaveURL('/');
});
