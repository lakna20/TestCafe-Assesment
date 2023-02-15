import { Selector,t } from "testcafe";

class CheckoutPage {

    firstNameInput:Selector
    lastNameInput:Selector
    zipCode:Selector
    continueButton:Selector
    finishButton:Selector

    constructor() {
        this.firstNameInput = Selector('#first-name');
        this.lastNameInput = Selector('#last-name');
        this.zipCode = Selector('#postal-code');
        this.continueButton = Selector('#continue');
        this.finishButton = Selector('#finish');
    }

    async fillCheckoutDetails(firstName:string, lastName:string, postalCode: string) {
        await t
        .typeText(this.firstNameInput,firstName)
        .typeText(this.lastNameInput,lastName)
        .typeText(this.zipCode,postalCode)
        .click(this.continueButton)
        .click(this.finishButton)
    }
}
export default new CheckoutPage();