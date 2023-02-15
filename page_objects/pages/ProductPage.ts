import { Selector,t } from "testcafe";

class ProductPage{
    addToCartJacket:Selector
    addToCartBikeLight:Selector
    shoppingCartButton:Selector

    constructor() {
        this.addToCartJacket = Selector('#add-to-cart-sauce-labs-fleece-jacket');
        this.addToCartBikeLight = Selector('#add-to-cart-sauce-labs-bike-light');
        this.shoppingCartButton = Selector('#shopping_cart_container');
    }

      async productAddtoCart() {
        await t
        .click(this.addToCartJacket)
        .click(this.addToCartBikeLight)    
        .click(this.shoppingCartButton);
      }
}
export default new ProductPage();