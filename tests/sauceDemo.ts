import { Selector } from 'testcafe';
import * as faker from 'faker';


fixture`Getting Started`
    .page`https://www.saucedemo.com/`
    .beforeEach(async t => {
        await t
            .typeText('#user-name', 'performance_glitch_user')
            .typeText('#password', 'secret_sauce')
            .click('#login-button');
    });

test('Check login function', async t => {
    await t
    .expect(Selector('.app_logo').visible).ok();
});

test('Check the price of product', async t => {
    const jacketName = Selector('.inventory_item_name').withText('Sauce Labs Fleece Jacket');
    const jacketPrice = Selector('.inventory_item_price').withText('$49.99');

    await t
        .expect(jacketName.exists).ok()
        .expect(jacketPrice.textContent).contains('$49.99');
});

test('Add two products and checkout', async t => {
    const jacketName = Selector('.inventory_item_name').withText('Sauce Labs Fleece Jacket');
    const bikeLight = Selector('.inventory_item_name').withText('Sauce Labs Bike Light');
   
    await t
        .click('#add-to-cart-sauce-labs-fleece-jacket')
        .click('#add-to-cart-sauce-labs-bike-light')    
        .click('#shopping_cart_container')
        .expect(jacketName.exists).ok()
        .expect(bikeLight.exists).ok()
        .click('#checkout')
        .typeText('#first-name',faker.name.firstName())
        .typeText('#last-name',faker.name.lastName())
        .typeText('#postal-code',faker.address.zipCode())
        .click('#continue')
        .click('#finish');

});
        