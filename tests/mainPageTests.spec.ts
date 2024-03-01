import { test, expect, Locator } from '@playwright/test';


test.describe('Tests for main page', () => {
    test('Open main page', async ({ page }) => {
        await page.goto('/');
        await expect(page, 'Check page title').toHaveTitle('Głos Milicza')
        await expect(page.locator('[class="logo-text"] img'), 'Check logo visibility').toBeVisible()
        
        const lastArticleLocator: Locator = page.locator('[class="col-md-6 p-rl-1 p-b-2"] h3 a')
        await expect(lastArticleLocator, 'Checking title last article').toContainText(' ')

    })
    
    
})
