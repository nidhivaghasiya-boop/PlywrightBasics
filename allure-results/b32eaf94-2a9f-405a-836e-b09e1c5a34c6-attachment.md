# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: test-20.spec.js >> test
- Location: tests\test-20.spec.js:3:1

# Error details

```
Error: A snapshot doesn't exist at D:\PlaywrightProject\Basic\tests\test-20.spec.js-snapshots\test-1-chromium-win32.png, writing actual.
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('test', async ({ page }) => {
  4  |   await page.goto('https://www.saucedemo.com/');
  5  |   await page.locator('[data-test="username"]').fill('');
> 6  |   await expect(page).toHaveScreenshot({ maxDiffPixels: 200 });  
     |   ^ Error: A snapshot doesn't exist at D:\PlaywrightProject\Basic\tests\test-20.spec.js-snapshots\test-1-chromium-win32.png, writing actual.
  7  |   
  8  |   await page.close();
  9  | });
  10 | 
```