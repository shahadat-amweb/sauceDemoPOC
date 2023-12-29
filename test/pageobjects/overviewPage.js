import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * overview page containing specific selectors and methods for a specific page
 */
class OverviewPage extends Page {
    /**
     * define selectors using getter methods
     */

    get flashAlert () {
        return $('[class="header_secondary_container"]>span');
    }

    get itemPrice () {
        return $('[class="summary_subtotal_label"]');
    }

    get taxPrice () {
        return $('[class="summary_tax_label"]');
    }

    get totalPrice () {
        return $('[class="summary_info_label summary_total_label"]')
    }

    async isTotalPriceCorrect () {
        var itemPriceInOverviewPage = (await (await this.itemPrice).getText()).split('$');
        itemPriceInOverviewPage = itemPriceInOverviewPage[1];
        itemPriceInOverviewPage = parseFloat(itemPriceInOverviewPage)
        var taxPriceInOverviewPage = (await (await this.taxPrice).getText()).split('$');
        taxPriceInOverviewPage = taxPriceInOverviewPage[1];
        taxPriceInOverviewPage = parseFloat(taxPriceInOverviewPage)
        var totalPriceInOverviewPage = (await (await this.totalPrice).getText()).split('$');
        totalPriceInOverviewPage = totalPriceInOverviewPage[1];
        totalPriceInOverviewPage = parseFloat(totalPriceInOverviewPage)
        if (taxPriceInOverviewPage+itemPriceInOverviewPage==totalPriceInOverviewPage) {
            return true
        }
        return false
    }
}

export default new OverviewPage();
