import { Page } from "@playwright/test";

export default class TodoPage{

    private get welcomMessage() {
        return `data-testid=welcome`;
    }

    private get noTodo() {
        return `[data-testid=no-todos]`;
    }

    private get deleteIcon() {
        return `[data-testid=delete]`;
    }

    private get todoItem() {
        return '[data-testid=todo-item]';
    }

    async load(page: Page) {
        await page.goto('/todo');
    }

    getWelcomMessageElement(page: Page) {
        return page.locator(this.welcomMessage);
    }

    async deleteTodo(page: Page) {
        await page.click(this.deleteIcon);
    }

    getNoTodoMessage(page: Page) {
        return page.locator(this.noTodo);
    }

    async getTodoItem(page: Page) {
        return page.locator(this.todoItem);
    }
}