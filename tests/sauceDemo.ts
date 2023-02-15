import * as faker from 'faker';
import LoginPage from '../page_objects/pages/LoginPage';
import config from '../.testcaferc';
import ProductPage from '../page_objects/pages/ProductPage';
import CheckoutPage from '../page_objects/pages/CheckoutPage';
import CartPage from '../page_objects/pages/CartPage';
import { Selector } from 'testcafe';


fixture`Getting Started`
    .page(config.baseUrl);
    
test('Check login function', async t => {
    LoginPage.login(config.loginCredentials.username,config.loginCredentials.password); 
    await t  
    .expect(Selector('.app_logo').visible).ok();

});

test('Check the price of product', async t => {
    LoginPage.login(config.loginCredentials.username,config.loginCredentials.password); 
    const jacketName = Selector('.inventory_item_name').withText('Sauce Labs Fleece Jacket');
    const jacketPrice = Selector('.inventory_item_price').withText('$49.99');

    await t
        .expect(jacketName.exists).ok()
        .expect(jacketPrice.textContent).eql('$49.99');

});

test('Add two products and checkout', async t => {
    LoginPage.login(config.loginCredentials.username,config.loginCredentials.password); 
    ProductPage.productAddtoCart();
    const jacket = Selector('.inventory_item_name').withText('Sauce Labs Fleece Jacket');
    const bikeLight = Selector('.inventory_item_name').withText('Sauce Labs Bike Light');
    await t
    .expect(jacket.exists).ok()
    .expect(bikeLight.exists).ok()
    CartPage.ClickCheckoutButton();
    CheckoutPage.fillCheckoutDetails(faker.name.firstName(),faker.name.lastName(),faker.address.zipCode());
    const orderCompletedLabel = Selector('.complete-header');
    await t 
    .expect(Selector(orderCompletedLabel).textContent).eql('THANK YOU FOR YOUR ORDER');
});

// test('Check added items', async t => {
//     LoginPage.login(config.loginCredentials.username,config.loginCredentials.password); 
//     const jacket = Selector('.inventory_item_name').withText('Sauce Labs Fleece Jacket');
//     const bikeLight = Selector('.inventory_item_name').withText('Sauce Labs Bike Light');
//     await t
//     .expect(jacket.exists).ok()
//     .expect(bikeLight.exists).ok()
//     CartPage.ClickCheckoutButton();
// });

// test('Checkout added items', async t => {
//     CheckoutPage.fillCheckoutDetails(faker.name.firstName(),faker.name.lastName(),faker.address.zipCode());
//     const orderCompletedLabel = Selector('.complete-header');
//     await t 
//     .expect(Selector(orderCompletedLabel).textContent).eql('THANK YOU FOR YOUR ORDER');
// });
        