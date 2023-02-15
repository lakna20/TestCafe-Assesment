import { Selector,t } from "testcafe";

class CartPage {
    checkOutButton:Selector

    constructor() {
        this.checkOutButton = Selector('#checkout');
    }

      async ClickCheckoutButton() {
        await t
        .click(this.checkOutButton)
      } 
}
export default new CartPage();