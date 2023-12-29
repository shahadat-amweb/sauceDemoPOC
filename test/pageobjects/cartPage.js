import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CartPage extends Page {
    /**
     * define selectors using getter methods
     */

    get itemPriceInTheCart () {
        return $('[class="inventory_item_price"]');
    }

    get checkoutBtn () {
        return $('#checkout');
    }
}

export default new CartPage();
