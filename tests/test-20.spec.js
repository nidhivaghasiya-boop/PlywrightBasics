import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('');
  await expect(page).toHaveScreenshot();  
  
  await page.close();
});
