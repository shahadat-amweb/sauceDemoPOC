import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get flashAlert () {
        return $('[class="app_logo"]');
    }

    get itemToSelect () {
        return $('[data-test="add-to-cart-sauce-labs-backpack"]');
    } 

    get shoppingCartIcon () {
        return $('[id="shopping_cart_container"]');
    }

    get itemPrice () {
        return $('//button[@data-test="add-to-cart-sauce-labs-backpack"]/../div');
    }
}

export default new HomePage();
