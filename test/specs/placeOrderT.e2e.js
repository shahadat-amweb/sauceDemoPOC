import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import HomePage from '../pageobjects/home.page.js'
import CartPage from '../pageobjects/cartPage.js'
import CheckoutPage from '../pageobjects/checkoutPage.js'
import OverviewPage from '../pageobjects/overviewPage.js'
import { userLoginCredentails } from '../../data/loginData.js'
import { checkoutDetails } from '../../data/checkoutData.js'

describe('Sauce Demo App Automation', () => {
    it('should complete the purchasing process', async () => {
        // Perform login and place an order
        await LoginPage.open()
        await LoginPage.login({...userLoginCredentails});

        // Verify successful visit to homepage
        await expect(await HomePage.flashAlert).toHaveText('Swag Labs');

        // Get the price of the selected item and add it to the cart
        const selectedItemPrice = await HomePage.itemPrice.getText();
        await HomePage.itemToSelect.click();
        await HomePage.shoppingCartIcon.click();

        // Compare the item price in the cart with the selected item price
        const itemPriceInCart = await CartPage.itemPriceInTheCart.getText();
        await expect(selectedItemPrice).toStrictEqual(itemPriceInCart);

        // Proceed to checkout after adding the item to the cart
        await CartPage.checkoutBtn.click();
        await expect(await CheckoutPage.flashAlert).toHaveText('Checkout: Your Information');

        // Fill the checkout form with user information and continue
        await CheckoutPage.fillCheckoutForm({...checkoutDetails});
        await CheckoutPage.continueBtn.click();

        // Verify successful transition to the overview page and check the total price
        await expect(await CheckoutPage.flashAlert).toHaveText('Checkout: Overview');
        await expect(await OverviewPage.isTotalPriceCorrect()).toBe(true);
    });
});


