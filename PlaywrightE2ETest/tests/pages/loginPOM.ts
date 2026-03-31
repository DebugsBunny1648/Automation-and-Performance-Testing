import { Page, expect} from "@playwright/test";      
export class LoginPage {
    readonly page: Page;
    readonly usernameInput;
    readonly passwordInput;
    readonly loginButton;
    readonly pageLogo;;
    readonly errorMessage;
    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.getByText("Login");
        this.pageLogo = page.locator('.login_logo').textContent;
        this.errorMessage=page.locator("//h3[@data-test='error']");
    }

    async enterUsername(uname: string) {
        await this.usernameInput.fill(uname);
        
    }
    async enterPassword(pass: string) {
        await this.passwordInput.fill(pass);
    }
    async clickLoginButton() {
        await this.loginButton.click();
    }

    
}
