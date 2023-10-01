import { test, expect, type Page } from '@playwright/test';
import User from '../models/user';
import SignupPage from '../pages/SignupPage';
import TodoPage from '../pages/TodoPage';

test('Should be able to register to app', async ({ page }) => {

    const user = new User();
    const signupPage = new SignupPage();
    await signupPage.load(page);
    await signupPage.signup(page, user)
    const todoPage = new TodoPage();
    const welcomeMessage = todoPage.getWelcomMessageElement(page);
    await expect(welcomeMessage).toBeVisible();

});