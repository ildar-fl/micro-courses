import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('/');
  await page.getByPlaceholder('Input name').click();
  await page.getByPlaceholder('Input name').fill('Test name');
  await page.getByPlaceholder('Input description ').click();
  await page.getByPlaceholder('Input description ').fill('test description');
  await page.getByRole('button', { name: 'Add course' }).click();
  await expect(page.getByText('Test nametest descriptionRemove')).toBeVisible();

  await page.getByRole('button', { name: 'Remove' }).click();

  await expect(page.getByText('Test nametest descriptionRemove')).not.toBeVisible();
});