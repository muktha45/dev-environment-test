
import { test, expect } from '@playwright/test';

test('homepage loads successfully', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle('dev-environment-test');
  await expect(page.locator('#root')).toBeVisible();
  await expect(
    page.getByRole('heading', { name: 'Get started' })
  ).toBeVisible();
});

test('React counter button works', async ({ page }) => {
  await page.goto('/');

  const counter = page.getByRole('button', { name: 'Count is 0' });

  await expect(counter).toBeVisible();
  await counter.click();

  await expect(
    page.getByRole('button', { name: 'Count is 1' })
  ).toBeVisible();
});
